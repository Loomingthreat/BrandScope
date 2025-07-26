import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white font-sans">
        <nav className="bg-[#111] px-4 py-3 flex justify-between items-center shadow-md sticky top-0 z-50">
          <h1 className="text-xl font-bold">BrandScope</h1>
          <div className="space-x-4">
            <Link to="/" className="hover:text-[#00E0FF]">Home</Link>
            <Link to="/about" className="hover:text-[#00E0FF]">About</Link>
            <Link to="/dashboard" className="hover:text-[#00E0FF]">Dashboard</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}
