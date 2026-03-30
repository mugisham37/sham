'use client';

import { useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import CircleArrowButton from '../CircleArrowButton';
import { testimonials } from '../../data/content';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const total = testimonials.length;
  const t = testimonials[idx];
  const prev = () => setIdx(i => (i - 1 + total) % total);
  const next = () => setIdx(i => (i + 1) % total);

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className="h2">Trust Us</h2>
        <div className={styles.arrows}>
          <CircleArrowButton variant="black" rotation={180} onClick={prev} />
          <CircleArrowButton variant="black" rotation={0} onClick={next} />
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.counter}>
          <span className="body-20">({String(idx + 1).padStart(2, '0')} - {String(total).padStart(2, '0')})</span>
        </div>
        <div className={styles.content}>
          <AnimatePresence mode="wait">
            <motion.div key={idx} className={styles.testimonial}
              initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.4, ease: 'easeInOut' }}>
              <p className="body-36">{t.quote}</p>
              <div className={styles.author}>
                <div className={styles.avatar} style={{ background: `hsl(${idx * 72}, 40%, 60%)` }} />
                <div className={styles.nameRole}>
                  <span className="body-24-medium">{t.name}</span>
                  <span className="body-18">{t.role}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
