import { useState, useEffect } from 'react';

export function useStickerHistory() {
  // Gunakan initializer function agar data langsung dimuat saat pertama kali render
  const [history, setHistory] = useState(() => {
    try {
      const savedHistory = localStorage.getItem('sticker_history');
      return savedHistory ? JSON.parse(savedHistory) : [];
    } catch (error) {
      console.error("Gagal memuat riwayat:", error);
      return [];
    }
  });

  // Hanya simpan ke localStorage jika history berubah
  useEffect(() => {
    localStorage.setItem('sticker_history', JSON.stringify(history));
  }, [history]);

  const saveToHistory = (patients) => {
    // Validasi: Jangan simpan jika semua nama pasien kosong
    if (patients.length === 0 || patients.every(p => !p.name.trim())) return false;
    
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
