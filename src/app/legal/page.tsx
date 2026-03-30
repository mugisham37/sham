import { PageWrapper, SectionReveal } from '../../components/Animations';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

interface LegalPageProps { title: string; content: string; }

export default function LegalPage({ title, content }: LegalPageProps) {
  return (
    <PageWrapper>
      <Navigation />
      <section style={{ padding: '320px 20px 160px', maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <SectionReveal>
            <h1 className="h1b" style={{ marginBottom: 40 }}>{title}</h1>
            <div className="body-18" style={{ lineHeight: '1.8em', maxWidth: 800, whiteSpace: 'pre-line' }}>{content}</div>
          </SectionReveal>
        </div>
      </section>
      <Footer />
    </PageWrapper>
  );
}
