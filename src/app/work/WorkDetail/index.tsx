import { useParams } from 'react-router-dom';
import { PageWrapper, SectionReveal, HeroReveal, HeroItem, StaggerContainer, StaggerItem } from '../../components/Animations';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import ArrowButton from '../../components/ArrowButton';
import ProjectCard from '../../components/ProjectCard';
import { projects } from '../../data/content';
import layout from '../../styles/layout.module.css';
import styles from './WorkDetail.module.css';

export default function WorkDetail() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug) || projects[0];
  const otherProjects = projects.filter(p => p.slug !== slug).slice(0, 3);

  return (
    <PageWrapper>
      <Navigation />
      <section id="work-section" style={{ padding: '300px 20px 140px', maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <HeroReveal style={{ display: 'flex', flexDirection: 'column', gap: 120 }}>
            <HeroItem>
              <h1 className="h1b">{project.name}</h1>
            </HeroItem>
            <HeroItem className={styles.detailHero}>
              <div style={{ display: 'flex', gap: 20, alignItems: 'flex-end', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <span className="body-16">Category</span>
                  <span className="body-20">{project.category}</span>
                </div>
                <span className="body-20">/</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <span className="body-16">Year</span>
                  <span className="body-20">{project.year}</span>
                </div>
                <span className="body-20">/</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <span className="body-16">Duration</span>
                  <span className="body-20">{project.duration}</span>
                </div>
                <span className="body-20">/</span>
                <ArrowButton text="Live Link" link="#" size="sm" />
              </div>
              <p className="body-20" style={{ maxWidth: 456 }}>{project.fullDescription}</p>
            </HeroItem>
          </HeroReveal>

          <SectionReveal style={{ marginTop: 80 }}>
            <div style={{ width: '100%', aspectRatio: '1.765', borderRadius: 20, background: `hsl(${project.name.length * 40}, 25%, 35%)`, overflow: 'hidden' }} />
          </SectionReveal>
          <SectionReveal className={styles.imagePair} style={{ marginTop: 40 }}>
            <div style={{ flex: 1, aspectRatio: '1.766', borderRadius: 20, background: `hsl(${project.name.length * 40 + 30}, 20%, 40%)` }} />
            <div style={{ flex: 1, aspectRatio: '1.766', borderRadius: 20, background: `hsl(${project.name.length * 40 + 60}, 20%, 45%)` }} />
          </SectionReveal>
          <SectionReveal style={{ marginTop: 40 }}>
            <div style={{ width: '100%', aspectRatio: '1.766', borderRadius: 20, background: `hsl(${project.name.length * 40 + 90}, 20%, 38%)` }} />
          </SectionReveal>
        </div>
      </section>

      <section style={{ padding: '0 20px 140px', maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <SectionReveal><h2 className="h2b" style={{ marginBottom: 40 }}>More Projects</h2></SectionReveal>
          <StaggerContainer className={layout.projectGrid}>
            {otherProjects.map(p => (
              <StaggerItem key={p.slug}><ProjectCard name={p.name} description={p.description} slug={p.slug} /></StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
      <Footer />
    </PageWrapper>
  );
}
