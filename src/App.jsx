import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Send from './Send';
import Files from './Files';
const App = () => {
  return (
    <>
      <Router>
        <Routes>
         
          <Route path="/firebasesendfiles" element={<Send />} />
          <Route path='/firebasesendfiles/Files' element={<Files/>}/>
        </Routes>
      </Router>
    </>
  );
};

export default App;
