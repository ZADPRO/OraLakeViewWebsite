import React, { createContext, useContext, useState, useEffect } from 'react';

export type Season = 'summer' | 'winter';

interface SeasonContextType {
  season: Season;
  setSeason: (season: Season) => void;
  toggleSeason: () => void;
}

const SeasonContext = createContext<SeasonContextType | undefined>(undefined);

export const SeasonProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [season, setSeason] = useState<Season>(() => {
    const saved = localStorage.getItem('ora_lakeview_season');
    return saved === 'winter' || saved === 'summer' ? saved : 'summer';
  });

  useEffect(() => {
    localStorage.setItem('ora_lakeview_season', season);
  }, [season]);

  const toggleSeason = () => {
    setSeason((prev) => (prev === 'summer' ? 'winter' : 'summer'));
  };

  return (
    <SeasonContext.Provider value={{ season, setSeason, toggleSeason }}>
      {children}
    </SeasonContext.Provider>
  );
};

export const useSeason = () => {
  const context = useContext(SeasonContext);
  if (!context) {
    throw new Error('useSeason must be used within a SeasonProvider');
  }
  return context;
};
