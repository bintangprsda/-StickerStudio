import { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import { useStickerHistory } from './hooks/useStickerHistory';
import { Header } from './components/Header';
import { PatientCard } from './components/PatientCard';
import { HistorySidebar } from './components/HistorySidebar';
import { StickerPreviewModal } from './components/StickerPreviewModal';
import { Sticker } from './components/Sticker';
import './App.css';

function App() {
  const [patients, setPatients] = useState(() => {
    const savedDraft = localStorage.getItem('sticker_current_draft');
    return savedDraft ? JSON.parse(savedDraft) : [
      { id: Date.now(), name: '', mr: '', birthDate: '', address: '' }
    ];
  });
  const [showPreview, setShowPreview] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  
  const { history, saveToHistory, deleteHistoryEntry } = useStickerHistory();

  // Save draft to localStorage whenever patients change
  useEffect(() => {
    localStorage.setItem('sticker_current_draft', JSON.stringify(patients));
  }, [patients]);

  const addPatient = () => {
    setPatients([...patients, { id: Date.now(), name: '', mr: '', birthDate: '', address: '' }]);
  };

  const removePatient = (id) => {
    setPatients(patients.filter(p => p.id !== id));
  };

  const updatePatient = (id, field, value) => {
    setPatients(patients.map(p => p.id === id ? { ...p, [field]: value } : p));
  };

  const handleSave = () => {
    if (saveToHistory(patients)) {
      alert("Berhasil disimpan ke riwayat!");
    } else {
      alert("Mohon isi setidaknya satu nama pasien sebelum menyimpan.");
    }
  };

  const handleLoadHistory = (entry) => {
    setPatients(entry.patients);
    setShowHistory(false);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="app-container">
      <Header 
        onAdd={addPatient}
        onSave={handleSave}
        onGenerate={() => setShowPreview(true)}
        onShowHistory={() => setShowHistory(true)}
        hasPatients={patients.length > 0}
      />

      <main className="no-print">
        {patients.length === 0 ? (
          <div className="empty-state glass">
            <div className="empty-icon">🗂️</div>
            <h2>Belum ada pasien</h2>
            <p>Klik tombol "Tambah Pasien" untuk mulai membuat stiker.</p>
            <button className="btn-secondary" onClick={addPatient}>
              <Plus size={18} />
              <span>Tambah Pasien Pertama</span>
            </button>
          </div>
        ) : (
          <div className="patient-grid">
            {patients.map((patient, index) => (
              <PatientCard 
                key={patient.id}
                patient={patient}
                index={index}
                onRemove={removePatient}
                onUpdate={updatePatient}
              />
            ))}
          </div>
        )}
      </main>

      <footer className="no-print">
        <p>Sticker Studio &copy; {new Date().getFullYear()} • Developed by <a href="https://www.instagram.com/bintangprsda/" target="_blank" rel="noopener noreferrer">Bintangprsda</a></p>
      </footer>

      {showHistory && (
        <HistorySidebar 
          history={history}
          onClose={() => setShowHistory(false)}
          onLoad={handleLoadHistory}
          onDelete={deleteHistoryEntry}
        />
      )}

      {showPreview && (
        <StickerPreviewModal 
          patients={patients}
          onClose={() => setShowPreview(false)}
          onPrint={handlePrint}
        />
      )}

      <div className="print-only">
        <div id="print-area">
          {patients.map(p => (
            <Sticker key={p.id} patient={p} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
