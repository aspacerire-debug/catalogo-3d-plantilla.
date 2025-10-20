import React from 'react';
import { motion } from 'framer-motion';
import Product from './pages/Product';
import data from '@/data/catalog.json';

/** Libro vertical (paginador) que se alimenta de /data/catalog.json */
export default function Book() {
  const pages = data.pages || [];

  return (
    <section className="flex flex-col gap-6">
      {pages.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <Product data={p} />
        </motion.div>
      ))}
    </section>
  );
}
