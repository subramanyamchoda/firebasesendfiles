import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Files = () => {
  const location = useLocation();
  const { downloadURL } = location.state || {}; 
  

  const copyToClipboard = () => {
    if (downloadURL) {
      navigator.clipboard.writeText(downloadURL)
        .then(() => {
        
          window.location.href = 'https://codedpad.com'; 
          
        })
        .catch((err) => {
          console.error('Failed to copy URL: ', err);
        });
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow">
        {downloadURL ? (
          <div className="mt-4 text-center">
            <p>File uploaded successfully!<br/> You can copy the URL below:</p><br />
            <p><b>Copy that URL, and paste in  codedpad it to use that URL to download the files.</b></p><br />
            <button onClick={copyToClipboard} className="btn btn-success">
              Copy URL
            </button>
            
            <p className="mt-3"><strong>URL:</strong> {downloadURL}</p>
          </div>
        ) : (
          <p>No file found. Please upload a file first.</p>
        )}
      </div>    
    </div>
  );
};

export default Files;
