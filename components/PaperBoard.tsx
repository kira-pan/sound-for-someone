import React from "react";

interface PaperBoardProps {
  children: React.ReactNode;
  className?: string;
}

export default function PaperBoard({ children, className = "" }: PaperBoardProps) {
  return (
    <div
      className={`relative min-h-screen bg-paper p-4 md:p-12 lg:p-16 ${className}`}
      style={{
        backgroundImage: `
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(136, 149, 141, 0.03) 2px,
            rgba(136, 149, 141, 0.03) 4px
          )
        `,
      }}
    >
      {children}
    </div>
  );
}
