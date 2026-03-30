import { useState } from 'react';
import Link from 'next/link';
import CircleArrowButton from '../CircleArrowButton';

export default function CTAText() {
  const [hovered, setHovered] = useState(false);
  return (
    <Link href="/contact-us" style={{ textDecoration: 'none', color: 'var(--white)', display: 'inline-flex', flexDirection: 'column', gap: 10, alignItems: 'flex-start' }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 16 }}>
        <span style={{ font: "500 72px/1em 'Clash Grotesk', sans-serif", letterSpacing: '-0.02em' }}>Got a project?</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <span style={{ font: "500 72px/1em 'Clash Grotesk', sans-serif", letterSpacing: '-0.02em' }}>Lets talk.</span>
        <CircleArrowButton variant="white" active={hovered} />
      </div>
    </Link>
  );
}
