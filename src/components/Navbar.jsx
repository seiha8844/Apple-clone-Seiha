import React from 'react';

export default function Navbar({ navigate }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 border-b border-gray-200">
      <nav className="max-w-[1024px] mx-auto h-11 px-4 flex items-center justify-between text-xs text-gray-600">
        <button onClick={() => navigate('home')} className="text-black font-semibold text-sm cursor-pointer"></button>
        <button onClick={() => navigate('home')} className="cursor-pointer">Store</button>
        <button onClick={() => navigate('home')} className="cursor-pointer">Mac</button>
        <button onClick={() => navigate('home')} className="cursor-pointer">iPad</button>
        <button onClick={() => navigate('home')} className="cursor-pointer">iPhone</button>
        <button onClick={() => navigate('vision')} className="text-blue-600 font-semibold cursor-pointer">Vision</button>
        <button onClick={() => navigate('entertainment')} className="text-blue-600 font-semibold cursor-pointer">Entertainment</button>
        <span className="cursor-pointer">🔍</span>
        <span className="cursor-pointer">🛍️</span>
      </nav>
    </header>
  );
}
