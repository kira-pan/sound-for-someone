import Link from "next/link";
import React from "react";

interface StickerLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function StickerLink({
  href,
  children,
  className = "",
  style,
}: StickerLinkProps) {
  return (
    <Link
      href={href}
      className={`
        inline-block
        bg-white
        border-2
        border-ink
        rounded-sm
        px-3
        py-2
        md:px-4
        md:py-3
        shadow-[4px_4px_0px_0px_rgba(21,21,21,0.15)]
        hover:shadow-[6px_6px_0px_0px_rgba(21,21,21,0.2)]
        active:shadow-[2px_2px_0px_0px_rgba(21,21,21,0.15)]
        transition-all
        cursor-pointer
        touch-manipulation
        hover:bg-[#bf6463]
        group
        ${className}
      `}
      style={style}
    >
      {children}
    </Link>
  );
}
