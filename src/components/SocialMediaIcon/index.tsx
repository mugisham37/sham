import { useState } from 'react';
import { motion } from 'framer-motion';
import { InstagramIcon, LinkedInIcon, XIcon, YouTubeIcon } from '../Icons';

const iconMap: Record<string, React.FC<{ size?: number; color?: string }>> = {
  instagram: InstagramIcon, linkedin: LinkedInIcon, x: XIcon, youtube: YouTubeIcon,
};

interface SocialMediaIconProps { platform: string; url: string; }

export default function SocialMediaIcon({ platform, url }: SocialMediaIconProps) {
  const [hovered, setHovered] = useState(false);
  const Icon = iconMap[platform];
  return (
    <motion.a href={url} target="_blank" rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      animate={{ backgroundColor: hovered ? 'var(--white)' : 'transparent' }}
      transition={{ duration: 0.3 }}
      style={{
        width: 50, height: 50, borderRadius: '50%', border: '1px solid var(--gray)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
      }}>
      {Icon && <Icon size={24} color={hovered ? 'var(--black-02)' : 'var(--white)'} />}
    </motion.a>
  );
}
