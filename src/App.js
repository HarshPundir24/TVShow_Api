import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import Navbar from './components/Navbar';
import ShowList from './components/ShowList';
import ShowDetails from './components/ShowDetails';

const App = () => {
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <LoadingBar color='#f11946' progress={progress} />
        <Navbar />
        <Routes>
          <Route path='/' index element={<ShowList setProgress={setProgress} />}/>
          <Route path='/show/:id' element={<ShowDetails setProgress={setProgress} />}/>
          <Route path='*' index element={<ShowList setProgress={setProgress} />}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
