import { PageWrapper, StaggerContainer, StaggerItem, HeroReveal, HeroItem } from '../../components/Animations';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import ProjectCard from '../../components/ProjectCard';
import { projects } from '../../data/content';
import layout from '../../styles/layout.module.css';

export default function Work() {
  return (
    <PageWrapper>
      <Navigation />
      <section id="hero-section" className={layout.heroSection}>
        <div className={layout.innerContainer}>
          <HeroReveal style={{ display: 'flex', flexDirection: 'column', gap: 60 }}>
            <HeroItem>
              <h1 className="h1b" style={{ maxWidth: 942 }}>A selection of our creative work</h1>
            </HeroItem>
            <HeroItem>
              <p className="body-20" style={{ maxWidth: 942 }}>
                Explore the identities, visuals, and direction we've crafted for clients across different industries. Every project reflects our focus on detail, storytelling, and meaningful brand expression.
              </p>
            </HeroItem>
          </HeroReveal>
          <StaggerContainer className={layout.projectGrid} style={{ marginTop: 60 }}>
            {projects.map(p => (
              <StaggerItem key={p.slug}><ProjectCard name={p.name} description={p.description} slug={p.slug} /></StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
      <Footer />
    </PageWrapper>
  );
}
