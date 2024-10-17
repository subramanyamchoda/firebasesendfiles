import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from './Firebase';
import { useNavigate } from 'react-router-dom';

const Send = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [downloadURL, setDownloadURL] = useState('');
  const navigate = useNavigate();

  const sendfile = (e) => {
    setFile(e.target.files[0]);
  };

  const submit = (e) => {
    e.preventDefault();

    // Ensure a file is selected
    if (!file) {
      alert('Please select a file to upload');
      return;
    }

    // Step 1: Send email
    const templateParams = {
      user_name: 'John Doe',  // Hardcoded Name
      user_email: 'subramanymchoda50@gmail.com',  // Hardcoded Email
      message: 'text me'  // Hardcoded Message
    };

    emailjs.send('service_q9mc1gb', 'template_sqc4joo', templateParams, 'jN--TlZc4OPInknIx')
      .then((result) => {
        console.log(' sent successfully:', result.text);
        // Proceed to file upload after email is sent
        uploadFile();
      }, (error) => {
        console.error('Error sending :', error.text);
      });
  };

  // Step 2: Upload the file to Firebase Storage
  const uploadFile = () => {
    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    setUploading(true);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Optionally, you can add progress tracking here
      },
      (error) => {
        console.error("Error uploading file:", error);
        setUploading(false);
      },
      () => {
        // Upload completed successfully, get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setDownloadURL(downloadURL); // Save the download URL
          setUploading(false);
          // Pass the downloadURL as state while navigating to /Files

          navigate('/firebasesendfiles/Files', { state: { downloadURL } });

        });
      }
    );
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow">
        <h1 className='text-center display-4'>Send File</h1><br />
        <form onSubmit={submit}>
          <div className="form-group mb-3">
            <input
              type="file"
              className='form-control'
              onChange={sendfile}
              name='file'
              required
            />
          </div>
          <button type='submit' className='btn btn-primary w-100' disabled={uploading}>
            {uploading ? 'Uploading...' : 'Send'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Send;
