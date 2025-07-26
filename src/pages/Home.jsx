// File: /src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-white text-black">

      {/* Fixed Black Top Bar */}
      <header className="fixed top-0 left-0 w-full bg-black text-white z-50 h-[60px]">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-full px-6">

          {/* Logo (top-left) */}
          <Link to="/">
            <img
              src="https://github.com/Loomingthreat/BrandScope/blob/main/logo.png?raw=true"
              alt="BrandScope Logo"
              className="h-6 w-auto object-contain"
            />
          </Link>

          {/* Nav Links (top-right) */}
          <nav className="flex space-x-6 text-sm font-semibold uppercase tracking-wider">
            <Link to="/" className="hover:text-[#FF005C] transition">Home</Link>
            <Link to="/dashboard" className="hover:text-[#FF005C] transition">Dashboard</Link>
            <Link to="/about" className="hover:text-[#FF005C] transition">About</Link>
          </nav>

        </div>
      </header>

      {/* Spacer to offset fixed header */}
      <div className="h-[60px] w-full"></div>

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
          {/* Reserved for future content */}
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
      </div>

    </div>
  );
}
