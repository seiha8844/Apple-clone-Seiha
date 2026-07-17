import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Vision from './pages/Vision';
import Entertainment from './pages/Entertainment';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home />;
      case 'vision': return <Vision />;
      case 'entertainment': return <Entertainment />;
      default: return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#1d1d1f] flex flex-col antialiased">
      <Navbar navigate={setCurrentPage} />
      <main className="flex-grow pt-11">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}
