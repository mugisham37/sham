import { PageWrapper, SectionReveal, HeroReveal, HeroItem, StaggerContainer, StaggerItem } from '@/components/Animations';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ArrowButton from '@/components/ArrowButton';
import ServiceCard from '@/components/ServiceCard';
import ProjectCard from '@/components/ProjectCard';
import Testimonials from '@/components/Testimonials';
import FAQCard from '@/components/FAQCard';
import Image from 'next/image';
import { services, projects, faqs } from '@/data/content';


export default function Home() {
  return (
    <PageWrapper>
      <Navigation />

      {/* HERO SECTION */}
      <section id="hero-section" className="hero">
        <div className="container">
          <HeroReveal className="heroContent" style={{ gap: 120 }}>
            <HeroItem className="labelTitle">
              <div className="brandLabel">
                <span className="body-16-labels">Brand</span>
                <span className="body-16-labels">Human</span>
              </div>
              <h1 className="heroTitle">
                Break Out<br />The Square Space
              </h1>
            </HeroItem>
            <HeroItem className="ctaDesc">
              <div className="ctaLeft">
                <ArrowButton text="Let&apos;s talk" link="/contact-us#hero-section" size="lg" />
                <div className="textAvatars">
                  <span className="body-16">You&apos;ll be talking with our creative members</span>
                  <div className="avatarStack">
                    {[
                      'https://framerusercontent.com/images/iBEokrSJotCkBeSmhm1BmAu4NA8.png',
                      'https://framerusercontent.com/images/iQxUJrF0Jwb9FacL4hVpXOesibI.png',
                      'https://framerusercontent.com/images/sh9tE8rbkd9SFv2k6LYMRQAVwyc.png',
                      'https://framerusercontent.com/images/9f0KLdtiET6iTZwnwkTN4JFwVbY.png',
                    ].map((src: string, i: number) => (
                      <Image key={i} src={src} alt="Team member" width={40} height={40} className="avatar" style={{ marginLeft: i > 0 ? -16 : 0, zIndex: 4 - i }} />
                    ))}
                  </div>
                </div>
              </div>
              <p className="body-20" style={{ maxWidth: 456 }}>
                Access a subscription-based creative team focused on brand identity and art direction. Work with specialists who refine every visual detail and help your brand communicate with clarity and style.
              </p>
            </HeroItem>
          </HeroReveal>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about-us" className="section">
        <SectionReveal className="container">
          <div className="aboutContent">
            <h2 className="h2">We craft brands that<br />speak clearly</h2>
            <p className="body-20" style={{ maxWidth: 500 }}>
              We&apos;re a creative studio specializing in brand identity and art direction. Our team brings clarity, character, and confidence to every brand we work with — from strategy to final deliverables.
            </p>
          </div>
        </SectionReveal>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="section">
        <div className="container">
          <SectionReveal><h2 className="h2" style={{ marginBottom: 40 }}>Services</h2></SectionReveal>
          <StaggerContainer>
            {services.map((s: typeof services[0]) => (
              <StaggerItem key={s.title}><ServiceCard title={s.title} labels={s.labels} /></StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* WORK SECTION */}
      <section className="section">
        <div className="container">
          <SectionReveal><h2 className="h2" style={{ marginBottom: 40 }}>Selected Work</h2></SectionReveal>
          <StaggerContainer className="projectGrid">
            {projects.slice(0, 6).map((p: typeof projects[0]) => (
              <StaggerItem key={p.slug}>
                <ProjectCard name={p.name} description={p.description} slug={p.slug} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <SectionReveal><Testimonials /></SectionReveal>
      </section>

      {/* PRICING */}
      <section id="pricing" className="section">
        <div className="container">
          <SectionReveal className="pricingContent">
            <h2 className="h2">Simple, transparent pricing</h2>
            <p className="body-20" style={{ maxWidth: 500, marginTop: 20 }}>
              Choose a plan that works for your needs. No hidden fees, no long-term contracts. Just great design, delivered consistently.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* FAQS */}
      <section className="section">
        <div className="container">
          <div className="faqLayout">
            <SectionReveal><h2 className="h2" style={{ maxWidth: 420 }}>Have Questions?</h2></SectionReveal>
            <StaggerContainer className="faqList">
              {faqs.map((f: typeof faqs[0], i: number) => (
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
