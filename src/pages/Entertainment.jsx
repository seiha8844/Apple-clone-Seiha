import React from 'react';

export default function Entertainment() {
  const customChannels = [
    { name: "Channel One", src: "/src/assets/chanel1.png" },
    { name: "Channel Two", src: "/src/assets/chanel2.png" },
    { name: "Channel Three", src: "/src/assets/chanel3.png" },
    { name: "Channel Four", src: "/src/assets/chanel4.png" }
  ];

  return (
    <div className="bg-[#f5f5f7] py-16 min-h-screen">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <h1 className="text-4xl font-semibold text-black tracking-tight">Meet the A-list of entertainment.</h1>
        <p className="text-gray-500 mt-2 mb-12">Award-winning movies, beautiful music collections, and advanced mobile games.</p>

        {/* 4 Block Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {customChannels.map((item, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm flex flex-col justify-between h-[280px]">
              <img src={item.src} alt={item.name} className="w-full h-[200px] object-cover" />
              <div className="p-4 text-left font-semibold text-sm text-gray-800">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
