// /src/assets/components/RequestFormModal.tsx
import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';
import type { FormData } from '../../types';

interface RequestFormModalProps {
  onClose: () => void;
  onSubmit: (formData: FormData) => void;
}

function RequestFormModal({ onClose, onSubmit }: RequestFormModalProps) {
  const [formData, setFormData] = useState<FormData>({ name: '', link: '', note: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e: React.MouseEvent) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          <FiX />
        </button>
        <h2>Žádost o přidání publikace</h2>
        <p>Po odeslání se vám otevře e-mailový klient s předvyplněnými údaji.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Název publikace</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="link">Odkaz (DOI, URL)</label>
            <input type="text" id="link" name="link" value={formData.link} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="note">Poznámka (volitelné)</label>
            <textarea id="note" name="note" value={formData.note} onChange={handleInputChange} rows={3}></textarea>
          </div>
          <button type="submit" className="submit-button">Odeslat žádost</button>
        </form>
      </div>
    </div>
  );
}

export default RequestFormModal;