// /src/App.tsx
import { useState, useMemo } from 'react';
import { FiChevronDown, FiChevronUp, FiBookOpen, FiMail } from 'react-icons/fi';
import { publications } from './data/Publications';
import type { Publication, FormData } from './types';
// Import komponent
import PublicationControls from './assets/components/PublicationControls';
import PublicationList from './assets/components/PublicationList';
import RequestFormModal from './assets/components/RequestFormModal';
import Sidebar from './assets/components/Sidebar';
import ThemeToggle from './assets/components/ThemeToggle';
import { useTheme } from './hooks/useTheme';

import './App.css';

const CONTACT_EMAIL = 'antonin.rousek@unob.cz';

function App() {
  const { preference, cycleTheme } = useTheme();

  const [isLibraryVisible, setIsLibraryVisible] = useState<boolean>(true);
  const [showRequestForm, setShowRequestForm] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<string>('year-desc');

  const handleFormSubmit = (formData: FormData) => {
    const subject = encodeURIComponent('Nová žádost o přidání publikace');
    const body = encodeURIComponent(
      `Název: ${formData.name}\nOdkaz: ${formData.link}\n\nPoznámka:\n${formData.note}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setShowRequestForm(false);
  };

  const processedPublications = useMemo<Publication[]>(() => {
    const needle = searchTerm.trim().toLowerCase();
    const filtered = publications.filter(
      (pub) =>
        pub.title.toLowerCase().includes(needle) ||
        pub.author.toLowerCase().includes(needle)
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
        <div className="app-header-top">
          <div className="brand">
            <span className="brand-mark" aria-hidden="true">
              <FiBookOpen />
            </span>
            <span className="brand-name">Akademický rozcestník</span>
          </div>
          <ThemeToggle preference={preference} onCycle={cycleTheme} />
        </div>
        <h1>Nástroje a materiály pro doktorské studium</h1>
        <p>
          Kurátorovaná knihovna publikací, ověřených nástrojů a praktických návodů,
          které vám usnadní cestu k dizertaci.
        </p>
      </header>

      <main className="content-wrapper">
        <section id="publications" className="collapsible-section">
          <div className="section-header">
            <div className="section-title">
              <h2>Knihovna publikací</h2>
              <span className="count-badge">{publications.length}</span>
            </div>
            <button
              className="toggle-visibility-btn"
              onClick={() => setIsLibraryVisible((prev) => !prev)}
              aria-expanded={isLibraryVisible}
              aria-controls="library-content"
            >
              {isLibraryVisible ? <FiChevronUp /> : <FiChevronDown />}
              {isLibraryVisible ? 'Skrýt' : 'Zobrazit'}
            </button>
          </div>

          {isLibraryVisible && (
            <div className="collapsible-content" id="library-content">
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
        </section>

        <Sidebar />
      </main>

      {showRequestForm && (
        <RequestFormModal
          onClose={() => setShowRequestForm(false)}
          onSubmit={handleFormSubmit}
        />
      )}

      <footer className="app-footer">
        <p>Máte nápad na vylepšení nebo tip na užitečný zdroj? Ozvěte se.</p>
        <a className="footer-contact" href={`mailto:${CONTACT_EMAIL}`}>
          <FiMail /> {CONTACT_EMAIL}
        </a>
      </footer>
    </div>
  );
}

export default App;
