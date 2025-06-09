import React, { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-2 rounded-lg">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">BetPro</span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="text-slate-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Sports</a>
              <a href="#" className="text-slate-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Live</a>
              <a href="#" className="text-slate-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Promos</a>
              <a href="#" className="text-slate-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Results</a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-slate-300 hover:text-white px-4 py-2 text-sm font-medium transition-colors">
              Sign In
            </button>
            <button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200">
              Join Now
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800/95 backdrop-blur-sm border-t border-slate-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="text-slate-300 hover:text-white block px-3 py-2 text-base font-medium">Sports</a>
            <a href="#" className="text-slate-300 hover:text-white block px-3 py-2 text-base font-medium">Live</a>
            <a href="#" className="text-slate-300 hover:text-white block px-3 py-2 text-base font-medium">Promos</a>
            <a href="#" className="text-slate-300 hover:text-white block px-3 py-2 text-base font-medium">Results</a>
            <div className="pt-4 pb-3 border-t border-slate-700">
              <div className="flex items-center px-3 space-x-3">
                <button className="text-slate-300 hover:text-white block py-2 text-base font-medium">
                  Sign In
                </button>
                <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;