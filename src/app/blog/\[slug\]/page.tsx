'use client';

import { PageWrapper, SectionReveal, HeroReveal, HeroItem, StaggerContainer, StaggerItem } from '../../../components/Animations';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import BlogCard from '../../../components/BlogCard';
import { blogPosts } from '../../../data/content';
import styles from '../BlogPost/BlogPost.module.css';

import { useParams } from 'next/navigation';

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug) || blogPosts[0];
  const morePosts = blogPosts.filter(p => p.slug !== slug).slice(0, 3);

  return (
    <PageWrapper>
      <Navigation />
      <section id="article-section" style={{ padding: '300px 20px 140px', maxWidth: 1280, margin: '0 auto' }}>
        <div className={styles.layout}>
          <div className={styles.main}>
            <HeroReveal style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <HeroItem><h1 className="h1b" style={{ maxWidth: 800 }}>{post.title}</h1></HeroItem>
              <HeroItem><p className="body-20" style={{ maxWidth: 800 }}>{post.excerpt}</p></HeroItem>
              <HeroItem style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span className="body-16">{post.date}</span>
                <span className="body-16">{post.readTime}</span>
              </HeroItem>
            </HeroReveal>
            <SectionReveal style={{ marginTop: 40 }}>
              <div style={{ width: '100%', aspectRatio: '1.721', borderRadius: 20, background: `hsl(${post.title.length * 25}, 25%, 35%)` }} />
            </SectionReveal>
            <SectionReveal style={{ marginTop: 60 }}>
              <p className="body-20" style={{ lineHeight: '1.6em' }}>{post.body || post.excerpt}</p>
            </SectionReveal>
          </div>
          <aside className={styles.sidebar}>
            <div className={styles.newsletter}>
              <h3 className="body-24-medium" style={{ color: 'var(--white)' }}>Join the newsletter</h3>
              <p className="body-16" style={{ color: 'var(--white)', opacity: 0.7 }}>Be the first to read our articles.</p>
              <input type="email" placeholder="Your email" className={styles.emailInput} />
              <button className={styles.submitBtn}>Submit</button>
            </div>
          </aside>
        </div>
      </section>
      <section style={{ padding: '0 20px 140px', maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <SectionReveal><h2 className="h2b" style={{ marginBottom: 40 }}>More Articles</h2></SectionReveal>
          <StaggerContainer className="blogGrid"}>
            {morePosts.map(p => (
              <StaggerItem key={p.slug}><BlogCard title={p.title} slug={p.slug} date={p.date} excerpt={p.excerpt} /></StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
      <Footer />
    </PageWrapper>
  );
}
