// /src/assets/components/Sidebar.tsx
import { useState, useMemo } from 'react';
import { FiPlus, FiMinus, FiExternalLink } from 'react-icons/fi';
import { tutorials } from '../../data/Tutorials';
import type { Tutorial } from '../../types';

// --- OPRAVA ZDE ---
// 1. Definujeme si typ pro props explicitně
type TutorialContentProps = {
  item: Tutorial['content'][0];
};

// 2. Použijeme přímé typování props a odstraníme : React.FC
const TutorialContent = ({ item }: TutorialContentProps) => {
  switch (item.type) {
    case 'paragraph':
      return <p>{item.text}</p>;
    case 'list':
      return (
        <ol>
          {(item.text as string[]).map((li, index) => <li key={index}>{li}</li>)}
        </ol>
      );
    case 'note':
        return <p className="tutorial-note"><em>{item.text}</em></p>;
    case 'code':
        return <div className="tutorial-code-block"><pre><code>{item.text}</code></pre></div>;
    // 3. Přidáme default větev, aby funkce vždy něco vrátila
    default:
      return null;
  }
};
// --- KONEC OPRAVY ---

function Sidebar() {
  const [openTutorialId, setOpenTutorialId] = useState<string | null>(null);

  const groupedTutorials = useMemo(() => {
    return tutorials.reduce((acc, tutorial) => {
      const category = tutorial.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(tutorial);
      return acc;
    }, {} as Record<string, Tutorial[]>);
  }, []);

  const handleToggle = (id: string) => {
    setOpenTutorialId(openTutorialId === id ? null : id);
  };

  return (
    <div className="guides-and-links">
      <section id="guides" className="info-card">
        <h2>Užitečné návody</h2>
        <div className="tutorials-accordion">
          {Object.keys(groupedTutorials).map((category) => (
            <div key={category} className="tutorial-category">
              <h4 className="tutorial-category-header">{category}</h4>
              {groupedTutorials[category].map((tutorial) => {
                const isOpen = openTutorialId === tutorial.id;
                return (
                  <div key={tutorial.id} className={`accordion-item ${isOpen ? 'is-open' : ''}`}>
                    <button className="accordion-header" onClick={() => handleToggle(tutorial.id)} aria-expanded={isOpen}>
                      <div className="header-text">
                        <h3>{tutorial.title}</h3>
                      </div>
                      <div className="accordion-toggle-icon">
                        {isOpen ? <FiMinus /> : <FiPlus />}
                      </div>
                    </button>
                    <div className="accordion-content">
                      <div className="accordion-content-inner">
                        <p className="tutorial-short-description">{tutorial.shortDescription}</p>
                        {tutorial.content.map((item, index) => (
                          <TutorialContent key={index} item={item} />
                        ))}
                        {tutorial.link && (
                            <a href={tutorial.link.url} target="_blank" rel="noopener noreferrer" className="link-button">
                                {tutorial.link.text} <FiExternalLink />
                            </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </section>

      <section id="links" className="info-card">
        <h2>Důležité odkazy</h2>

        <h4 className="link-category-header">Vyhledávání literatury</h4>
        <ul className="link-list">
          <li><a href="https://scholar.google.com/" target="_blank" rel="noopener noreferrer">Google Scholar</a> - Nejrychlejší startovní bod.</li>
          <li><a href="https://www.scopus.com/" target="_blank" rel="noopener noreferrer">Scopus</a> - Klíčová citační databáze (přes VŠ).</li>
          <li><a href="https://www.webofscience.com/" target="_blank" rel="noopener noreferrer">Web of Science</a> - Alternativa ke Scopusu (přes VŠ).</li>
        </ul>

        <h4 className="link-category-header">Profily a sítě vědců</h4>
        <ul className="link-list">
          <li><a href="https://www.researchgate.net/" target="_blank" rel="noopener noreferrer">ResearchGate</a> - Sociální síť pro vědce.</li>
          <li><a href="https://orcid.org/" target="_blank" rel="noopener noreferrer">ORCID</a> - Unikátní digitální identifikátor výzkumníka.</li>
          <li><a href="https://www.academia.edu/" target="_blank" rel="noopener noreferrer">Academia.edu</a> - Alternativa k ResearchGate.</li>
        </ul>
        
        <h4 className="link-category-header">Správa citací</h4>
        <ul className="link-list">
          <li><a href="https://www.zotero.org/" target="_blank" rel="noopener noreferrer">Zotero</a> - Open-source správce citací.</li>
          <li><a href="https://www.citacepro.com/cs/info" target="_blank" rel="noopener noreferrer">CitacePro</a> - Komerční správce citací.</li>
        </ul>

        <h4 className="link-category-header">Preprintové servery</h4>
        <ul className="link-list">
            <li><a href="https://arxiv.org/" target="_blank" rel="noopener noreferrer">arXiv.org</a> - Pro fyziku, matematiku, informatiku.</li>
            <li><a href="https://www.biorxiv.org/" target="_blank" rel="noopener noreferrer">bioRxiv</a> - Pro biologické vědy.</li>
        </ul>
      </section>
    </div>
  );
}

export default Sidebar;