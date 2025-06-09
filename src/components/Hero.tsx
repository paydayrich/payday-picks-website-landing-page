import React from 'react';
import { Brain, Users, Trophy } from 'lucide-react';
import ProfileCard from './ProfileCard';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        {/* Header Text Section */}
        <div className="text-center space-y-8 mb-16 lg:mb-20">
          <div className="space-y-6">
            <div className="flex justify-center">
              <img 
                src="/H color white.svg" 
                alt="Paydays Logo" 
                className="h-20 w-auto"
              />
            </div>
            
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight">
              Our picks
              <br />
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
             hit different.
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              100% Deposit Match up to $100
            </p>
          </div>
        </div>

        {/* Profile Cards Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 xl:gap-16 mb-20 lg:mb-24">
          
          {/* Left Profile Card */}
          <div className="relative">
            {/* Glow effect behind card */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl blur-3xl scale-110"></div>
            
            <ProfileCard
              name="Shai Gilgeous-Alexander"
              title="OKC VS IND"
              handle="shai"
              status=""
              contactText="Points 34.5"
              avatarUrl="/Thunder.png"
              showUserInfo={true}
              enableTilt={true}
              statType="Points"
              statValue="34.5"
              lessOdds="1.75x"
              moreOdds="2.68x"
              onContactClick={() => console.log('Bet placed')}
            />
          </div>

          {/* Center Profile Card */}
          <div className="relative">
            {/* Glow effect behind card */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl scale-110"></div>
            
            <ProfileCard
              name="Shohei Ohtani"
              title="LAD VS NYY"
              handle="shohei"
              status=""
              contactText="Hits 1.5"
              avatarUrl="/Dodgers.png"
              showUserInfo={true}
              enableTilt={true}
              statType="Hits"
              statValue="1.5"
              lessOdds="2.25x"
              moreOdds="1.89x"
              onContactClick={() => console.log('Bet placed')}
            />
          </div>

          {/* Right Profile Card */}
          <div className="relative">
            {/* Glow effect behind card */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl blur-3xl scale-110"></div>
            
            <ProfileCard
              name="Connor McDavid"
              title="EDM VS VGK"
              handle="mcdavid"
              status=""
              contactText="Goals 0.5"
              avatarUrl="/Oilers.png"
              showUserInfo={true}
              enableTilt={true}
              statType="Goals"
              statValue="0.5"
              lessOdds="3.45x"
              moreOdds="1.32x"
              onContactClick={() => console.log('Bet placed')}
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="relative">
          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                <div className="relative w-20 h-20 bg-gradient-to-r from-emerald-500/20 to-teal-600/20 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 border border-emerald-500/30">
                  <Brain className="w-10 h-10 text-emerald-400" />
                </div>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Discover
                <br />
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  AI-Powered Picks
                </span>
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Discover your next pick with AI
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-cyan-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                <div className="relative w-20 h-20 bg-gradient-to-r from-teal-500/20 to-cyan-600/20 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 border border-teal-500/30">
                  <Users className="w-10 h-10 text-teal-400" />
                </div>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Connect
                <br />
                <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  With Your Crew
                </span>
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Share picks with friends, make money
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                <div className="relative w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 border border-cyan-500/30">
                  <Trophy className="w-10 h-10 text-cyan-400" />
                </div>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Experience
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  The Thrill of Victory
                </span>
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Feel the rush in real-time
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;