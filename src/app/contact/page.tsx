import { useState } from 'react';
import { PageWrapper, SectionReveal, HeroReveal, HeroItem, StaggerContainer, StaggerItem } from '../../components/Animations';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import FAQCard from '../../components/FAQCard';
import { faqs } from '../../data/content';
import styles from './ContactUs.module.css';

export default function ContactUs() {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [budget, setBudget] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <PageWrapper>
      <Navigation />
      <section id="hero-section" style={{ padding: '320px 20px 160px', maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <HeroReveal className={styles.heroLayout}>
            <HeroItem className={styles.left}>
              <h1 className="h1b" style={{ maxWidth: 942 }}>Let's Work Together.</h1>
              <p className="body-20">Have a project or need help? Fill out the form, and we'll get back to you soon.</p>
            </HeroItem>
            <HeroItem>
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.field}>
                  <label className={styles.label}>Name</label>
                  <input type="text" className={styles.input} placeholder="Your name" required />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Email</label>
                  <input type="email" className={styles.input} placeholder="Your email" required />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Your Budget</label>
                  {['<$5,000', '<$10,000', '>$10,000'].map(v => (
                    <label key={v} className={styles.radio}>
                      <input type="radio" name="budget" value={v} checked={budget === v} onChange={() => setBudget(v)} />
                      <span className={styles.radioLabel}>{v}</span>
                    </label>
                  ))}
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Your Project</label>
                  <textarea className={styles.textarea} placeholder="Tell us about your project..." rows={4} required />
                </div>
                <button type="submit" className={styles.submitBtn} disabled={formState === 'loading'}
                  style={{ background: formState === 'error' ? 'var(--error-bg)' : formState === 'success' ? 'var(--white)' : undefined,
                    opacity: formState === 'loading' ? 0.7 : 1 }}>
                  {formState === 'loading' ? 'Sending...' : formState === 'success' ? 'Sent!' : formState === 'error' ? 'Error' : 'Submit'}
                </button>
              </form>
            </HeroItem>
          </HeroReveal>
        </div>
      </section>

      <section style={{ padding: '80px 20px', maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div className={styles.faqLayout}>
            <SectionReveal><h2 className="h2" style={{ maxWidth: 420 }}>Have Questions?</h2></SectionReveal>
            <StaggerContainer className={styles.faqList}>
              {faqs.map((f, i) => (
                <StaggerItem key={i}><FAQCard question={f.question} answer={f.answer} /></StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>
      <Footer />
    </PageWrapper>
  );
}
