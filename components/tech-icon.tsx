"use client";

import NextImage from "next/image"; // Renamed import
import { cn } from "@/lib/utils";

type Props = {
  name: string;
  className?: string;
};

export default function TechIcon({ name, className }: Props) {
  const fallbackUrl = `/tech-icons/${name.toLowerCase()}.svg`;

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
