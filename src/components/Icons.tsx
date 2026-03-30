'use client';

import Image from 'next/image';

export const ArrowIcon = ({ size = 24, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 17L17 7M17 7H7M17 7V17" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ArrowDiagonal = ({ size = 30, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(-45deg)' }}>
    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const SearchIcon = ({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="9" cy="9" r="6" stroke={color} strokeWidth="1.5"/>
    <path d="M13.5 13.5L17 17" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const InstagramIcon = ({ size = 24, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5" stroke={color} strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="5" stroke={color} strokeWidth="1.5"/>
    <circle cx="17.5" cy="6.5" r="1" fill={color}/>
  </svg>
);

export const LinkedInIcon = ({ size = 24, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="3" stroke={color} strokeWidth="1.5"/>
    <path d="M7 10V17M7 7V7.01M11 17V13C11 11.3431 12.3431 10 14 10C15.6569 10 17 11.3431 17 13V17M11 10V17" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const XIcon = ({ size = 24, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 21L10.548 13.452M21 3L13.452 10.548M13.452 10.548L18 3H15L10.548 13.452M13.452 10.548L9 21H6L10.548 13.452" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const YouTubeIcon = ({ size = 24, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="4" width="20" height="16" rx="4" stroke={color} strokeWidth="1.5"/>
    <path d="M10 9L15 12L10 15V9Z" fill={color}/>
  </svg>
);

export const LogoSVG = () => (
  <Image src="https://framerusercontent.com/images/fWlUZU8DVjuUE4ECK8cUJE31g.svg" alt="Sham Studio" width={40} height={40} style={{ borderRadius: 8 }} />
);
