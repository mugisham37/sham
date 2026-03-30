import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ArrowButtonProps {
  text: string;
  link: string;
  size?: 'lg' | 'sm';
  color?: string;
  openInNewTab?: boolean;
}

export default function ArrowButton({ text, link, size = 'lg', color = 'var(--black-01)', openInNewTab = false }: ArrowButtonProps) {
  const [hovered, setHovered] = useState(false);
  const fontSize = size === 'lg' ? 24 : 20;
  const fontWeight = size === 'lg' ? 500 : 400;

  const arrow = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M7 17L17 7M17 7H7M17 7V17" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const content = (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 4, overflow: 'visible', cursor: 'pointer', position: 'relative' }}
      animate={{ paddingRight: hovered ? 0 : 28, paddingLeft: hovered ? 28 : 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <motion.span
        style={{ display: 'flex', flexShrink: 0 }}
        animate={{ x: hovered ? 0 : -24, opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >{arrow}</motion.span>
      <span style={{ font: `${fontWeight} ${fontSize}px/1.2em 'Clash Grotesk', sans-serif`, letterSpacing: '-0.02em', color, whiteSpace: 'nowrap' }}>{text}</span>
      <motion.span
        style={{ display: 'flex', flexShrink: 0 }}
        animate={{ x: hovered ? 24 : 0, opacity: hovered ? 0 : 1 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >{arrow}</motion.span>
    </motion.div>
  );

  if (link.startsWith('http') || link.startsWith('mailto') || link.startsWith('tel') || openInNewTab) {
    return <a href={link} target={openInNewTab ? '_blank' : undefined} rel={openInNewTab ? 'noopener noreferrer' : undefined}>{content}</a>;
  }
  return <Link to={link}>{content}</Link>;
}
