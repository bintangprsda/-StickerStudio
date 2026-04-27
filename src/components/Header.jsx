import { Layout, History, Plus, Save, Printer } from 'lucide-react';

export function Header({ onAdd, onSave, onGenerate, onShowHistory, hasPatients }) {
  return (
    <header className="no-print">
      <div className="header-content">
        <div className="brand">
          <div className="icon-wrapper">
            <Layout size={24} color="white" />
          </div>
          <div>
            <h1>Sticker Studio</h1>
            <p>Generator Identitas Pasien</p>
          </div>
        </div>
        <div className="actions">
          <button className="btn-icon-text" onClick={onShowHistory}>
            <History size={18} />
            <span>Riwayat</span>
          </button>
          <button className="btn-secondary" onClick={onAdd}>
            <Plus size={18} />
            <span>Tambah Pasien</span>
          </button>
          <button className="btn-save" onClick={onSave}>
            <Save size={18} />
            <span>Simpan</span>
          </button>
          <button 
            className="btn-primary" 
            onClick={onGenerate}
            disabled={!hasPatients}
          >
            <Printer size={18} />
            <span>Generate</span>
          </button>
        </div>
      </div>
    </header>
  );
}
