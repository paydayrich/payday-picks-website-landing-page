import React from 'react';
import { TrendingUp, TrendingDown, BarChart3 } from 'lucide-react';

interface BettingCardProps {
  playerName: string;
  matchup: string;
  datetime: string;
  statType: string;
  statValue: number;
  lessOdds: number;
  moreOdds: number;
  avatarUrl?: string;
  onBetClick?: (type: 'less' | 'more') => void;
}

const BettingCard: React.FC<BettingCardProps> = ({
  playerName,
  matchup,
  datetime,
  statType,
  statValue,
  lessOdds,
  moreOdds,
  avatarUrl,
  onBetClick
}) => {
  return (
    <div className="bg-slate-800/90 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-green-500/10">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
          {playerName.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <h3 className="text-white font-semibold text-lg">{playerName}</h3>
          <p className="text-slate-400 text-sm font-medium">{matchup}</p>
          <p className="text-slate-500 text-xs">{datetime}</p>
        </div>
      </div>

      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-slate-400 font-medium">{statType}</span>
          <BarChart3 className="w-4 h-4 text-emerald-500" />
        </div>
        <div className="text-4xl font-bold text-emerald-400 mb-1">{statValue}</div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() => onBetClick?.('less')}
          className="bg-slate-700/80 hover:bg-red-600/20 border border-slate-600/50 hover:border-red-500/50 rounded-xl py-3 px-4 transition-all duration-200 group/btn"
        >
          <div className="flex items-center justify-center gap-2 text-slate-300 group-hover/btn:text-red-400">
            <TrendingDown className="w-4 h-4" />
            <span className="font-semibold">LESS {lessOdds}</span>
          </div>
        </button>
        <button
          onClick={() => onBetClick?.('more')}
          className="bg-slate-700/80 hover:bg-emerald-600/20 border border-slate-600/50 hover:border-emerald-500/50 rounded-xl py-3 px-4 transition-all duration-200 group/btn"
        >
          <div className="flex items-center justify-center gap-2 text-slate-300 group-hover/btn:text-emerald-400">
            <TrendingUp className="w-4 h-4" />
            <span className="font-semibold">MORE {moreOdds}</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default BettingCard;