import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import HandScan from './pages/HandScan';
import AnalysisResult from './pages/AnalysisResult';
import ShellRecommendation from './pages/ShellRecommendation';
import Customization from './pages/Customization';
import Checkout from './pages/Checkout';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0D0F12] text-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/scan" element={<HandScan />} />
          <Route path="/analysis" element={<AnalysisResult />} />
          <Route path="/recommendation" element={<ShellRecommendation />} />
          <Route path="/customize" element={<Customization />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
