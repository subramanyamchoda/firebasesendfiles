import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Send from './Send';
import Files from './Files';
const App = () => {
  return (
    <>
      <Router>
        <Routes>
         
<<<<<<< HEAD
          <Route path="/firebasesendfiles" element={<Send />} />
          
          <Route path='/firebasesendfiles/files' element={<Files/>}/>
=======
          <Route path="/" element={<Send />} />
          <Route path="/firebasesendfiles/home" element={<Send />} />
          <Route path="/firebasesendfiles/" element={<Send />} />
          
          <Route path='/firebasesendfiles/Files' element={<Files/>}/>
>>>>>>> 05cb2a8bdbc668b354de7f41c6aff6caf9cb787b
        </Routes>
      </Router>
    </>
  );
};

export default App;
