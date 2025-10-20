import React from 'react';
import Book from './Book';
import data from '@/data/catalog.json';

export default function App() {
  return (
    <main className="min-h-screen p-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">{data.brand}</h1>
        <p className="text-slate-300">Plantilla editable sin tocar código</p>
      </header>
      <Book />
    </main>
  );
}
