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
  },

  // =======================================================================
  // KATEGORIE: AI rešerše
  // =======================================================================
  {
    id: 'elicit',
    title: 'Elicit: AI asistent pro rešerši literatury',
    category: 'AI rešerše',
    shortDescription: 'AI, která najde relevantní studie a vytáhne z nich klíčové údaje do přehledné tabulky.',
    link: { url: 'https://elicit.com/', text: 'Vyzkoušet Elicit' },
    content: [
      {
        type: 'paragraph',
        text: 'Elicit prohledá miliony akademických prací, najde relevantní studie k vaší otázce a automaticky z nich extrahuje údaje (metoda, vzorek, výsledky) do tabulky. Výrazně tak zrychluje první fázi systematické rešerše.',
      },
      {
        type: 'list',
        text: [
          'Zadejte výzkumnou otázku v přirozeném jazyce.',
          'Elicit vrátí seznam studií se shrnutím a klíčovými údaji.',
          'Data lze filtrovat podle kritérií a exportovat.',
        ],
      },
      {
        type: 'note',
        text: 'Skvělé pro první orientaci, ale vždy si ověřte původní zdroje – AI může údaje zjednodušit nebo přehlédnout.',
      },
    ],
  },
  {
    id: 'research-rabbit',
    title: 'Research Rabbit: Objevování a monitoring literatury',
    category: 'AI rešerše',
    shortDescription: 'Zdarma nástroj pro hledání souvisejících prací a autorů – „Spotify pro vědecké články".',
    link: { url: 'https://www.researchrabbit.ai/', text: 'Přejít na Research Rabbit' },
    content: [
      {
        type: 'paragraph',
        text: 'Zadáte několik klíčových článků a Research Rabbit vytvoří kolekci, doporučuje související práce a autory a vizualizuje citační vazby. Umí také posílat upozornění na nové relevantní články.',
      },
      {
        type: 'note',
        text: 'Kompletně zdarma a bez omezení – vhodná bezplatná alternativa ke Connected Papers.',
      },
    ],
  },
  {
    id: 'scite',
    title: 'Scite.ai: Chytré citace (Smart Citations)',
    category: 'AI rešerše',
    shortDescription: 'Ukáže, zda pozdější studie tvrzení daného článku podporují, nebo mu odporují.',
    link: { url: 'https://scite.ai/', text: 'Přejít na Scite' },
    content: [
      {
        type: 'paragraph',
        text: 'Scite neposuzuje citace jen podle počtu, ale podle kontextu – označuje, zda citující práce původní zjištění podporuje, zmiňuje, nebo mu odporuje. Pomáhá tak posoudit, jak spolehlivé a zpochybňované dané tvrzení je.',
      },
      {
        type: 'note',
        text: 'Základ je částečně zdarma; plné funkce vyžadují předplatné. Užitečné pro kritické čtení zdrojů.',
      },
    ],
  },
  {
    id: 'consensus',
    title: 'Consensus a SciSpace: Odpovědi s citacemi',
    category: 'AI rešerše',
    shortDescription: 'AI vyhledávače, které odpovídají na otázky přímo z vědecké literatury a doloží zdroje.',
    link: { url: 'https://consensus.app/', text: 'Přejít na Consensus' },
    content: [
      {
        type: 'paragraph',
        text: 'Consensus odpovídá na výzkumné otázky syntézou zjištění z reálných studií a ke každému tvrzení uvádí zdroj. SciSpace (dříve Typeset) navíc umí vysvětlit obtížné pasáže a odpovídat na dotazy k nahranému PDF.',
      },
      {
        type: 'list',
        text: [
          'Consensus – rychlý přehled, co k dané otázce říká literatura.',
          'SciSpace – „Copilot" pro čtení a vysvětlování konkrétních článků (https://scispace.com).',
        ],
      },
      {
        type: 'note',
        text: 'Oba nástroje fungují ve freemium režimu.',
      },
    ],
  },
  {
    id: 'semantic-scholar',
    title: 'Semantic Scholar: AI vyhledávač článků',
    category: 'AI rešerše',
    shortDescription: 'Bezplatný vyhledávač s AI shrnutími (TL;DR) a nástrojem pro čtení Semantic Reader.',
    link: { url: 'https://www.semanticscholar.org/', text: 'Přejít na Semantic Scholar' },
    content: [
      {
        type: 'paragraph',
        text: 'Semantic Scholar (od Allen Institute for AI) nabízí u mnoha článků automatické shrnutí v jedné větě (TL;DR), přehled citací a doporučení. Semantic Reader zpřehledňuje čtení PDF přímo v prohlížeči.',
      },
      {
        type: 'note',
        text: 'Zcela zdarma a bez reklam, s otevřeným API.',
      },
    ],
  },
  {
    id: 'ai-integrita',
    title: 'Používání AI zodpovědně: ověřování a citování',
    category: 'AI rešerše',
    shortDescription: 'Jak s AI nástroji pracovat, aniž byste porušili akademickou integritu.',
    content: [
      {
        type: 'paragraph',
        text: 'AI nástroje jsou skvělý pomocník pro rešerši i psaní, ale nesou rizika: mohou si „vymyslet" neexistující zdroje (halucinace), zkreslit zjištění nebo přinést zastaralé informace. Odpovědnost za text nese vždy autor.',
      },
      {
        type: 'list',
        text: [
          'Vždy ověřte, že citovaný zdroj skutečně existuje a říká to, co AI tvrdí.',
          'Nikdy necitujte podle AI – dohledejte a citujte původní publikaci.',
          'Zkontrolujte pokyny svého pracoviště a cílového časopisu k použití AI.',
          'Použití AI transparentně přiznejte (např. v poděkování nebo v metodách).',
        ],
      },
      {
        type: 'note',
        text: 'Řada časopisů dnes vyžaduje prohlášení o použití generativní AI. AI navíc nelze uvést jako spoluautora.',
      },
    ],
  },

  // =======================================================================
  // KATEGORIE: Open access
  // =======================================================================
  {
    id: 'unpaywall',
    title: 'Unpaywall: Legální plné texty jedním klikem',
    category: 'Open access',
    shortDescription: 'Rozšíření prohlížeče, které u placeného článku najde volně dostupnou legální verzi.',
    link: { url: 'https://unpaywall.org/', text: 'Nainstalovat Unpaywall' },
    content: [
      {
        type: 'paragraph',
        text: 'Unpaywall prohledává miliony open access verzí článků (repozitáře, preprinty, autorské kopie). Na stránce placeného článku se objeví zelený zámek – kliknutím otevřete legální plný text zdarma.',
      },
      {
        type: 'note',
        text: 'Zcela legální a zdarma; data Unpaywall využívá i řada knihoven a vyhledávačů.',
      },
    ],
  },
  {
    id: 'core-base',
    title: 'CORE a BASE: Agregátory open access',
    category: 'Open access',
    shortDescription: 'Dva největší vyhledávače volně dostupných plných textů z repozitářů celého světa.',
    link: { url: 'https://core.ac.uk/', text: 'Přejít na CORE' },
    content: [
      {
        type: 'paragraph',
        text: 'CORE agreguje stovky milionů open access článků z tisíců repozitářů a časopisů. BASE (Bielefeld Academic Search Engine) je další rozsáhlý akademický vyhledávač zaměřený na otevřené zdroje.',
      },
      {
        type: 'note',
        text: 'BASE najdete na https://www.base-search.net – ideální, když Google Scholar nenajde volný plný text.',
      },
    ],
  },
  {
    id: 'doaj',
    title: 'DOAJ: Adresář důvěryhodných OA časopisů',
    category: 'Open access',
    shortDescription: 'Seznam prověřených open access časopisů – zároveň pomůcka proti predátorům.',
    link: { url: 'https://doaj.org/', text: 'Přejít na DOAJ' },
    content: [
      {
        type: 'paragraph',
        text: 'Directory of Open Access Journals (DOAJ) indexuje recenzované OA časopisy, které splňují kritéria kvality a transparentnosti. Kromě hledání článků slouží i jako první kontrola, zda je časopis legitimní.',
      },
      {
        type: 'note',
        text: 'Pokud OA časopis v DOAJ chybí, je namístě opatrnost – viz kategorie „Kvalita časopisů".',
      },
    ],
  },

  // =======================================================================
  // KATEGORIE: Kvalita časopisů
  // =======================================================================
  {
    id: 'think-check-submit',
    title: 'Think. Check. Submit.: Obrana proti predátorům',
    category: 'Kvalita časopisů',
    shortDescription: 'Jednoduchý checklist, jak poznat důvěryhodný časopis před odesláním rukopisu.',
    link: { url: 'https://thinkchecksubmit.org/', text: 'Otevřít checklist' },
    content: [
      {
        type: 'paragraph',
        text: 'Predátorské časopisy vyberou poplatek, ale neposkytnou skutečné recenzní řízení ani redakční práci. Think. Check. Submit. nabízí ověřený seznam otázek, které si položit před volbou časopisu.',
      },
      {
        type: 'list',
        text: [
          'Znáte časopis a četli jste v něm už nějaké články?',
          'Je vydavatel dohledatelný, uvádí kontakt a jasné poplatky?',
          'Je časopis indexován v DOAJ / WoS / Scopus?',
          'Je redakční rada reálná a složená z odborníků v oboru?',
        ],
      },
      {
        type: 'note',
        text: 'Checklist je dostupný i v češtině.',
      },
    ],
  },
  {
    id: 'scimago',
    title: 'Scimago (SJR): Metriky a kvartily časopisů zdarma',
    category: 'Kvalita časopisů',
    shortDescription: 'Bezplatné žebříčky časopisů podle oboru, včetně kvartilů (Q1–Q4) z dat Scopusu.',
    link: { url: 'https://www.scimagojr.com/', text: 'Přejít na Scimago' },
    content: [
      {
        type: 'paragraph',
        text: 'Scimago Journal Rank (SJR) umožňuje zdarma vyhledat časopis a zjistit jeho kvartil, obor, trend citovanosti a zařazení. Je to praktická náhrada za placený Journal Citation Reports (JCR).',
      },
      {
        type: 'note',
        text: 'Kvartil (Q1 nejlepší) je klíčový ukazatel pro hodnocení výsledků – ověřujte ho podle oboru, ve kterém je časopis zařazen.',
      },
    ],
  },
  {
    id: 'retraction-watch',
    title: 'Retraction Watch: Databáze stažených článků',
    category: 'Kvalita časopisů',
    shortDescription: 'Zjistěte, zda nebyl článek, který chcete citovat, odvolán (retracted).',
    link: { url: 'https://retractionwatch.com/', text: 'Přejít na Retraction Watch' },
    content: [
      {
        type: 'paragraph',
        text: 'Citovat stažený (retracted) článek jako platný zdroj je vážná chyba. Retraction Watch a jeho databáze sledují odvolané publikace i důvody stažení.',
      },
      {
        type: 'note',
        text: 'Databáze je integrovaná i do Zotera (upozornění u stažených zdrojů) a do nástroje Scite.',
      },
    ],
  },
  {
    id: 'overit-casopis',
    title: 'Jak ověřit indexaci a kvartil časopisu (WoS/Scopus)',
    category: 'Kvalita časopisů',
    shortDescription: 'Postup, jak zjistit, zda je časopis ve WoS / Scopus a v jakém kvartilu – s vazbou na hodnocení VaV.',
    content: [
      {
        type: 'paragraph',
        text: 'Pro uznatelnost výsledku v českém hodnocení (Metodika 2017+ / VŠ2025+, RIV) obvykle rozhoduje, zda je časopis indexován ve Web of Science nebo Scopus a v jakém kvartilu. Postup ověření:',
      },
      {
        type: 'list',
        text: [
          'Web of Science: v Master Journal List (mjl.clarivate.com) vyhledejte název/ISSN a zjistěte kolekci (SCIE, SSCI, ESCI).',
          'Scopus: v Sources (scopus.com/sources) ověřte aktivní indexaci a CiteScore.',
          'Kvartil rychle zjistíte na Scimago (SJR) podle oboru časopisu.',
          'Ověřte ISSN – pozor na „hijacked" (uneseté) časopisy s klonovaným webem.',
        ],
      },
      {
        type: 'note',
        text: 'Zařazení do oboru i metriky se mezi WoS a Scopus liší – u konkrétního titulu vždy ověřte oba zdroje.',
      },
    ],
  },

  // =======================================================================
  // KATEGORIE: Analýza dat
  // =======================================================================
  {
    id: 'jamovi-jasp',
    title: 'jamovi a JASP: Statistika zdarma a klikací',
    category: 'Analýza dat',
    shortDescription: 'Bezplatné programy s přehledným rozhraním – plnohodnotná náhrada za SPSS.',
    link: { url: 'https://www.jamovi.org/', text: 'Stáhnout jamovi' },
    content: [
      {
        type: 'paragraph',
        text: 'jamovi i JASP jsou postavené na jazyce R, ale ovládají se klikáním jako SPSS. Zvládnou popisnou statistiku, t-testy, ANOVA, regrese, faktorovou analýzu i bayesovské metody.',
      },
      {
        type: 'list',
        text: [
          'jamovi – modulární, výsledky se přepočítávají v reálném čase.',
          'JASP – důraz na bayesovskou statistiku a přehledné výstupy (https://jasp-stats.org).',
        ],
      },
      {
        type: 'note',
        text: 'Obojí je open-source a zdarma – ideální pro doktorandy bez licence na SPSS.',
      },
    ],
  },
  {
    id: 'r-rstudio',
    title: 'R a RStudio: Standard pro analýzu dat',
    category: 'Analýza dat',
    shortDescription: 'Bezplatné a mimořádně mocné prostředí pro statistiku a reprodukovatelný výzkum.',
    link: { url: 'https://posit.co/download/rstudio-desktop/', text: 'Stáhnout R a RStudio' },
    content: [
      {
        type: 'paragraph',
        text: 'R je bezplatný jazyk pro statistiku a vizualizaci; RStudio (Posit) je pohodlné vývojové prostředí. Díky skriptům je analýza plně reprodukovatelná a snadno se opakuje po úpravě dat.',
      },
      {
        type: 'note',
        text: 'Vyšší vstupní práh než jamovi, ale nesrovnatelně větší možnosti (balíčky, grafika ggplot2, reporty v R Markdown / Quarto).',
      },
    ],
  },
  {
    id: 'taguette',
    title: 'Taguette: Kvalitativní kódování zdarma',
    category: 'Analýza dat',
    shortDescription: 'Open-source nástroj pro kódování rozhovorů a textů – bezplatná alternativa k ATLAS.ti/MAXQDA.',
    link: { url: 'https://www.taguette.org/', text: 'Přejít na Taguette' },
    content: [
      {
        type: 'paragraph',
        text: 'Taguette umožňuje označovat pasáže v dokumentech štítky (kódy), organizovat je a exportovat. Pokrývá základní potřeby kvalitativní analýzy bez nutnosti drahé licence.',
      },
      {
        type: 'note',
        text: 'Komerční ATLAS.ti a MAXQDA nabízejí víc funkcí (AI kódování, komplexní dotazy), ale jsou placené. Taguette bohatě stačí na menší projekty.',
      },
    ],
  },

  // =======================================================================
  // KATEGORIE: Otevřená věda
  // =======================================================================
  {
    id: 'osf',
    title: 'OSF: Open Science Framework',
    category: 'Otevřená věda',
    shortDescription: 'Bezplatná platforma pro správu výzkumu, preregistraci a sdílení dat.',
    link: { url: 'https://osf.io/', text: 'Přejít na OSF' },
    content: [
      {
        type: 'paragraph',
        text: 'OSF spojuje projektový management, verzování souborů, sdílení dat a preregistraci hypotéz na jednom místě. Preregistrace předem zveřejní plán analýzy, čímž posiluje důvěryhodnost výzkumu.',
      },
      {
        type: 'note',
        text: 'Zdarma, propojitelné se Zenodo, GitHub, Dropbox aj.',
      },
    ],
  },
  {
    id: 'zenodo',
    title: 'Zenodo: Repozitář dat s DOI',
    category: 'Otevřená věda',
    shortDescription: 'Uložte a trvale citujte data, kód i prezentace – s vlastním DOI (provozuje CERN).',
    link: { url: 'https://zenodo.org/', text: 'Přejít na Zenodo' },
    content: [
      {
        type: 'paragraph',
        text: 'Zenodo přidělí nahranému datasetu, softwaru nebo posteru trvalý identifikátor DOI, takže je citovatelný a dohledatelný. Splníte tím požadavky na otevřená data (FAIR) i plány správy dat (DMP).',
      },
      {
        type: 'note',
        text: 'Kapacita až 50 GB na záznam, zdarma. Umí automaticky archivovat vydání z GitHubu.',
      },
    ],
  },

  // =======================================================================
  // KATEGORIE: Psaní (rozšíření)
  // =======================================================================
  {
    id: 'deepl',
    title: 'DeepL: Kvalitní překladač CZ↔EN',
    category: 'Psaní',
    shortDescription: 'Překladač s výrazně přirozenějším výstupem než běžné alternativy – klíčový pro české autory.',
    link: { url: 'https://www.deepl.com/', text: 'Přejít na DeepL' },
    content: [
      {
        type: 'paragraph',
        text: 'DeepL překládá mezi češtinou a angličtinou v kvalitě, která často poslouží jako dobrý základ odborného textu. DeepL Write navíc pomáhá vylepšit styl a formulace přímo v angličtině.',
      },
      {
        type: 'note',
        text: 'Bezplatná verze má limit délky; přeložený odborný text vždy zkontrolujte (terminologie, přesnost).',
      },
    ],
  },
  {
    id: 'languagetool',
    title: 'LanguageTool: Kontrola gramatiky (i česky)',
    category: 'Psaní',
    shortDescription: 'Open-source kontrola pravopisu a stylu, která na rozdíl od Grammarly umí i češtinu.',
    link: { url: 'https://languagetool.org/', text: 'Přejít na LanguageTool' },
    content: [
      {
        type: 'paragraph',
        text: 'LanguageTool kontroluje gramatiku, pravopis a styl ve více než 30 jazycích včetně češtiny a angličtiny. Nabízí rozšíření do prohlížeče i doplněk do Wordu.',
      },
      {
        type: 'note',
        text: 'Základní verze je zdarma a lze ji provozovat i lokálně (open-source). Pro češtinu vhodnější než Grammarly.',
      },
    ],
  },
  {
    id: 'overleaf',
    title: 'Overleaf: LaTeX v prohlížeči',
    category: 'Psaní',
    shortDescription: 'Online editor LaTeXu bez instalace, se sdílením a okamžitým náhledem.',
    link: { url: 'https://www.overleaf.com/', text: 'Přejít na Overleaf' },
    content: [
      {
        type: 'paragraph',
        text: 'Overleaf umožňuje psát v LaTeXu přímo v prohlížeči, spolupracovat v reálném čase a využít připravené šablony (mnoho časopisů a univerzit své šablony nabízí). Odpadá instalace i řešení balíčků.',
      },
      {
        type: 'note',
        text: 'Bezplatná verze stačí jednotlivci. Pozor: VR a OS přijímají obvykle jen Word (viz návod k Typstu).',
      },
    ],
  },
  {
    id: 'academic-phrasebank',
    title: 'Academic Phrasebank: Banka akademických frází',
    category: 'Psaní',
    shortDescription: 'Rozsáhlá sbírka anglických obratů pro každou část odborného textu.',
    link: { url: 'https://www.phrasebank.manchester.ac.uk/', text: 'Otevřít Phrasebank' },
    content: [
      {
        type: 'paragraph',
        text: 'Academic Phrasebank Univerzity v Manchesteru nabízí hotové stavební obraty pro úvod, metody, diskuzi, kritiku zdrojů či závěr. Pomůže, když víte, co chcete říct, ale hledáte vhodnou anglickou formulaci.',
      },
      {
        type: 'note',
        text: 'Nejde o generátor textu – jsou to neutrální šablony vět, které naplníte vlastním obsahem.',
      },
    ],
  },

  // =======================================================================
  // KATEGORIE: Nástroje (rozšíření)
  // =======================================================================
  {
    id: 'diagramy',
    title: 'draw.io, Inkscape a Excalidraw: Obrázky a schémata',
    category: 'Nástroje',
    shortDescription: 'Bezplatné nástroje na diagramy, vektorovou grafiku a náčrty do disertace.',
    link: { url: 'https://app.diagrams.net/', text: 'Otevřít draw.io' },
    content: [
      {
        type: 'paragraph',
        text: 'Kvalitní schémata a obrázky výrazně zvyšují srozumitelnost práce. Pro různé potřeby se hodí jiné nástroje:',
      },
      {
        type: 'list',
        text: [
          'draw.io (diagrams.net) – vývojové diagramy, procesy, modely; zdarma, i offline.',
          'Inkscape – profesionální vektorová grafika (SVG) pro publikační obrázky (https://inkscape.org).',
          'Excalidraw – rychlé „ruční" náčrty a koncepty (https://excalidraw.com).',
        ],
      },
      {
        type: 'note',
        text: 'Vektorové obrázky (SVG/PDF) se v tištěné práci nerozpixelují – preferujte je před screenshoty.',
      },
    ],
  },
  {
    id: 'obsidian',
    title: 'Obsidian: Poznámky a Zettelkasten',
    category: 'Nástroje',
    shortDescription: 'Lokální znalostní báze s propojováním poznámek – ideální pro budování argumentace.',
    link: { url: 'https://obsidian.md/', text: 'Stáhnout Obsidian' },
    content: [
      {
        type: 'paragraph',
        text: 'Obsidian ukládá poznámky jako obyčejné soubory Markdown ve vašem počítači a umožňuje je propojovat odkazy (metoda Zettelkasten). Postupně tak vzniká síť myšlenek, ze které se snáz píše.',
      },
      {
        type: 'note',
        text: 'Zdarma pro osobní použití, data zůstávají u vás. Množství komunitních pluginů (např. pro citace ze Zotera).',
      },
    ],
  },
];