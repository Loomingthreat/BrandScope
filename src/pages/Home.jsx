// File: /src/pages/Home.jsx
import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Upper Bar */}
      <div className="relative h-[33vh] w-full overflow-hidden bg-black">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
          autoPlay
          muted
          loop
        >
          <source src="/data-graph.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img
            src="https://github.com/Loomingthreat/BrandScope/blob/main/logo-graph.gif?raw=true"
            alt="Logo"
            className="w-40 h-40 object-contain"
          />
        </div>
      </div>

      {/* Middle Bar */}
      <div
        className="h-[33vh] w-full"
        style={{
          background: "linear-gradient(to right, #590A47, #AA3A49)"
        }}
      >
        <div className="h-full flex items-center justify-center">
          <h2 className="text-3xl text-white font-bold">Welcome to BrandScope</h2>
        </div>
      </div>

      {/* Lower Bar */}
      <div className="relative h-[34vh] w-full bg-[#fdfbf6]">
        <video
          className="absolute bottom-0 left-0 h-full w-auto object-contain"
          autoPlay
          muted
          loop
        >
          <source src="/data-graph-two.mp4" type="video/mp4" />
        </video>
        {/* Right side intentionally left empty */}
      </div>

    </div>
  );
}
