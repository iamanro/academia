// src/App.tsx
import './App.css'; // Importujeme CSS pro stylování

function App() {
  return (
    <div className="container">
      <header>
        <h1>Akademické pomůcky pro doktorské studium</h1>
        <p>Rozcestník užitečných odkazů, nástrojů a návodů.</p>
      </header>

      <main>
        <section className="card">
          <h2>Užitečné odkazy</h2>
          <ul>
            <li><a href="https://scholar.google.com/" target="_blank" rel="noopener noreferrer">Google Scholar</a></li>
            <li><a href="https://www.researchgate.net/" target="_blank" rel="noopener noreferrer">ResearchGate</a></li>
            <li><a href="https://www.zotero.org/" target="_blank" rel="noopener noreferrer">Zotero</a> - Správce citací</li>
          </ul>
        </section>

        <section className="card">
          <h2>Návody</h2>
          <article>
            <h3>Anna's Archive: Jak najít vědecké články</h3>
            <p>
              <strong>Odkaz:</strong> <a href="https://annas-archive.org/" target="_blank" rel="noopener noreferrer">annas-archive.org</a>
            </p>
            <p>
              Anna's Archive je vyhledávač stínových knihoven (shadow libraries), jako jsou LibGen a Z-Library. Je to neocenitelný zdroj pro přístup k vědeckým článkům a knihám, které jsou za platební bránou (paywall).
            </p>
            <strong>Návod k použití:</strong>
            <ol>
              <li>Otevřete stránku <a href="https://annas-archive.org/" target="_blank" rel="noopener noreferrer">annas-archive.org</a>.</li>
              <li>Do vyhledávacího pole zadejte název článku, knihy, autora nebo DOI (Digital Object Identifier).</li>
              <li>Ve výsledcích vyhledávání si vyberte požadovaný zdroj. Často je k dispozici více verzí.</li>
              <li>Klikněte na jeden z odkazů pro stažení (např. "Libgen.li", "Z-Library") a stáhněte si soubor (obvykle PDF).</li>
            </ol>
            <p className="disclaimer">
              <em>Upozornění: Vždy si ověřte legálnost stahování materiálů chráněných autorským právem ve vaší zemi. Stránku používejte zodpovědně.</em>
            </p>
          </article>
        </section>
      </main>

      <footer>
        <p>Vytvořeno s láskou pro všechny Ph.D. studenty.</p>
      </footer>
    </div>
  );
}

export default App;