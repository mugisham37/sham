import { useState } from 'react';
import { motion } from 'framer-motion';
import CircleArrowButton from '../CircleArrowButton';
import styles from './ServiceCard.module.css';

interface ServiceCardProps { title: string; labels: string[]; }

export default function ServiceCard({ title, labels }: ServiceCardProps) {
  const [hovered, setHovered] = useState(false);
  const doubled = [...labels, ...labels];
  return (
    <motion.div className={styles.card} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div className={styles.arrowRow}><CircleArrowButton variant="white" /></div>
      <h3 className="h3">{title}</h3>
      <motion.div className={styles.labelsWrap} animate={{ height: hovered ? 'auto' : 0, opacity: hovered ? 1 : 0 }} transition={{ duration: 0.35 }}>
        <div className={styles.fadeLeft} />
        <div className={styles.ticker}>
          <div className={styles.tickerTrack}>
            {doubled.map((l, i) => (
              <span key={i} className={styles.pill}>{l}</span>
            ))}
          </div>
        </div>
        <div className={styles.fadeRight} />
      </motion.div>
    </motion.div>
  );
}
