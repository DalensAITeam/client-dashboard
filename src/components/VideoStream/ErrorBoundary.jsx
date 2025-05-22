import React from 'react';
import toast from 'react-hot-toast';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      streamStatus: 'disconnected',
      errorCount: 0,
      lastErrorTime: null,
      isRetrying: false
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Video stream error:', error);
    
    const now = Date.now();
    const errorThreshold = 5000; // 5 seconds between errors to reset count
    
    this.setState(prevState => {
      const isNewErrorBurst = !prevState.lastErrorTime || (now - prevState.lastErrorTime) > errorThreshold;
      
      return {
        errorInfo,
        lastErrorTime: now,
        errorCount: isNewErrorBurst ? 1 : prevState.errorCount + 1,
        streamStatus: this.categorizeError(error)
      };
    });

    this.showErrorToast(error);
  }

  categorizeError(error) {
    if (!error) return 'unknown_error';

    const errorMessage = error.message?.toLowerCase() || '';
    
    if (errorMessage.includes('camera') || errorMessage.includes('video stream')) {
      return 'camera_error';
    }
    if (errorMessage.includes('network') || errorMessage.includes('connection')) {
      return 'connection_error';
    }
    if (errorMessage.includes('timeout')) {
      return 'timeout_error';
    }
    if (errorMessage.includes('server')) {
      return 'server_error';
    }
    
    return 'unknown_error';
  }

  showErrorToast(error) {
    const { errorCount } = this.state;
    const status = this.categorizeError(error);
    
    let message = 'An error occurred';
    let duration = 3000;

    switch (status) {
      case 'camera_error':
        message = 'Camera connection failed. Check DroidCam settings.';
        duration = 5000;
        break;
      case 'connection_error':
        message = 'Network connection lost. Retrying...';
        duration = 3000;
        break;
      case 'timeout_error':
        message = 'Connection timed out. Check your network.';
        duration = 4000;
        break;
      case 'server_error':
        message = 'Server error. Please try again later.';
        duration = 4000;
        break;
    }

    if (errorCount <= 3) {
      toast.error(message, { duration });
    } else if (errorCount === 4) {
      toast.error('Multiple errors detected. Try refreshing the page.', { duration: 5000 });
    }
  }

  getErrorMessage() {
    const { streamStatus, errorCount } = this.state;
    const ipAddress = this.props.ipAddress || 'unknown';

    switch (streamStatus) {
      case 'camera_error':
        return (
          <>
            <p>Camera connection failed. Please verify:</p>
            <ul className="list-disc list-inside mt-2">
              <li>DroidCam app is running</li>
              <li>Device is on the same network</li>
              <li>IP address is correct: {ipAddress}</li>
              <li>Port 4747 is not blocked</li>
              <li>Camera is not in use by another app</li>
            </ul>
            {errorCount > 2 && (
              <p className="mt-2 text-yellow-600">
                Multiple connection failures. Try restarting DroidCam.
              </p>
            )}
          </>
        );

      case 'connection_error':
        return (
          <>
            <p>Network connection issue</p>
            <p className="mt-1">Cannot establish connection. Please check:</p>
            <ul className="list-disc list-inside mt-2">
              <li>Your network connection is stable</li>
              <li>The Flask backend server is running</li>
              <li>No firewall is blocking the connection</li>
            </ul>
            {errorCount > 2 && (
              <p className="mt-2 text-yellow-600">
                Connection is unstable. Try a different network.
              </p>
            )}
          </>
        );

      case 'timeout_error':
        return (
          <>
            <p>Connection Timeout</p>
            <p className="mt-1">The connection timed out. This might be due to:</p>
            <ul className="list-disc list-inside mt-2">
              <li>Slow network connection</li>
              <li>High server load</li>
              <li>Network restrictions</li>
            </ul>
          </>
        );

      case 'server_error':
        return (
          <>
            <p>Server Error</p>
            <p className="mt-1">The server encountered an error. Please try:</p>
            <ul className="list-disc list-inside mt-2">
              <li>Refreshing the page</li>
              <li>Checking server status</li>
              <li>Contacting support if the issue persists</li>
            </ul>
          </>
        );

      default:
        return (
          <>
            <p>Unexpected Error</p>
            <p className="mt-1">An unexpected error occurred. Please try:</p>
            <ul className="list-disc list-inside mt-2">
              <li>Refreshing the page</li>
              <li>Checking your connection</li>
              <li>Verifying camera settings</li>
            </ul>
          </>
        );
    }
  }

  retryConnection = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorCount: 0,
      lastErrorTime: null,
      isRetrying: true
    });

    setTimeout(() => {
      this.setState({ isRetrying: false });
    }, 1000);

    if (this.props.onRetry) {
      this.props.onRetry();
    }
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg">
          <h3 className="text-lg font-semibold text-red-600 mb-2">
            Stream Error
          </h3>
          
          <div className="text-sm text-gray-600 mb-4">
            {this.getErrorMessage()}
          </div>

          <div className="flex gap-3">
            <button
              onClick={this.retryConnection}
              disabled={this.state.isRetrying}
              className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 
                       transition-colors duration-200 ${this.state.isRetrying ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {this.state.isRetrying ? 'Retrying...' : 'Retry Connection'}
            </button>

            {this.state.errorCount > 3 && (
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 
                         transition-colors duration-200"
              >
                Refresh Page
              </button>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;