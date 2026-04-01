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
        backgroundColor: "#F7F3EA",
        backgroundImage: `
          radial-gradient(ellipse 120% 70% at 50% -15%, rgba(191, 100, 99, 0.09), transparent 52%),
          radial-gradient(ellipse 90% 55% at 100% 105%, rgba(136, 149, 141, 0.14), transparent 48%),
          radial-gradient(ellipse 70% 45% at 0% 90%, rgba(252, 191, 183, 0.06), transparent 42%),
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
