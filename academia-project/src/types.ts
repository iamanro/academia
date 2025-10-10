// /src/types.ts

// Typ pro jednu publikaci, použitý v App, PublicationList a datech.
export interface Publication {
  title: string;
  author: string;
  year: number;
  pdfUrl: string;
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