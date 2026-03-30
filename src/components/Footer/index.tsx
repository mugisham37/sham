import { motion } from 'framer-motion';
import Link from 'next/link';
import CTAText from '../CTAText';
import SocialMediaIcon from '../SocialMediaIcon';
import { socialLinks } from '../../data/content';
import styles from './Footer.module.css';

const linkRows = [
  [{ label: 'Home', href: '/' }, { label: 'About Us', href: '/#about-us' }, { label: 'Services', href: '/#services' }],
  [{ label: 'Work', href: '/work' }, { label: 'Pricing', href: '/#pricing' }, { label: 'Blog', href: '/blog' }],
  [{ label: 'Terms & Conditions', href: '/legal/terms' }, { label: 'Privacy Policy', href: '/legal/privacy' }, { label: 'Refund Policy', href: '/legal/refund' }],
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.cta}>
          <CTAText />
        </div>
        <div className={styles.links}>
          <div className={styles.leftCol}>
            <div className={styles.socialRow}>
              {socialLinks.map(s => <SocialMediaIcon key={s.platform} platform={s.platform} url={s.url} />)}
            </div>
            <div className={styles.navLinks}>
              {linkRows.map((row, i) => (
                <div key={i} className={styles.linkRow}>
                  {row.map((link, j) => (
                    <span key={link.label} style={{ display: 'contents' }}>
                      <Link href={link.href} className={`body-20 ${styles.link}`}>{link.label}</Link>
                      {j < row.length - 1 && <span className="body-20" style={{ color: 'var(--white)' }}>/</span>}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.rightCol}>
            <div className={styles.contactBlock}>
              <span className="body-18" style={{ color: 'var(--white)', opacity: 0.6 }}>Contact Us</span>
              <a href="tel:+12345678910" className="body-24" style={{ color: 'var(--white)' }}>+1 234 567-89-10</a>
            </div>
            <div className={styles.contactRow}>
              <div className={styles.contactBlock}>
                <span className="body-18" style={{ color: 'var(--white)', opacity: 0.6 }}>Location</span>
                <span className="body-24" style={{ color: 'var(--white)' }}>2972 Al-Hamra Street, Damascus, Syria</span>
              </div>
              <div className={styles.contactBlock}>
                <span className="body-18" style={{ color: 'var(--white)', opacity: 0.6 }}>Email</span>
                <a href="mailto:hello@gmail.com" className="body-24" style={{ color: 'var(--white)' }}>hello@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <motion.span className={styles.watermark}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}>
        Alsham
      </motion.span>
    </footer>
  );
}
