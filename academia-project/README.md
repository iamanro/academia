# Akademický rozcestník

Statická webová aplikace (React + TypeScript + Vite) sloužící jako rozcestník
nástrojů, materiálů a praktických návodů pro doktorské studium. Nasazuje se na
GitHub Pages.

## Funkce

- **Knihovna publikací** – prohledávatelný a řaditelný seznam PDF materiálů
  (data v [`src/data/Publications.ts`](src/data/Publications.ts), soubory ve
  [`public/pdfs/`](public/pdfs)).
- **Návody** – akordeon rozdělený do kategorií s rychlým filtrem
  (data v [`src/data/Tutorials.ts`](src/data/Tutorials.ts)).
- **Důležité odkazy** – kurátorovaný seznam databází, nástrojů a služeb.
- **Světlý/tmavý režim** – přepínač s volbou *světlý / tmavý / podle systému*,
  volba se ukládá do `localStorage` a aplikuje se ještě před vykreslením.
- **Žádost o přidání publikace** – formulář, který otevře e-mailový klient
  s předvyplněnými údaji.

## Vývoj

```bash
npm install      # instalace závislostí
npm run dev      # vývojový server (Vite)
npm run build    # typová kontrola + produkční build do dist/
npm run lint     # ESLint
npm run preview  # náhled produkčního buildu
```

> Aplikace běží pod base cestou `/academia/` (viz [`vite.config.ts`](vite.config.ts)),
> proto v `dev` režimu otevřete `http://localhost:5173/academia/`.

## Nasazení

```bash
npm run deploy   # build + publikace do větve gh-pages (gh-pages)
```

## Struktura

```
src/
├── App.tsx                     # kořenová komponenta a rozvržení
├── hooks/useTheme.ts           # správa světlého/tmavého režimu
├── data/                       # obsah (publikace, návody)
├── types.ts                    # sdílené TypeScript typy
└── assets/components/          # UI komponenty
    ├── PublicationControls.tsx # hledání, řazení, přidání žádosti
    ├── PublicationList.tsx     # dlaždice publikací
    ├── RequestFormModal.tsx    # modální formulář žádosti
    ├── Sidebar.tsx             # návody (akordeon) + odkazy
    └── ThemeToggle.tsx         # přepínač motivu
```

## Přidání obsahu

- **Publikace:** přidejte položku do `src/data/Publications.ts` a odpovídající
  PDF do `public/pdfs/`. Cesta v `pdfUrl` musí začínat `/academia/pdfs/`.
- **Návod:** přidejte objekt do `src/data/Tutorials.ts` (pole `category`
  automaticky vytvoří novou skupinu i filtr).
