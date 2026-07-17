import React, { useState } from 'react';

// =========================================================================
// 📦 LOCAL ASSETS IMPORTS
// =========================================================================
import iphoneImg from '../assets/home-iphone.png';
import macImg from '../assets/home-mac.png';
import ipadImg from '../assets/home-ipad.png';
import macbookProImg from '../assets/home-macbook-pro.png';
import watchImg from '../assets/home-watch.png';
import ipadProImg from '../assets/home-ipad-pro.png';

import slide1 from '../assets/slide1.png';
import slide2 from '../assets/slide2.png';
import slide3 from '../assets/slide3.png';

import chanel1 from '../assets/chanel1.png';
import chanel2 from '../assets/chanel2.png';
import chanel3 from '../assets/chanel3.png';

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(1);

  // Carousel Slides Order
  const sliderImages = [slide3, slide1, slide2, slide3, slide1];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  return (
    <div className="w-full bg-white flex flex-col items-center overflow-x-hidden font-sans antialiased text-[#1d1d1f]">
      
      {/* =========================================================================
          1. HERO 1: iPhone
         ========================================================================= */}
      <section className="relative w-full h-[692px] bg-[#fbfbfd] border-b-[12px] border-white overflow-hidden flex flex-col items-center">
        {/* Texts */}
        <div className="absolute top-[52px] text-center z-10">
          <h1 className="text-[56px] font-semibold tracking-[-0.02em] leading-none text-[#1d1d1f]">iPhone</h1>
          <p className="text-[28px] mt-2 font-normal text-[#1d1d1f]">Meet the latest iPhone lineup.</p>
          <div className="flex justify-center gap-4 mt-5">
            <button className="bg-[#0071e3] text-white px-6 py-3 rounded-full text-[17px] font-normal hover:bg-[#0077ed] transition-all cursor-pointer">Learn more</button>
            <button className="border border-[#0071e3] text-[#0071e3] px-6 py-3 rounded-full text-[17px] font-normal hover:bg-[#0071e3] hover:text-white transition-all cursor-pointer">Shop iPhone</button>
          </div>
        </div>
        
        {/* Bottom Image */}
        <div className="absolute bottom-0 w-full flex justify-center h-[480px]">
          <img 
            src={iphoneImg} 
            alt="iPhone Lineup" 
            className="h-full object-contain object-bottom" 
          />
        </div>
      </section>

      {/* =========================================================================
          2. HERO 2: MacBook Air
         ========================================================================= */}
      <section className="relative w-full h-[692px] bg-[#fbfbfd] border-b-[12px] border-white overflow-hidden flex flex-col items-center">
        {/* Texts */}
        <div className="absolute top-[52px] text-center z-10 px-4">
          <h1 className="text-[56px] font-semibold tracking-[-0.02em] leading-none text-[#1d1d1f]">MacBook Air</h1>
          <p className="text-[28px] text-[#1d1d1f] mt-2 font-normal">Now supercharged by M5.</p>
          <div className="flex justify-center gap-4 mt-5">
            <button className="bg-[#0071e3] text-white px-6 py-3 rounded-full text-[17px] font-normal hover:bg-[#0077ed] transition-all cursor-pointer">Learn more</button>
            <button className="border border-[#0071e3] text-[#0071e3] px-6 py-3 rounded-full text-[17px] font-normal hover:bg-[#0071e3] hover:text-white transition-all cursor-pointer">Buy</button>
          </div>
        </div>
        
        {/* Bottom Image */}
        <div className="absolute bottom-0 w-full flex justify-center h-[480px]">
          <img 
            src={macImg} 
            alt="MacBook Air" 
            className="h-full object-contain object-bottom" 
          />
        </div>
      </section>

      {/* =========================================================================
          3. CONTENT CARDS GRID (Exactly 2x2 Grid)
         ========================================================================= */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-[12px] w-full max-w-[1523px] mx-auto px-[12px] pb-[12px]">
        
        {/* Card 1: iPad Air */}
        <div className="relative h-[580px] overflow-hidden bg-[#fbfbfd] flex flex-col items-center rounded-sm">
          <div className="absolute top-[36px] text-center z-10">
            <h2 className="text-[40px] font-semibold tracking-[0.02em] text-[#1d1d1f]">
              iPad <span className="text-[#0071e3] font-medium">air</span>
            </h2>
            <p className="mt-2 text-[21px] text-[#1d1d1f]">Now supercharged by M4.</p>
            <div className="flex justify-center gap-4 mt-5">
              <button className="bg-[#0071e3] text-white px-5 py-[10px] rounded-full text-[17px] font-normal hover:bg-[#0077ed] transition-all cursor-pointer">Learn more</button>
              <button className="border border-[#0071e3] text-[#0071e3] px-5 py-[10px] rounded-full text-[17px] font-normal hover:bg-[#0071e3] hover:text-white transition-all cursor-pointer">Buy</button>
            </div>
          </div>
          <div className="absolute bottom-0 w-full flex justify-center h-[350px] items-end">
            <img src={ipadImg} alt="iPad Air" className="h-full object-contain object-bottom" />
          </div>
        </div>

        {/* Card 2: MacBook Pro */}
        <div className="relative h-[580px] overflow-hidden bg-black flex flex-col items-center rounded-sm">
          <div className="absolute top-[42px] text-center z-10">
            <h2 className="text-[40px] font-semibold tracking-[0.02em] text-white">MacBook Pro</h2>
            <p className="text-[#a1a1a6] mt-2 text-[21px]">Now with M5, M5 Pro, and M5 Max.</p>
            <div className="flex justify-center gap-4 mt-5">
              <button className="bg-[#0071e3] text-white px-5 py-[10px] rounded-full text-[17px] font-normal hover:bg-[#0077ed] transition-all cursor-pointer">Learn more</button>
              <button className="border border-white/45 text-white px-5 py-[10px] rounded-full text-[17px] font-normal hover:bg-white hover:text-black transition-all cursor-pointer">Buy</button>
            </div>
          </div>
          <div className="absolute bottom-0 w-full flex justify-center h-[350px] items-end">
            <img src={macbookProImg} alt="MacBook Pro" className="h-full object-contain object-bottom" />
          </div>
        </div>

        {/* Card 3: Apple Watch Series 11 */}
        <div className="relative h-[580px] overflow-hidden bg-[#fbfbfd] flex flex-col items-center rounded-sm">
          <div className="absolute top-[36px] text-center z-10">
            <h2 className="text-[34px] font-semibold text-[#1d1d1f] flex items-center justify-center gap-1">
              <span>WATCH</span> 
              <span className="text-[12px] uppercase tracking-wider font-bold border border-black px-1.5 py-0.5 rounded-md align-middle ml-1">Series 11</span>
            </h2>
            <p className="mt-3 text-[21px] text-[#6e6e73]">The ultimate way to watch your health.</p>
            <div className="flex justify-center gap-4 mt-5">
              <button className="bg-[#0071e3] text-white px-5 py-[10px] rounded-full text-[17px] font-normal hover:bg-[#0077ed] transition-all cursor-pointer">Learn more</button>
              <button className="border border-[#0071e3] text-[#0071e3] px-5 py-[10px] rounded-full text-[17px] font-normal hover:bg-[#0071e3] hover:text-white transition-all cursor-pointer">Buy</button>
            </div>
          </div>
          <div className="absolute bottom-0 w-full flex justify-center h-[350px] items-end">
            <img src={watchImg} alt="Apple Watch Series 11" className="h-full object-contain object-bottom" />
          </div>
        </div>

        {/* Card 4: iPad Pro */}
        <div className="relative h-[580px] overflow-hidden bg-black flex flex-col items-center rounded-sm">
          <div className="absolute top-[42px] text-center z-10">
            <h2 className="text-[40px] font-semibold tracking-[0.02em] text-white">iPad Pro</h2>
            <p className="text-[#a1a1a6] mt-2 text-[21px]">Advanced AI performance and capabilities.</p>
            <div className="flex justify-center gap-4 mt-5">
              <button className="bg-[#0071e3] text-white px-5 py-[10px] rounded-full text-[17px] font-normal hover:bg-[#0077ed] transition-all cursor-pointer">Learn more</button>
              <button className="border border-white/45 text-white px-5 py-[10px] rounded-full text-[17px] font-normal hover:bg-white hover:text-black transition-all cursor-pointer">Buy</button>
            </div>
          </div>
          <div className="absolute bottom-0 w-full flex justify-center h-[350px] items-end">
            <img src={ipadProImg} alt="iPad Pro" className="h-full object-contain object-bottom" />
          </div>
        </div>

      </section>

      {/* =========================================================================
          4. ENDLESS ENTERTAINMENT CAROUSEL & BANNERS
         ========================================================================= */}
      <section className="w-full bg-white py-12 flex flex-col items-center overflow-hidden">
        <h2 className="text-[40px] font-bold tracking-tight text-[#1d1d1f] mb-8">Endless entertainment.</h2>
        
        {/* Horizontal Carousel Area */}
        <div className="relative w-full flex items-center justify-center">
          <div className="relative flex items-center justify-center gap-4 w-full h-[580px] overflow-hidden">
            
            {/* Peeking Left */}
            <div className="w-[180px] h-[520px] opacity-45 shrink-0 overflow-hidden rounded-2xl">
              <img 
                src={sliderImages[(currentSlide - 1 + sliderImages.length) % sliderImages.length]} 
                className="w-full h-full object-cover" 
                alt="Previous Slide"
              />
            </div>

            {/* Main Center slide */}
            <div className="relative w-[980px] h-[540px] rounded-2xl overflow-hidden shadow-2xl z-10">
              <img 
                src={sliderImages[currentSlide]} 
                alt="Active Stream Slide" 
                className="w-full h-full object-cover"
              />
              <button onClick={prevSlide} className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white w-12 h-12 rounded-full flex items-center justify-center cursor-pointer text-lg z-20">❮</button>
              <button onClick={nextSlide} className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white w-12 h-12 rounded-full flex items-center justify-center cursor-pointer text-lg z-20">❯</button>
            </div>

            {/* Peeking Right */}
            <div className="w-[180px] h-[520px] opacity-45 shrink-0 overflow-hidden rounded-2xl">
              <img 
                src={sliderImages[(currentSlide + 1) % sliderImages.length]} 
                className="w-full h-full object-cover" 
                alt="Next Slide"
              />
            </div>

          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="w-full max-w-[980px] flex items-center justify-between mt-6 px-4">
          <div className="w-8"></div>
          <div className="flex gap-2">
            {sliderImages.map((_, index) => (
              <button 
                key={index} 
                onClick={() => setCurrentSlide(index)} 
                className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${currentSlide === index ? 'bg-[#1d1d1f] scale-110' : 'bg-[#d2d2d7]'}`} 
              />
            ))}
          </div>
          <button onClick={() => setIsPlaying(!isPlaying)} className="text-[#86868b] hover:text-black cursor-pointer text-[14px]">
            {isPlaying ? '⏸' : '▶'}
          </button>
        </div>

        {/* Dynamic Service Promotions Grid */}
        <div className="w-full max-w-[1000px] grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 px-4">
          
          {/* Card 1: Arcade */}
          <div className="bg-[#f5f5f7] rounded-[22px] overflow-hidden flex flex-col justify-between border border-gray-200/60 shadow-sm hover:shadow-md transition-all h-[240px]">
            <div className="w-full h-[130px] overflow-hidden">
              <img src={chanel1} alt="Apple Arcade" className="w-full h-full object-cover" />
            </div>
            <div className="p-5 flex justify-between items-center bg-white">
              <div className="text-left">
                <h3 className="font-bold text-[14px] text-gray-900">Apple Arcade</h3>
                <p className="text-[12px] text-[#6e6e73] mt-0.5 leading-snug">Get 3 months of Apple Arcade free.</p>
              </div>
              <button className="bg-[#0071e3] text-white font-semibold text-[11px] px-4 py-1.5 rounded-full hover:bg-[#0077ed] transition-all cursor-pointer">
                Try it free
              </button>
            </div>
          </div>

          {/* Card 2: Music */}
          <div className="bg-[#f5f5f7] rounded-[22px] overflow-hidden flex flex-col justify-between border border-gray-200/60 shadow-sm hover:shadow-md transition-all h-[240px]">
            <div className="w-full h-[130px] overflow-hidden">
              <img src={chanel2} alt="Apple Music" className="w-full h-full object-cover" />
            </div>
            <div className="p-5 flex justify-between items-center bg-white">
              <div className="text-left">
                <h3 className="font-bold text-[14px] text-gray-900">Apple Music</h3>
                <p className="text-[12px] text-[#6e6e73] mt-0.5 leading-snug">Over 100 million songs. Ad-free.</p>
              </div>
              <button className="bg-[#0071e3] text-white font-semibold text-[11px] px-4 py-1.5 rounded-full hover:bg-[#0077ed] transition-all cursor-pointer">
                Listen now
              </button>
            </div>
          </div>

          {/* Card 3: TV+ */}
          <div className="bg-[#f5f5f7] rounded-[22px] overflow-hidden flex flex-col justify-between border border-gray-200/60 shadow-sm hover:shadow-md transition-all h-[240px]">
            <div className="w-full h-[130px] overflow-hidden">
              <img src={chanel3} alt="Apple TV+" className="w-full h-full object-cover" />
            </div>
            <div className="p-5 flex justify-between items-center bg-white">
              <div className="text-left">
                <h3 className="font-bold text-[14px] text-gray-900">Apple TV+</h3>
                <p className="text-[12px] text-[#6e6e73] mt-0.5 leading-snug">New Apple Originals every month.</p>
              </div>
              <button className="bg-[#0071e3] text-white font-semibold text-[11px] px-4 py-1.5 rounded-full hover:bg-[#0077ed] transition-all cursor-pointer">
                Stream now
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          5. COMPLETE UNIFIED FOOTER (No redundant external blocks)
         ========================================================================= */}
      <footer className="w-full bg-[#f5f5f7] text-[#6e6e73] text-[11px] py-10 flex flex-col items-center border-t border-gray-200">
        <div className="w-full max-w-[1000px] px-4">
          
          {/* Footnotes Section */}
          <div className="space-y-3 pb-8 border-b border-gray-300/85 leading-relaxed text-[#86868b]">
            <p>1. Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device. Not all devices are eligible for credit. You must be at least 18 years old to be eligible to trade in for credit or for an Apple Gift Card. Trade-in in the US requires a valid government-issued photo ID.</p>
            <p>2. Subscription is required for Apple Arcade, Apple Fitness+, Apple Music, and Apple TV+.</p>
            <p>3. Special pricing available for qualified customers. To learn more about how to start qualifying for special pricing, please visit an Apple Store or call 1-800-MY-APPLE.</p>
            <p>Features and services are subject to change. Some features, applications, and services may not be available in all regions or all languages.</p>
          </div>

          {/* Directory Sitemap Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 py-8 leading-loose">
            <div className="flex flex-col gap-1.5">
              <h3 className="font-semibold text-gray-800 text-[11px] mb-1">Shop and Learn</h3>
              <a href="#" className="hover:underline">Store</a>
              <a href="#" className="hover:underline">Mac</a>
              <a href="#" className="hover:underline">iPad</a>
              <a href="#" className="hover:underline">iPhone</a>
              <a href="#" className="hover:underline">Watch</a>
              <a href="#" className="hover:underline">Vision</a>
              <a href="#" className="hover:underline">AirPods</a>
            </div>
            <div className="flex flex-col gap-1.5">
              <h3 className="font-semibold text-gray-800 text-[11px] mb-1">Account</h3>
              <a href="#" className="hover:underline">Manage Your Apple ID</a>
              <a href="#" className="hover:underline">Apple Store Account</a>
              <a href="#" className="hover:underline">iCloud.com</a>
              <h3 className="font-semibold text-gray-800 text-[11px] mt-4 mb-1">Entertainment</h3>
              <a href="#" className="hover:underline">Apple One</a>
              <a href="#" className="hover:underline">Apple TV+</a>
              <a href="#" className="hover:underline">Apple Music</a>
            </div>
            <div className="flex flex-col gap-1.5">
              <h3 className="font-semibold text-gray-800 text-[11px] mb-1">Apple Store</h3>
              <a href="#" className="hover:underline">Find a Store</a>
              <a href="#" className="hover:underline">Genius Bar</a>
              <a href="#" className="hover:underline">Today at Apple</a>
              <a href="#" className="hover:underline">Group Reservations</a>
              <a href="#" className="hover:underline">Apple Camp</a>
            </div>
            <div className="flex flex-col gap-1.5">
              <h3 className="font-semibold text-gray-800 text-[11px] mb-1">For Business</h3>
              <a href="#" className="hover:underline">Apple and Business</a>
              <a href="#" className="hover:underline">Shop for Business</a>
              <h3 className="font-semibold text-gray-800 text-[11px] mt-4 mb-1">For Education</h3>
              <a href="#" className="hover:underline">Apple and Education</a>
            </div>
            <div className="flex flex-col gap-1.5">
              <h3 className="font-semibold text-gray-800 text-[11px] mb-1">Apple Values</h3>
              <a href="#" className="hover:underline">Accessibility</a>
              <a href="#" className="hover:underline">Education</a>
              <a href="#" className="hover:underline">Environment</a>
              <a href="#" className="hover:underline">Inclusion and Diversity</a>
              <a href="#" className="hover:underline">Privacy</a>
            </div>
          </div>

          {/* Retailer Info */}
          <div className="pb-5 text-[#86868b] leading-normal border-b border-gray-300/85">
            More ways to shop: <span className="text-[#0071e3] underline cursor-pointer">Find an Apple Store</span> or <span className="text-[#0071e3] underline cursor-pointer">other retailer</span> near you. Or call 1-800-MY-APPLE.
          </div>

          {/* Copyright, Region, & term bar */}
          <div className="pt-5 text-[#86868b] flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
            <div>
              Copyright © 2026 Apple Inc. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-x-3 gap-y-1">
              <a href="#" className="hover:underline">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:underline">Terms of Use</a>
              <span>|</span>
              <a href="#" className="hover:underline">Sales and Refunds</a>
              <span>|</span>
              <a href="#" className="hover:underline">Legal</a>
              <span>|</span>
              <a href="#" className="hover:underline">Site Map</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
