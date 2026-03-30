'use client';

import { useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import styles from './FAQCard.module.css';

interface FAQCardProps { question: string; answer: string; }

export default function FAQCard({ question, answer }: FAQCardProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.card} onClick={() => setOpen(!open)}>
      <div className={styles.row}>
        <h6 className="h6" style={{ color: 'var(--white)', flex: 1 }}>{question}</h6>
        <motion.div className={styles.iconWrap} animate={{ rotate: open ? -135 : 45 }} transition={{ duration: 0.3 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H7M17 7V17" stroke="var(--black-02)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </motion.div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: 'easeInOut' }} style={{ overflow: 'hidden' }}>
            <p className="body-18" style={{ color: 'var(--white)', paddingTop: 20, paddingRight: 40, opacity: 0.8 }}>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
