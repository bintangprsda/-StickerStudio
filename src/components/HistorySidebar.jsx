import { History, X, Clock, Trash2, ChevronRight } from 'lucide-react';

export function HistorySidebar({ history, onClose, onLoad, onDelete }) {
  return (
    <div className="history-overlay no-print" onClick={onClose}>
      <div className="history-sidebar glass animate-slide-right" onClick={e => e.stopPropagation()}>
        <div className="history-header">
          <div className="title-with-icon">
            <History size={20} color="var(--primary)" />
            <h2>Riwayat Penyimpanan</h2>
          </div>
          <button className="btn-icon" onClick={onClose}><X size={20} /></button>
        </div>
        
        <div className="history-list">
          {history.length === 0 ? (
            <div className="history-empty">
              <Clock size={40} color="#cbd5e1" />
              <p>Belum ada riwayat tersimpan</p>
            </div>
          ) : (
            history.map((entry) => (
              <div key={entry.id} className="history-item glass" onClick={() => onLoad(entry)}>
                <div className="history-item-info">
                  <span className="history-date">
                    {new Date(entry.createdAt).toLocaleDateString('id-ID', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </span>
                  <span className="history-count">{entry.patients.length} Pasien</span>
                </div>
                <div className="history-item-actions">
                  <button className="btn-icon-delete" onClick={(e) => {
                    e.stopPropagation();
                    onDelete(entry.id);
                  }}>
                    <Trash2 size={14} />
                  </button>
                  <ChevronRight size={16} color="#cbd5e1" />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
