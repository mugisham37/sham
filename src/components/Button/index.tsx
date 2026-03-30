'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface ButtonProps { text: string; link: string; openInNewTab?: boolean; }

export default function Button({ text, link, openInNewTab = false }: ButtonProps) {
  const [hovered, setHovered] = useState(false);
  const arrow = <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H7M17 7V17" stroke="var(--black-01)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;

  const inner = (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 8, borderRadius: 160, border: '1px solid var(--gray)', background: 'var(--white)', overflow: 'hidden', cursor: 'pointer' }}
      animate={{ padding: hovered ? '14px 28px 14px 60px' : '14px 60px 14px 28px' }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <motion.span style={{ display: 'flex', flexShrink: 0 }} animate={{ x: hovered ? 0 : -44, opacity: hovered ? 1 : 0 }} transition={{ duration: 0.3 }}>{arrow}</motion.span>
      <span className="body-18-medium" style={{ whiteSpace: 'nowrap' }}>{text}</span>
      <motion.span style={{ display: 'flex', flexShrink: 0 }} animate={{ x: hovered ? 44 : 0, opacity: hovered ? 0 : 1 }} transition={{ duration: 0.3 }}>{arrow}</motion.span>
    </motion.div>
  );

  if (openInNewTab || link.startsWith('http')) return <a href={link} target="_blank" rel="noopener noreferrer">{inner}</a>;
  return <Link href={link}>{inner}</Link>;
}
