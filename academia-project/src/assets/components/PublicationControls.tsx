// /src/assets/components/PublicationControls.tsx
import React from 'react';
import { FiSearch, FiPlus } from 'react-icons/fi';

interface PublicationControlsProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  sortOrder: string;
  setSortOrder: React.Dispatch<React.SetStateAction<string>>;
  onAddRequest: () => void;
}

function PublicationControls({ searchTerm, setSearchTerm, sortOrder, setSortOrder, onAddRequest }: PublicationControlsProps) {
  return (
    <div className="controls-card">
      <div className="search-wrapper">
        <FiSearch className="search-icon" />
        <input
          type="text"
          placeholder="Hledat podle názvu nebo autora..."
          value={searchTerm}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="actions-wrapper">
        <select value={sortOrder} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSortOrder(e.target.value)}>
          <option value="year-desc">Řadit: Nejnovější</option>
          <option value="year-asc">Řadit: Nejstarší</option>
          <option value="author-asc">Řadit: Autor (A-Z)</option>
          <option value="author-desc">Řadit: Autor (Z-A)</option>
        </select>
        <button className="add-button" onClick={onAddRequest}>
          <FiPlus /> Přidat žádost
        </button>
      </div>
    </div>
  );
}

export default PublicationControls;