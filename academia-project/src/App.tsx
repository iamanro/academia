// /src/App.tsx
import { useState, useMemo } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'; // Import ikon
import { publications } from './data/Publications';
import type { Publication, FormData } from './types';
// Import komponent
import PublicationControls from './assets/components/PublicationControls';
import PublicationList from './assets/components/PublicationList';
import RequestFormModal from './assets/components/RequestFormModal';
import Sidebar from './assets/components/Sidebar';

import './App.css';

function App() {
  // --- NOVÉ ZMĚNY ZDE ---
  const [isLibraryVisible, setIsLibraryVisible] = useState<boolean>(false); // 1. Nový stav, defaultně false (skryto)
  // --- KONEC ZMĚN ---

  const [showRequestForm, setShowRequestForm] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<string>('year-desc');

  const handleFormSubmit = (formData: FormData) => {
    const subject = encodeURIComponent('Nová žádost o přidání publikace');
    const body = encodeURIComponent(
      `Název: ${formData.name}\nOdkaz: ${formData.link}\n\nPoznámka:\n${formData.note}`
    );
    window.location.href = `mailto:antonin.rousek@unob.cz?subject=${subject}&body=${body}`;
    setShowRequestForm(false);
  };

  const processedPublications = useMemo<Publication[]>(() => {
    // ... logika filtrování a řazení zůstává stejná ...
    let filtered = publications.filter(pub =>
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.author.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const [sortBy, direction] = sortOrder.split('-');
    return [...filtered].sort((a, b) => {
      if (sortBy === 'year') {
        return direction === 'asc' ? a.year - b.year : b.year - a.year;
      }
      if (sortBy === 'author') {
        return direction === 'asc'
          ? a.author.localeCompare(b.author)
          : b.author.localeCompare(a.author);
      }
      return 0;
    });
  }, [searchTerm, sortOrder]);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Akademický rozcestník</h1>
        <p>Knihovna materiálů, nástrojů a návodů pro doktorské studium.</p>
      </header>

      <main className="content-wrapper">
        <section id="publications" className="collapsible-section">
          {/* --- NOVÉ ZMĚNY ZDE --- */}
          <div className="section-header">
            <h2>Knihovna publikací</h2>
            {/* 2. Tlačítko pro přepínání viditelnosti */}
            <button 
              className="toggle-visibility-btn" 
              onClick={() => setIsLibraryVisible(prev => !prev)}
              aria-expanded={isLibraryVisible}
            >
              {isLibraryVisible ? <FiChevronUp /> : <FiChevronDown />}
              {isLibraryVisible ? 'Skrýt' : 'Zobrazit'}
            </button>
          </div>

          {/* 3. Podmíněné zobrazení obsahu knihovny */}
          {isLibraryVisible && (
            <div className="collapsible-content">
              <PublicationControls
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                sortOrder={sortOrder}
                setSortOrder={setSortOrder}
                onAddRequest={() => setShowRequestForm(true)}
              />
              <PublicationList publications={processedPublications} />
            </div>
          )}
          {/* --- KONEC ZMĚN --- */}
        </section>
        
        <Sidebar />
      </main>
      
      {showRequestForm && <RequestFormModal onClose={() => setShowRequestForm(false)} onSubmit={handleFormSubmit} />}

      <footer className="app-footer">
        <p>Máte nápad na vylepšení? Napište mi na e-mail nebo WhatsApp.</p>
      </footer>
    </div>
  );
}

export default App;