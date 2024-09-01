import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import logo from './quizzle.svg';
import './App.css';
import './Background.css'
import QuizPage from './QuizPage'; 
import Popup from './Popup';
import infoIcon from './info-icon.png'; 

function StartButton() {
  return (
    <Link to="/quiz">
      <button className="start-button">
        START
      </button>
    </Link>
  );
}

function HomePage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="App-header">
      <div className="shape circle"></div>
      <div className="shape diamond"></div>
      <div className="shape triangle"></div>
      
      <img 
        src={infoIcon} 
        alt="Instructions" 
        className="info-icon" 
        onClick={openPopup} 
      />
      <Popup isOpen={isPopupOpen} onClose={closePopup} />
      <div className="main-content">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>We're up when Canvas is down</h3>
        <StartButton />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quiz" element={<QuizPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
