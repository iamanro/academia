// /src/data/tutorials.ts

import type { Tutorial } from '../types';

export const tutorials: Tutorial[] = [
  // =======================================================================
  // KATEGORIE: Life hack
  // =======================================================================
      {
    id: 'kontakovat-autora',
    title: "Nebojte se napsat autorovi článku",
    category: 'Lifehack',
    shortDescription: '',
    content: [
      {
        type: 'paragraph',
        text: 'Pokud potřebujete nějaký článek nebo publikaci, nikdy se nebojte napsat autorovi a požádat ho o zaslání ve formátu .pdf. Většina autorů chce, aby jejich práce byla čtena, ale časopisy si za otevřený přístup často účtují nemalé poplatky. Když autorovi napíšete, v drtivé většině případů vám rád vyhoví a článek pošle. Zároveň se ho můžete zeptat i na další významné autory, nebo publikace z dané problematiky.',
      },
    ],
  },

  // =======================================================================
  // KATEGORIE: Správa citací
  // =======================================================================
  {
    id: 'zotero',
    title: 'Zotero: Správa citací a bibliografie',
    category: 'Správa citací',
    shortDescription: 'Nezbytný open-source nástroj pro sběr, organizaci a citování vašich zdrojů.',
    link: {
      url: 'https://www.zotero.org/',
      text: 'Stáhnout Zotero'
    },
    content: [
      {
        type: 'paragraph',
        text: 'Citační manažer je základní kámen efektivní akademické práce. Umožňuje vám ukládat zdroje jedním klikem přímo z prohlížeče a následně je automaticky citovat ve vašem textovém editoru.'
      },
      {
        type: 'list',
        text: [
          'Zotero Connector: Rozšíření do prohlížeče pro ukládání článků, knih a webových stránek.',
          'Integrace s Word/Google Docs: Doplněk pro vkládání citací a automatické generování seznamu literatury.',
          'Organizace: Třídění zdrojů do kolekcí, přidávání štítků a poznámek k PDF souborům.'
        ]
      },
      {
        type: 'note',
        text: 'Nástroj je zcela zdarma a existuje pro něj obrovská komunitní podpora a množství doplňků.'
      }
    ]
  },
  {
    id: 'citacepro',
    title: 'CitacePro: Správa citací a bibliografie',
    category: 'Správa citací',
    shortDescription: 'Placený nástroj pro sběr, organizaci a citování vašich zdrojů.',
    link: {
      url: 'https://www.citacepro.com/cs/',
      text: 'Stáhnout citacepro'
    },
    content: [
      {
        type: 'paragraph',
        text: 'Citační manažer je základní kámen efektivní akademické práce. Umožňuje vám ukládat zdroje jedním klikem přímo z prohlížeče a následně je automaticky citovat ve vašem textovém editoru.'
      },
      {
        type: 'note',
        text: 'Nástroj si UO platí, ale je to otřesný nástroj, který v žádném případě nedoporučuji. Lepší volbou je Zotero.'
      }
    ]
  },
  // =======================================================================
  // KATEGORIE: Hledání článků
  // =======================================================================
  {
    id: 'annas-archive',
    title: "Anna's Archive: Jak najít vědecké články",
    category: 'Hledání článků',
    shortDescription: 'Vyhledávač stínových knihoven pro přístup k široké škále vědeckých textů.',
    link: {
      url: 'https://annas-archive.org/',
      text: "Přejít na Anna's Archive",
    },
    content: [
      {
        type: 'paragraph',
        text: 'Anna\'s Archive je meta-vyhledávač, který indexuje obsah velkých "stínových" knihoven jako Library Genesis, Z-Library a Sci-Hub. Je to jeden z nejlepších nástrojů pro nalezení prakticky jakéhokoliv vědeckého článku nebo knihy.',
      },
      {
        type: 'list',
        text: [
          'Otevřete stránku annas-archive.org.',
          'Do vyhledávacího pole zadejte název článku, knihy, autora nebo DOI.',
          'Ve výsledcích vyhledávání si vyberte požadovaný zdroj a stáhněte si soubor.',
        ],
      },
      {
        type: 'note',
        text: 'Vhodné pokud je článek placený a nelze se k němu jinak dostat.',
      },
      {
        type: 'note',
        text: 'Upozornění: Používání je na vlastní nebezpečí. Vždy si ověřte příponu stahovaných souborů a používejte antivirovou ochranu. Články získané z Anna`s Archive, nebo jiných stínových knihoven se citují dle původního zdroje!',
      },
    ],
  },
  {
    id: 'connected-papers',
    title: 'Connected Papers: Vizualizace vědeckých prací',
    category: 'Hledání článků',
    shortDescription: 'Nástroj pro vizuální prozkoumání akademické literatury a nalezení souvisejících prací.',
    link: {
      url: 'https://www.connectedpapers.com/',
      text: 'Prozkoumat na Connected Papers'
    },
    
    content: [
      {
        type: 'paragraph',
        text: 'Zadejte jeden klíčový článek a Connected Papers vám vygeneruje graf podobných prací. Rychle tak odhalíte nejdůležitější práce v oboru, klíčové autory a nové směry výzkumu.'
      },
      {
        type: 'note',
        text: 'Několik prvních grafů je zdarma, poté je vyžadována registrace. Skvělý nástroj pro úvod do rešerše literatury.'
      }
    ]
  },
  {
    id: 'inciteful-papers',
    title: 'Inciteful: Vizualizace vědeckých prací',
    category: 'Hledání článků',
    shortDescription: 'Alternativní nástroj zdarma pro vizuální prozkoumání akademické literatury a nalezení souvisejících prací.',
    link: {
      url: 'https://www.inciteful.xyz/',
      text: 'Prozkoumat na Inciteful'
    },
    
    content: [
      {
        type: 'paragraph',
        text: 'Zadejte jeden klíčový článek a Inciteful vám vygeneruje graf podobných prací. Rychle tak odhalíte nejdůležitější práce v oboru, klíčové autory a nové směry výzkumu.'
      },
    ]
  },


  // =======================================================================
  // KATEGORIE: Psaní
  // =======================================================================
  {
    id: 'writefull',
    title: 'Writefull: AI asistent pro akademické psaní',
    category: 'Psaní',
    shortDescription: 'Nástroj s umělou inteligencí trénovaný speciálně na milionech vědeckých textů.',
    link: {
      url: 'https://www.writefull.com/',
      text: 'Vyzkoušet Writefull'
    },
    content: [
      {
        type: 'paragraph',
        text: 'Na rozdíl od Grammarly se Writefull specializuje na jazyk používaný ve vědě. Pomáhá vám psát gramaticky správně a stylisticky vhodně pro akademické publikace.'
      },
      {
        type: 'list',
        text: [
          'Paraphraser: Pomůže vám přeformulovat věty, abyste se vyhnuli plagiátorství nebo opakováním.',
          'Language Search: Prohledává databázi odborných textů a ukáže vám, jak se určité fráze používají v kontextu.',
          'Integrace: Nabízí doplňky pro Word a vlastní editory.'
        ]
      },
    ]
  },
  {
    id: 'grammarly',
    title: 'Grammarly: Pokročilá kontrola gramatiky',
    category: 'Psaní',
    shortDescription: 'Nástroj pro kontrolu gramatiky, stylistiky a plagiátorství v anglickém jazyce.',
    link: {
      url: 'https://www.grammarly.com/',
      text: 'Přejít na Grammarly'
    },
    content: [
      {
        type: 'paragraph',
        text: 'Grammarly je nepostradatelný pomocník pro každého, kdo píše odborné texty v angličtině. Nabízí rozšíření pro prohlížeče, editory a samostatnou aplikaci.'
      },
      {
        type: 'note',
        text: 'Základní verze je zdarma a pro většinu potřeb dostačující. Placená verze nabízí pokročilé návrhy na přeformulování vět a kontrolu plagiátorství.'
      }
    ]
  },
  {
    id: 'typst',
    title: 'Typst: Moderní alternativa k LaTeXu',
    category: 'Psaní',
    shortDescription: 'Rychlý, intuitivní a výkonný sázecí systém navržený pro moderní vědu.',
    link: {
      url: 'https://typst.app/',
      text: 'Vyzkoušet Typst online'
    },
    content: [
      {
        type: 'paragraph',
        text: 'Typst si bere to nejlepší z LaTeXu (programovatelnost, kontrola nad layoutem) a kombinuje to s jednoduchostí a rychlostí, kterou znáte z Markdownu. Kompilace probíhá v reálném čase, takže okamžitě vidíte výsledek svých změn.'
      },
      {
        type: 'list',
        text: [
          'Jednoduchá syntaxe: Zápis je mnohem čistší a intuitivnější než v LaTeXu, což výrazně zrychluje učení i samotné psaní.',
          'Extrémní rychlost: Změny v dokumentu se projeví téměř okamžitě, bez čekání na kompilaci.',
          'Vestavěné funkce: Běžné úkony jako vkládání bibliografie nebo formátování jsou často jednodušší a nevyžadují hledání externích balíčků.',
          'Skriptování: Možnost psát vlastní funkce a automatizovat opakující se úlohy přímo v dokumentu.'
        ]
      },
      {
        type: 'note',
        text: 'Typst je relativně nový projekt, ale jeho popularita rychle roste. Je to skvělá volba pro ty, kterým LaTeX připadá příliš složitý, ale stále potřebují profesionální výstup. Pro disertační práci existuje šablona.'
      },
      {
        type: 'note',
        text: 'Doporučuji pouze pro zpracování disertační práce, nikoliv na články samotné. VR a OS berou pouze Word a většina zahraničních Word, nebo LaTeX!'
      }
    ]
  },

  // =======================================================================
  // KATEGORIE: Nástroje
  // =======================================================================
{
    id: 'freedium',
    title: 'Freedium: Čtení článků z Medium.com',
    category: 'Nástroje',
    shortDescription: 'Služba, která umožňuje číst prémiové články na platformě Medium.',
    link: {
        url: 'http://freedium.cfd/',
        text: 'Přejít na Freedium',
    },
    content: [
      {
        type: 'paragraph',
        text: 'Freedium funguje jako proxy, která obchází platební bránu na webu Medium.com. Pro správnou funkci je potřeba provést jednoduchou jednorázovou úpravu v systémovém souboru `hosts`.',
      },
      {
        type: 'code',
        text: '146.103.108.112  freedium.cfd',
      },
      {
        type: 'note',
        text: 'Následující kroky ukazují, jak přidat výše uvedený řádek do souboru `hosts` na různých operačních systémech. Vždy je potřeba mít administrátorská oprávnění.'
      },
      {
        type: 'list',
        text: [
          'Windows 🪟',
          'Otevřete Poznámkový blok (Notepad) jako správce (klikněte pravým tlačítkem a zvolte "Spustit jako správce").',
          'V menu jděte na Soubor → Otevřít.',
          'Do pole pro název souboru vložte cestu: `C:\\Windows\\System32\\drivers\\etc\\hosts` a stiskněte Enter.',
          'Vpravo dole změňte filtr z "Textové dokumenty (*.txt)" na "Všechny soubory (*.*)".',
          'Otevřete soubor `hosts`, na konec přidejte nový řádek s textem a soubor uložte (Ctrl + S).'
        ]
      },
      {
        type: 'list',
        text: [
          'macOS 🍏',
          'Otevřete aplikaci Terminál (najdete ji přes Spotlight nebo v Aplikace → Utility).',
          'Zadejte příkaz `sudo nano /etc/hosts` a stiskněte Enter.',
          'Zadejte své administrátorské heslo (při psaní se nebudou zobrazovat znaky).',
          'Pomocí šipek sjeďte na konec souboru a přidejte nový řádek.',
          'Uložte soubor stisknutím Ctrl + O a potvrďte klávesou Enter. Editor zavřete stisknutím Ctrl + X.'
        ]
      },
      {
        type: 'list',
        text: [
          'Linux (Ubuntu, atd.) 🐧',
          'Otevřete Terminál (obvykle klávesovou zkratkou Ctrl + Alt + T).',
          'Zadejte příkaz `sudo nano /etc/hosts` a stiskněte Enter.',
          'Zadejte své heslo.',
          'Sjeďte na konec souboru, přidejte nový řádek, uložte (Ctrl + O, Enter) a zavřete (Ctrl + X).'
        ]
      }
    ],
  }
];