// src/data/Publications.ts
import type { Publication } from '../types';

const books = (title: string) => ({
  url: `https://www.google.com/search?tbm=bks&q=${encodeURIComponent(title)}`,
  text: 'Najít knihu',
});

export const publications: Publication[] = [
  {
    title: 'Writing your dissertation in fifteen minutes a day',
    author: 'Joan Bolker',
    year: 1998,
    pdfUrl: '/academia/pdfs/Writing your dissertation in fifteen minutes a day.pdf',
  },
  {
    title:
      'The Dissertation Journey - A Practical and Comprehensive Guide to Planning, Writing, and Defending Your Dissertation',
    author: 'Lura Hyatt, Carol Roberts',
    year: 2024,
    pdfUrl:
      '/academia/pdfs/The Dissertation Journey - A Practical and Comprehensive Guide to Planning, Writing, and Defending Your Dissertation.pdf',
  },
  {
    title: 'How to Write a Thesis',
    author: 'Umberto Eco',
    year: 2015,
    note: 'Klasika o řemesle psaní kvalifikační práce – od výběru tématu po obhajobu.',
    link: books('Umberto Eco How to Write a Thesis'),
  },
  {
    title: 'The Craft of Research',
    author: 'Wayne C. Booth, Gregory G. Colomb, Joseph M. Williams',
    year: 2016,
    note: 'Standardní příručka o formulaci výzkumné otázky, argumentace a struktury.',
    link: books('The Craft of Research Booth Colomb Williams'),
  },
  {
    title: 'Research Design: Qualitative, Quantitative, and Mixed Methods Approaches',
    author: 'John W. Creswell, J. David Creswell',
    year: 2022,
    note: 'Přehled kvantitativního, kvalitativního i smíšeného výzkumného designu.',
    link: books('Creswell Research Design Qualitative Quantitative Mixed Methods'),
  },
  {
    title: 'Case Study Research and Applications: Design and Methods',
    author: 'Robert K. Yin',
    year: 2018,
    note: 'Metodika případové studie – užitečné pro bezpečnostní a obranná studia.',
    link: books('Robert Yin Case Study Research and Applications'),
  },
  {
    title: 'How to Write a Lot: A Practical Guide to Productive Academic Writing',
    author: 'Paul J. Silvia',
    year: 2007,
    note: 'Praktický návod na produktivní a pravidelné akademické psaní.',
    link: books('Paul Silvia How to Write a Lot'),
  },
];
