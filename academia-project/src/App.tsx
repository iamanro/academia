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
          
          {/* První návod: Anna's Archive */}
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
          
          <hr /> {/* Vizuální oddělovač mezi návody */}

          {/* Druhý návod: Freedium */}
          <article>
            <h3>Freedium: Čtení článků z Medium.com</h3>
            <p>
              <strong>Odkaz:</strong> <a href="http://freedium.cfd" target="_blank" rel="noopener noreferrer">freedium.cfd</a>
            </p>
            <p>
              Freedium je služba, která umožňuje číst prémiové články na platformě Medium, které jsou běžně za platební bránou. Vyžaduje jednorázovou úpravu systémového souboru <strong>hosts</strong>.
            </p>

            <h4>Jak nastavit Freedium - úprava souboru `hosts`</h4>
            <p>Do souboru `hosts` ve vašem systému je potřeba přidat následující řádek. Tím přesměrujete doménu `freedium.cfd` přímo na IP adresu serveru služby.</p>
            
            <div className="code-block">
              <p>146.103.108.112  freedium.cfd</p>
            </div>

            <div className="instructions">
              <details>
                <summary><strong>Windows 10/11</strong> 🪟</summary>
                <ol>
                  <li>Otevřete <strong>Poznámkový blok (Notepad)</strong> jako <strong>správce</strong> (v menu Start klikněte pravým tlačítkem a zvolte "Spustit jako správce").</li>
                  <li>V Poznámkovém bloku jděte na <strong>Soubor &rarr; Otevřít</strong>.</li>
                  <li>Do cesty vložte: <code>C:\Windows\System32\drivers\etc\</code></li>
                  <li>Vpravo dole změňte filtr z "Textové dokumenty (*.txt)" na "Všechny soubory (*.*)" a otevřete soubor <strong>hosts</strong>.</li>
                  <li>Na konec souboru přidejte řádek <code>146.103.108.112  freedium.cfd</code> a soubor uložte.</li>
                </ol>
              </details>

              <details>
                <summary><strong>macOS</strong> 🍏</summary>
                <ol>
                  <li>Otevřete <strong>Terminál</strong> (např. přes Spotlight [Cmd+Spacebar]).</li>
                  <li>Zadejte příkaz <code>sudo nano /etc/hosts</code> a stiskněte Enter.</li>
                  <li>Zadejte své administrátorské heslo.</li>
                  <li>Na konec souboru přidejte řádek <code>146.103.108.112  freedium.cfd</code>.</li>
                  <li>Stiskněte <strong>Ctrl+O</strong> pro uložení (potvrďte Enterem) a <strong>Ctrl+X</strong> pro ukončení.</li>
                </ol>
              </details>

              <details>
                <summary><strong>Linux (Ubuntu, atd.)</strong> 🐧</summary>
                <ol>
                  <li>Otevřete <strong>Terminál</strong>.</li>
                  <li>Zadejte příkaz <code>sudo nano /etc/hosts</code> a stiskněte Enter.</li>
                  <li>Zadejte své heslo.</li>
                  <li>Na konec souboru přidejte řádek <code>146.103.108.112  freedium.cfd</code>.</li>
                  <li>Uložte soubor (<strong>Ctrl+O</strong>, Enter) a zavřete editor (<strong>Ctrl+X</strong>).</li>
                </ol>
              </details>
            </div>
            <p className="disclaimer">
              <em>Po této úpravě by měla stránka <a href="http://freedium.cfd" target="_blank" rel="noopener noreferrer">freedium.cfd</a> začít fungovat. Nástroj používejte zodpovědně.</em>
            </p>
          </article>
        </section>
      </main>

      <footer>
        <p>Pokud si přejete cokoliv přidat napište mi email, nebo zprávu do WhatsApp.</p>
      </footer>
    </div>
  );
}

export default App;