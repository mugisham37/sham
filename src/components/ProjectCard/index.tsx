'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './ProjectCard.module.css';

interface ProjectCardProps { name: string; description: string; slug: string; image?: string; }

export default function ProjectCard({ name, description, slug, image }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link href={`/work/${slug}#work-section`} className={styles.card} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div className={styles.imageWrap}>
        <motion.div className={styles.imageBg} style={{ backgroundImage: image ? `url(${image})` : undefined, backgroundColor: image ? undefined : 'var(--black-03)' }}
          animate={{ scale: hovered ? 1.05 : 1 }} transition={{ duration: 0.5, ease: 'easeOut' }} />
        <div className={styles.overlay} />
        <motion.div className={styles.viewBtn} animate={{ opacity: hovered ? 1 : 0 }} transition={{ duration: 0.3 }}>
          <span className="body-24-medium">View</span>
        </motion.div>
      </div>
      <div className={styles.info}>
        <h4 className="h4">{name}</h4>
        <p className="body-20">{description}</p>
      </div>
    </Link>
  );
}
