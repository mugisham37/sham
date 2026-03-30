import { useState } from 'react';
import { motion } from 'framer-motion';
import { PageWrapper, SectionReveal, HeroReveal, HeroItem, StaggerContainer, StaggerItem } from '../../components/Animations';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import BlogCard from '../../components/BlogCard';
import { SearchIcon } from '../../components/Icons';
import { blogPosts } from '../../data/content';
import layout from '../../styles/layout.module.css';

export default function Blog() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const filtered = blogPosts.filter(p => p.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <PageWrapper>
      <Navigation />
      <section id="hero-section" style={{ padding: '320px 20px 160px', maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <HeroReveal style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <HeroItem><h1 className="h1b" style={{ maxWidth: 942 }}>Insights crafted for modern brands</h1></HeroItem>
            <HeroItem>
              <p className="body-20" style={{ maxWidth: 942 }}>
                Discover ideas, perspectives, and creative thinking shaped by our work in brand identity and art direction.
                Each article explores how thoughtful design helps brands communicate with clarity and intention.
              </p>
            </HeroItem>
          </HeroReveal>

          <SectionReveal style={{ marginTop: 40 }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 20 }}>
              <motion.div
                animate={{ width: searchOpen ? 400 : 50 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                onClick={() => !searchOpen && setSearchOpen(true)}
                style={{
                  height: 50, borderRadius: 123, background: 'var(--black-02)',
                  display: 'flex', alignItems: 'center', padding: '0 16px', gap: 10,
                  cursor: 'pointer', overflow: 'hidden',
                }}>
                <SearchIcon size={20} color="var(--white)" />
                {searchOpen && (
                  <input autoFocus value={query} onChange={e => setQuery(e.target.value)}
                    placeholder="Search articles..."
                    style={{ flex: 1, background: 'transparent', color: 'var(--white)', fontSize: 16, fontFamily: "'Clash Grotesk', sans-serif" }}
                    onBlur={() => { if (!query) setSearchOpen(false); }} />
                )}
              </motion.div>
            </div>
            <StaggerContainer className={layout.blogGrid}>
              {filtered.map(p => (
                <StaggerItem key={p.slug}><BlogCard title={p.title} slug={p.slug} date={p.date} excerpt={p.excerpt} /></StaggerItem>
              ))}
            </StaggerContainer>
          </SectionReveal>
        </div>
      </section>
      <Footer />
    </PageWrapper>
  );
}
