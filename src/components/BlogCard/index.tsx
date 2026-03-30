'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './BlogCard.module.css';

interface BlogCardProps { title: string; slug: string; date: string; excerpt: string; image?: string; featured?: boolean; }

export default function BlogCard({ title, slug, date, excerpt, image, featured = false }: BlogCardProps) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link href={`/blog/${slug}#article-section`} className={featured ? styles.featured : styles.card}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <motion.div className={styles.imageBg}
        style={{ backgroundImage: image ? `url(${image})` : undefined, backgroundColor: image ? undefined : `hsl(${title.length * 30}, 25%, 35%)` }}
        animate={{ scale: hovered ? 1.05 : 1 }} transition={{ duration: 0.5, ease: 'easeOut' }} />
      <div className={styles.gradient} />
      <div className={styles.content}>
        <div className={styles.titleDate}>
          <span className="body-16" style={{ color: 'var(--white)', opacity: 0.8 }}>{date}</span>
          <h5 className="h5" style={{ color: 'var(--white)' }}>{title}</h5>
        </div>
        <p className="body-16" style={{ color: 'var(--white)', opacity: 0.8 }}>{excerpt}</p>
      </div>
    </Link>
  );
}
