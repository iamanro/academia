// /src/assets/components/Sidebar.tsx
import { useState, useMemo, useRef, useEffect } from 'react';
import { FiPlus, FiMinus, FiExternalLink } from 'react-icons/fi';
import { tutorials } from '../../data/Tutorials';
import type { Tutorial } from '../../types';

type TutorialContentProps = {
  item: Tutorial['content'][0];
};

const TutorialContent = ({ item }: TutorialContentProps) => {
  switch (item.type) {
    case 'paragraph':
      return <p>{item.text}</p>;
    case 'list':
      return (
        <ol>
          {(item.text as string[]).map((li, index) => (
            <li key={index}>{li}</li>
          ))}
        </ol>
      );
    case 'note':
      return (
        <p className="tutorial-note">
          <em>{item.text}</em>
        </p>
      );
    case 'code':
      return (
        <div className="tutorial-code-block">
          <pre>
            <code>{item.text}</code>
          </pre>
        </div>
      );
    default:
      return null;
  }
};

type AccordionItemProps = {
  tutorial: Tutorial;
  isOpen: boolean;
  onToggle: () => void;
};

/**
 * Jedna položka akordeonu. Výška se počítá z naměřené výšky obsahu, takže
 * animace funguje spolehlivě při libovolné šířce okna i délce návodu.
 */
const AccordionItem = ({ tutorial, isOpen, onToggle }: AccordionItemProps) => {
  const innerRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    if (!isOpen) {
      setMaxHeight(0);
      return;
    }
    const measure = () => setMaxHeight(innerRef.current?.scrollHeight ?? 0);
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [isOpen]);

  return (
    <div className={`accordion-item ${isOpen ? 'is-open' : ''}`}>
      <button className="accordion-header" onClick={onToggle} aria-expanded={isOpen}>
        <div className="header-text">
          <h3>{tutorial.title}</h3>
        </div>
        <div className="accordion-toggle-icon">{isOpen ? <FiMinus /> : <FiPlus />}</div>
      </button>
      <div className="accordion-content" style={{ maxHeight }}>
        <div className="accordion-content-inner" ref={innerRef}>
          {tutorial.shortDescription && (
            <p className="tutorial-short-description">{tutorial.shortDescription}</p>
          )}
          {tutorial.content.map((item, index) => (
            <TutorialContent key={index} item={item} />
          ))}
          {tutorial.link && (
            <a
              href={tutorial.link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-button"
            >
              {tutorial.link.text} <FiExternalLink />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const ALL = 'Vše';

function Sidebar() {
  const [openTutorialId, setOpenTutorialId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>(ALL);

  const categories = useMemo(() => {
    const unique = Array.from(new Set(tutorials.map((t) => t.category)));
    return [ALL, ...unique];
  }, []);

  const groupedTutorials = useMemo(() => {
    const visible =
      activeCategory === ALL
        ? tutorials
        : tutorials.filter((t) => t.category === activeCategory);

    return visible.reduce((acc, tutorial) => {
      const category = tutorial.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(tutorial);
      return acc;
    }, {} as Record<string, Tutorial[]>);
  }, [activeCategory]);

  const handleToggle = (id: string) => {
    setOpenTutorialId(openTutorialId === id ? null : id);
  };

  return (
    <div className="guides-and-links">
      <section id="guides" className="info-card">
        <h2>Užitečné návody</h2>

        <div className="category-filter" role="group" aria-label="Filtrovat návody podle kategorie">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`category-chip ${activeCategory === category ? 'is-active' : ''}`}
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="tutorials-accordion">
          {Object.keys(groupedTutorials).map((category) => (
            <div key={category} className="tutorial-category">
              <h4 className="tutorial-category-header">{category}</h4>
              {groupedTutorials[category].map((tutorial) => (
                <AccordionItem
                  key={tutorial.id}
                  tutorial={tutorial}
                  isOpen={openTutorialId === tutorial.id}
                  onToggle={() => handleToggle(tutorial.id)}
                />
              ))}
            </div>
          ))}
        </div>
      </section>

      <section id="links" className="info-card">
        <h2>Důležité odkazy</h2>

        <h4 className="link-category-header">Vyhledávání literatury</h4>
        <ul className="link-list">
          <li><a href="https://scholar.google.com/" target="_blank" rel="noopener noreferrer">Google Scholar</a> - Vyhledávač akademických článků a publikací ("Google pro vědu").</li>
          <li><a href="https://www.scopus.com/" target="_blank" rel="noopener noreferrer">Scopus</a> - Databáze akademických článků.</li>
          <li><a href="https://www.webofscience.com/" target="_blank" rel="noopener noreferrer">Web of Science</a> - Databáze akademických článků.</li>
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

        <h4 className="link-category-header">Obrana a bezpečnost</h4>
        <ul className="link-list">
          <li><a href="https://www.dtic.mil/" target="_blank" rel="noopener noreferrer">DTIC</a> - Defense Technical Information Center: rozsáhlý archiv obranného výzkumu.</li>
          <li><a href="https://www.sto.nato.int/" target="_blank" rel="noopener noreferrer">NATO STO</a> - Publikace Science &amp; Technology Organization NATO.</li>
          <li><a href="https://www.rand.org/" target="_blank" rel="noopener noreferrer">RAND Corporation</a> - Analytické reporty k bezpečnosti a obraně (zdarma).</li>
          <li><a href="https://www.sipri.org/" target="_blank" rel="noopener noreferrer">SIPRI</a> - Data o zbrojení, výdajích na obranu a odzbrojení.</li>
          <li><a href="https://www.obranaastrategie.cz/" target="_blank" rel="noopener noreferrer">Obrana a strategie</a> - Recenzovaný český časopis (MO ČR).</li>
          <li><a href="https://www.vojenskerozhledy.cz/" target="_blank" rel="noopener noreferrer">Vojenské rozhledy</a> - Český vojenský vědecký časopis.</li>
        </ul>
      </section>
    </div>
  );
}

export default Sidebar;
