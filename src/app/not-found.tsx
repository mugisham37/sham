import { PageWrapper } from '../../components/Animations';
import Navigation from '../../components/Navigation';
import Button from '../../components/Button';

export default function NotFound() {
  return (
    <PageWrapper>
      <Navigation />
      <section style={{
        height: '100vh', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: 20, padding: '0 20px',
      }}>
        <h1 className="h1" style={{ textAlign: 'center' }}>Oops!</h1>
        <p className="body-16" style={{ textAlign: 'center' }}>We couldn&apos;t find the page you were looking for</p>
        <div style={{ marginTop: 20 }}>
          <Button text="Go Back" link="/" />
        </div>
      </section>
    </PageWrapper>
  );
}
