import { useState, useEffect } from 'react';

export function useStickerHistory() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const savedHistory = localStorage.getItem('sticker_history');
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('sticker_history', JSON.stringify(history));
  }, [history]);

  const saveToHistory = (patients) => {
    if (patients.length === 0 || patients.every(p => !p.name)) return false;
    
    const newEntry = {
      id: Date.now(),
      createdAt: new Date().toISOString(),
      patients: [...patients]
    };
    
    setHistory(prev => [newEntry, ...prev]);
    return true;
  };

  const deleteHistoryEntry = (id) => {
    setHistory(prev => prev.filter(h => h.id !== id));
  };

  return {
    history,
    saveToHistory,
    deleteHistoryEntry
  };
}
