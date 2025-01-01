import React, { useState, useEffect } from 'react';
import Navbar from '../navbar/NavBarWelcome';
import { Button } from 'flowbite-react';

function UploadVideo() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [detectionResults, setDetectionResults] = useState('');
  const [videoFeed, setVideoFeed] = useState('');

  // Initialize socket connection


  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('video/')) {
      setSelectedFile(file);
    } else {
      alert('Please select a valid video file');
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Please select a video file first');
      return;
    }

    setIsUploading(true);

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch('http://34.35.12.216:7017/model/detect/Chicken/', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.blob();
        const videoUrl = URL.createObjectURL(data);
        setVideoFeed(videoUrl);
        console.log('Video processing completed');
      } else {
        console.error('Error uploading video:', response.statusText);
      }
    } catch (error) {
      console.error('Error uploading video:', error);
      alert('Failed to upload and process the video. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="upload-container">
      <Navbar back={"Go back to Dashboard"} />

      <div className="mx-auto pt-[2rem] max-w-[50vw] w-full md:p-5 h-[80vh] md:w-fit flex flex-col">
        <div className="flex mt-[1rem] items-center md:w-[600px] justify-between gap-6">
          <h1 className="font-medium text-[30px] md:text-3xl font-inter">
            <span className="md:border-b-[7px] md:border-[#70E000] mx-1">Set</span> Up Video
          </h1>
        </div>

        <form className="text-black flex flex-col gap-[2rem]">
          <div className="text-black font-medium flex flex-col gap-[1.3rem] font-poppins text-[15px] leading-[20px]">
            <input
              type="file"
              accept="video/*"
              onChange={handleFileSelect}
              className="border-b-2 w-[100%] mt-[1.8rem] focus:outline-none focus:border-b-[#70E000]"
            />
            {selectedFile && (
              <p className="text-sm text-gray-500">Selected file: {selectedFile.name}</p>
            )}
          </div>
        </form>

        <div className="flex justify-center p-4">
          <Button
            onClick={handleUpload}
            disabled={isUploading}
            className="text-[#FFFFFF] w-full text-center mt-[2rem] font-poppins font-medium border md:w-[80px] border-[#70E000] hover:bg-white hover:drop-shadow-[0_5px_10px_#70e000] hover:shadow-[#70e000]/70 hover:border-none hover:text-[#70e000] rounded bg-[#70E000]"
          >
            {isUploading ? 'Uploading...' : 'Upload Video'}
          </Button>
        </div>

        <div className="video-container mt-4">
          {videoFeed && <img src={videoFeed} alt="Video Feed" className="w-full max-w-[600px]" />}
        </div>

        <div className="detection-results mt-4">
          {detectionResults && (
            <div className="text-gray-700">
              <strong>Detection Summary:</strong>
              <pre>{detectionResults}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UploadVideo;
