import React from 'react';
import { Zap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/H color white.svg" 
                alt="Paydays Logo" 
                className="h-8 w-auto"
              />
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="https://help.paydayfantasy.com/en/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="https://help.paydayfantasy.com/en/articles/11502074-terms-and-conditions" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">Terms and Conditions</a></li>
              <li><a href="https://help.paydayfantasy.com/en/articles/11500570-privacy-policy" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-6 text-center">
          <p className="text-slate-400">
            © 2025 BetScoop Inc. All rights reserved. | Gambling Problem? Call 1-800-GAMBLER
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
