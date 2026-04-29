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
          <span className="value name-value">{patient.name || '-'}</span>
        </div>
        <div className="sticker-row">
          <span className="value">{formatDate(patient.birthDate) || '-'}</span>
        </div>
        <div className="sticker-row">
          <span className="value address-value">{patient.address || '-'}</span>
        </div>
      </div>
    </div>
  );
}
