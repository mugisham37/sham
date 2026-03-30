'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LogoSVG } from '../Icons';
import styles from './Navigation.module.css';

const navLinks = [
  { label: 'About', href: '/#about-us' },
  { label: 'Services', href: '/#services' },
  { label: 'Work', href: '/work#hero-section' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Blog', href: '/blog#hero-section' },
  { label: 'Contact Us', href: '/contact-us#hero-section' },
];

function NavLink({ label, href, onClick }: { label: string; href: string; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  const pathname = usePathname();
  const arrow = <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H7M17 7V17" stroke="var(--white)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;

  // Handle navigation with hash support
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClick();
    
    const [path, hash] = href.split('#');
    const targetPath = path || '/';
    
    // If navigating to a different page, use Next.js Link
    if (path && targetPath !== pathname) {
      // Next.js Link will handle the navigation, hash scroll happens after load
      const linkElement = document.createElement('a');
      linkElement.href = href;
      linkElement.click();
      
      // If there's a hash, store it in sessionStorage for the target page to handle
      if (hash) {
        sessionStorage.setItem('scrollToHash', hash);
      }
    } else if (hash) {
      // Same page, just scroll to hash
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a href={href} onClick={handleClick} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 16px', overflow: 'hidden', width: '100%', cursor: 'pointer', textDecoration: 'none' }}>
      <motion.span animate={{ x: hovered ? 20 : 0 }} transition={{ duration: 0.25 }} className="body-18" style={{ color: 'var(--white)' }}>{label}</motion.span>
      <motion.span animate={{ x: hovered ? 0 : 10, opacity: hovered ? 1 : 0 }} transition={{ duration: 0.25 }}>{arrow}</motion.span>
    </a>
  );
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on route change
  // When route changes, close the dropdown menu - this is an intentional effect
  useEffect(() => { 
    setIsOpen(false); // eslint-disable-line react-hooks/set-state-in-effect
  }, [pathname]);

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [isOpen]);

  // Handle hash scroll on page load
  useEffect(() => {
    const hash = sessionStorage.getItem('scrollToHash');
    if (hash) {
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
        sessionStorage.removeItem('scrollToHash');
      }, 300);
    }
  }, [pathname]);

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} onClick={() => setIsOpen(false)}>
          <LogoSVG />
          <span className="body-18-medium">Sham Studio</span>
        </Link>
        <div style={{ position: 'relative' }} ref={dropdownRef}>
          <button className={styles.trigger} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            <div style={{ width: 44, height: 24, overflow: 'hidden', position: 'relative' }}>
              <motion.span className="body-18-medium" style={{ position: 'absolute', left: 0 }} animate={{ y: isOpen ? 0 : -24 }}>Close</motion.span>
              <motion.span className="body-18-medium" style={{ position: 'absolute', left: 0 }} animate={{ y: isOpen ? 24 : 0 }}>Menu</motion.span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, width: 16, height: 10, justifyContent: 'center', position: 'relative' }}>
              <motion.div style={{ width: 16, height: 2, background: 'black', borderRadius: 371, position: 'absolute', transformOrigin: 'center' }}
                animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? 0 : -3 }} transition={{ duration: 0.3 }} />
              <motion.div style={{ width: 16, height: 2, background: 'black', borderRadius: 371, position: 'absolute', transformOrigin: 'center' }}
                animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 0 : 3 }} transition={{ duration: 0.3 }} />
            </div>
          </button>
          <AnimatePresence>
            {isOpen && (
              <motion.div className={styles.dropdown}
                initial={{ opacity: 0, scale: 0.95, y: -8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -8 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                style={{ transformOrigin: 'top right' }}>
                {navLinks.map(l => <NavLink key={l.label} label={l.label} href={l.href} onClick={() => setIsOpen(false)} />)}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
}
