import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface RevealProps { children: ReactNode; delay?: number; className?: string; style?: React.CSSProperties; }

export function SectionReveal({ children, delay = 0, className, style }: RevealProps) {
  return (
    <motion.div className={className} style={style}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay }}>
      {children}
    </motion.div>
  );
}

export function StaggerContainer({ children, className, style }: { children: ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <motion.div className={className} style={style}
      initial="hidden" whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className, style }: { children: ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <motion.div className={className} style={style}
      variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}>
      {children}
    </motion.div>
  );
}

export function HeroReveal({ children, className, style }: { children: ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <motion.div className={className} style={style}
      initial="hidden" animate="visible"
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } } }}>
      {children}
    </motion.div>
  );
}

export function HeroItem({ children, className, style }: { children: ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <motion.div className={className} style={style}
      variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } }}>
      {children}
    </motion.div>
  );
}

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4, ease: 'easeInOut' as const } },
  exit: { opacity: 0, transition: { duration: 0.3, ease: 'easeInOut' as const } },
};

export function PageWrapper({ children }: { children: ReactNode }) {
  return <motion.div {...pageTransition}>{children}</motion.div>;
}
