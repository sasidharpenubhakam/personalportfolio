"use client";

import { useState } from "react";
import { Code } from "lucide-react";
import Image from "next/image"; // ✅ Required for optimized images

interface TechIconProps {
  logoKey: string;
  name: string;
  className?: string;
}

export function TechIcon({ logoKey, name, className = "h-5 w-5" }: TechIconProps) {
  const [imageError, setImageError] = useState(false);

  const getIconUrl = () => {
    if (logoKey === "nextjs")
      return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg";
    if (logoKey === "tailwindcss")
      return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg";
    return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${logoKey}/${logoKey}-original.svg`;
  };

  const getFallbackUrl = () =>
    `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${logoKey}/${logoKey}-plain.svg`;

  if (imageError) {
    return (
      <div className={`${className} flex items-center justify-center bg-primary/10 text-primary rounded`}>
        <Code className="h-3 w-3" />
      </div>
    );
  }

  return (
    <div className={`${className} relative`} style={{ width: "1.5rem", height: "1.5rem" }}>
      <Image
        src={getIconUrl()}
        alt={`${name} logo`}
        fill
        sizes="32px"
        className="object-contain"
        onError={() => {
          // Try fallback once
          if (!imageError) {
            setImageError(true);
          }
        }}
      />
    </div>
  );
}
