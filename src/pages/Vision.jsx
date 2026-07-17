import React from 'react';

export default function Vision() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Intro section */}
      <section className="text-center py-20 px-4">
        <h2 className="text-sm font-bold tracking-widest text-gray-400 uppercase">Apple Vision Pro</h2>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mt-3">Welcome to the era of spatial computing.</h1>
        <div className="mt-8 flex justify-center">
          <img src="/src/assets/vision1.png" alt="Vision Pro" className="max-w-full h-auto rounded-xl" />
        </div>
      </section>

      {/* Layout Content blocks code  */}
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-16">
        <div className="bg-zinc-900 p-8 rounded-2xl">
          <h3 className="text-2xl font-semibold mb-2">Blend digital content with physical space.</h3>
          <p className="text-gray-400 text-sm">So you can work, watch, and relive memories in ways never before possible.</p>
          <img src="/src/assets/vision2.png" className="w-full mt-6 rounded-lg object-cover h-[300px]" />
        </div>

        <div className="bg-zinc-900 p-8 rounded-2xl">
          <h3 className="text-2xl font-semibold mb-2">Take a closer look.</h3>
          <img src="/src/assets/vision3.png" className="w-full mt-6 rounded-lg object-cover h-[300px]" />
        </div>
      </section>
    </div>
  );
}
