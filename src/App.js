import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'
import LoginPage from './pages/Login/LoginPage';
import QuestionPage from './pages/Question/QuestionPage';
import MainPage from './pages/Main/MainPage';
import InfoPage from './pages/Info/InfoPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/question" element={<QuestionPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/info" element={<InfoPage />} />
      </Routes>
    </Router>

  );
}

export default App;
