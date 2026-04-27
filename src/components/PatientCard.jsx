import { Trash2, User, Hash, Calendar, MapPin } from 'lucide-react';

export function PatientCard({ patient, index, onRemove, onUpdate }) {
  return (
    <div className="patient-card glass animate-fade" style={{ animationDelay: `${index * 0.05}s` }}>
      <div className="card-header">
        <h3>Pasien #{index + 1}</h3>
        <button className="btn-icon-delete" onClick={() => onRemove(patient.id)}>
          <Trash2 size={16} />
        </button>
      </div>
      <div className="card-body">
        <div className="input-group">
          <User size={16} />
          <input 
            type="text" 
            placeholder="Nama Lengkap" 
            value={patient.name}
            onChange={(e) => onUpdate(patient.id, 'name', e.target.value)}
          />
        </div>
        <div className="input-group">
          <Hash size={16} />
          <input 
            type="text" 
            placeholder="Nomor MR" 
            value={patient.mr}
            onChange={(e) => onUpdate(patient.id, 'mr', e.target.value)}
          />
        </div>
        <div className="input-group">
          <Calendar size={16} />
          <input 
            type="date" 
            value={patient.birthDate}
            onChange={(e) => onUpdate(patient.id, 'birthDate', e.target.value)}
          />
        </div>
        <div className="input-group textarea">
          <MapPin size={16} />
          <textarea 
            placeholder="Alamat Tinggal" 
            value={patient.address}
            onChange={(e) => onUpdate(patient.id, 'address', e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
