// /src/assets/components/PublicationList.tsx
import { FiFileText, FiDownload, FiSearch } from 'react-icons/fi';
import type { Publication } from '../../types';

interface PublicationListProps {
  publications: Publication[];
}

function PublicationList({ publications }: PublicationListProps) {
  if (publications.length === 0) {
    return <p className="empty-state">Žádné publikace neodpovídají vašemu hledání.</p>;
  }

  return (
    <div className="publications-grid">
      {publications.map((pub) => (
        <div key={`${pub.title}-${pub.year}`} className="publication-tile">
          <div className="publication-info">
            <h3>{pub.title}</h3>
            <p>{pub.author}, {pub.year}</p>
            {pub.note && <p className="publication-note">{pub.note}</p>}
          </div>
          <div className="publication-actions">
            {pub.pdfUrl ? (
              <>
                <a href={pub.pdfUrl} target="_blank" rel="noopener noreferrer" title="Přečíst online">
                  <FiFileText />
                  <span>Přečíst</span>
                </a>
                <a
                  href={pub.pdfUrl}
                  download={`${pub.title.replace(/\s+/g, '_')}.pdf`}
                  title="Stáhnout PDF"
                >
                  <FiDownload />
                  <span>Stáhnout</span>
                </a>
              </>
            ) : pub.link ? (
              <a href={pub.link.url} target="_blank" rel="noopener noreferrer" title={pub.link.text}>
                <FiSearch />
                <span>{pub.link.text}</span>
              </a>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}

export default PublicationList;
