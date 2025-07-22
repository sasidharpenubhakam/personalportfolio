"use client";

import Image from "next/image";

interface TechIconProps {
  logoKey: string;
  alt: string;
  className?: string;
}

export default function TechIcon({ logoKey, alt, className = "" }: TechIconProps) {
  const fallbackUrl = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${logoKey}/${logoKey}-plain.svg`;

  return (
    <Image
      src={`/tech-icons/${logoKey}.svg`}
      alt={alt}
      width={40}
      height={40}
      className={`h-10 w-10 object-contain ${className}`}
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.onerror = null;
        target.src = fallbackUrl;
      }}
    />
  );
}
