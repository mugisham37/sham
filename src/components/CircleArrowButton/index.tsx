'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface CircleArrowButtonProps {
  variant?: 'white' | 'black';
  active?: boolean;
  rotation?: number;
  onClick?: () => void;
}

export default function CircleArrowButton({ variant = 'white', active = false, rotation = 0, onClick }: CircleArrowButtonProps) {
  const [hovered, setHovered] = useState(false);
  const isActive = active || hovered;
  const fillColor = variant === 'white' ? 'var(--white)' : 'var(--black-02)';
  const arrowColor = variant === 'white'
    ? (isActive ? 'var(--black-01)' : 'var(--black-01)')
    : (isActive ? 'var(--white)' : 'var(--white)');

  return (
    <motion.button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      style={{
        width: 50, height: 50, borderRadius: '50%',
        border: '1px solid var(--gray)', overflow: 'hidden',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer', position: 'relative', transform: `rotate(${rotation}deg)`,
      }}
      animate={{ backgroundColor: isActive ? fillColor : 'transparent' }}
      transition={{ duration: 0.3 }}
    >
      <div style={{ width: '100%', height: '100%', overflow: 'hidden', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <motion.div
          style={{ position: 'absolute' }}
          animate={{ x: isActive ? 30 : 0, y: isActive ? -30 : 0, opacity: isActive ? 0 : 1 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H7M17 7V17" stroke={arrowColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </motion.div>
        <motion.div
          style={{ position: 'absolute' }}
          animate={{ x: isActive ? 0 : -30, y: isActive ? 0 : 30, opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H7M17 7V17" stroke={arrowColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </motion.div>
      </div>
    </motion.button>
  );
}
