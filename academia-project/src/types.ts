// /src/types.ts

// Typ pro jednu publikaci, použitý v App, PublicationList a datech.
export interface Publication {
  title: string;
  author: string;
  year: number;
  // Lokální PDF ke stažení. Pokud chybí, zobrazí se externí odkaz `link`.
  pdfUrl?: string;
  // Externí odkaz (např. kde knihu sehnat), pokud není k dispozici PDF.
  link?: {
    url: string;
    text: string;
  };
  // Krátké zdůvodnění / anotace (volitelné).
  note?: string;
}

// Typ pro data z formuláře, použitý v App a RequestFormModal.
export interface FormData {
  name: string;
  link: string;
  note: string;
}

// NOVÝ TYP PRO NÁVODY
export interface Tutorial {
  id: string;
  title: string;
  category: string; // <-- PŘIDAT TENTO ŘÁDEK
  shortDescription: string;
  content: {
    type: 'paragraph' | 'list' | 'note' | 'code';
    text: string | string[];
  }[];
  link?: {
    url: string;
    text: string;
  };
}