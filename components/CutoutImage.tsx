import Image from "next/image";
import React from "react";

interface CutoutImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function CutoutImage({
  src,
  alt,
  width,
  height,
  className = "",
  style,
}: CutoutImageProps) {
  return (
    <div
      className={`
        inline-block
        bg-white
        border-2
        border-ink
        p-1
        shadow-[4px_4px_0px_0px_rgba(21,21,21,0.15)]
        ${className}
      `}
      style={style}
    >
      <div style={{ background: 'transparent', pointerEvents: 'none' }}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="object-contain"
          style={{ pointerEvents: 'none' }}
        />
      </div>
    </div>
  );
}
