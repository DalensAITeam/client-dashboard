import PropTypes from "prop-types"

/**
 * VideoStreamPlaceholder component for displaying a placeholder when no video stream is available
 */
const VideoStreamPlaceholder = ({ title, className = "", ipAddress = "" }) => {
  return (
    <div className={`video-placeholder relative ${className} w-full h-full bg-gray-900 flex flex-col items-center justify-center`}>
      <div className="absolute inset-0 border border-gray-700 rounded"></div>
      
      {/* Header bar */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-gray-800 flex items-center px-3">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        {title && <span className="ml-4 text-sm text-gray-400">{title}</span>}
      </div>

      {/* Center content */}
      <div className="text-center p-4">
        <svg className="w-16 h-16 mx-auto text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
        </svg>
        <p className="text-gray-400 mt-4 text-sm">Waiting for video stream...</p>
        <p className="text-gray-500 mt-2 text-xs">Check camera connection</p>
        {ipAddress && (
          <p className="text-gray-400 mt-2 text-xs">
            IP Address: {ipAddress}
          </p>
        )}
      </div>

      {/* Status bar */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gray-800 flex items-center justify-between px-3">
        <div className="flex items-center">
          <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
          <span className="text-gray-400 text-xs">Not connected</span>
        </div>
        <span className="text-gray-400 text-xs">Attempting to connect...</span>
      </div>
    </div>
  )
}

VideoStreamPlaceholder.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  ipAddress: PropTypes.string
}

export default VideoStreamPlaceholder
