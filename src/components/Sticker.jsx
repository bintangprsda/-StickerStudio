import React from 'react';

const formatDate = (dateStr) => {
  if (!dateStr) return '';
  const [year, month, day] = dateStr.split('-');
  return `${day}-${month}-${year}`;
};

export function Sticker({ patient }) {
  return (
    <div className="sticker">
      <div className="sticker-content">
        <div className="sticker-row">
          <span className="label">Nama Pasien</span>
          <span className="value">: {patient.name || '-'}</span>
        </div>
        <div className="sticker-row">
          <span className="label">Nomor MR</span>
          <span className="value">: {patient.mr || '-'}</span>
        </div>
        <div className="sticker-row">
          <span className="label">Tgl Lahir</span>
          <span className="value">: {formatDate(patient.birthDate) || '-'}</span>
        </div>
        <div className="sticker-row">
          <span className="label">Alamat</span>
          <span className="value">: {patient.address || '-'}</span>
        </div>
      </div>
    </div>
  );
}
