"use client";

import NextImage from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  logoKey: string; // ✅ FIXED: Now accepts logoKey
  name: string;
  className?: string;
};

export default function TechIcon({ logoKey, name, className }: Props) {
  const fallbackUrl = `/tech-icons/${logoKey.toLowerCase()}.svg`;

  return (
    <NextImage
      src={fallbackUrl}
      alt={name}
      width={40}
      height={40}
      className={cn("aspect-square h-10 w-10 object-contain", className)}
    />
  );
}
