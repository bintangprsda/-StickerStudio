import { Printer, X } from 'lucide-react';
import { Sticker } from './Sticker';

export function StickerPreviewModal({ patients, onClose, onPrint }) {
  return (
    <div className="modal-overlay no-print" onClick={onClose}>
      <div className="modal-content glass animate-scale" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Preview Stiker</h2>
          <div className="modal-actions">
            <button className="btn-primary" onClick={onPrint}>
              <Printer size={18} />
              <span>Cetak Semua</span>
            </button>
            <button className="btn-icon" onClick={onClose}><X size={20} /></button>
          </div>
        </div>
        <div className="preview-scroll">
           <div id="print-area">
              {patients.map(p => (
                <Sticker key={p.id} patient={p} />
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}
