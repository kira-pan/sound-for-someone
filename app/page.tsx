"use client";

import PaperBoard from "@/components/PaperBoard";
import StickerLink from "@/components/StickerLink";
import Image from "next/image";
import CutoutImage from "@/components/CutoutImage";
import { useArduinoSerial } from "@/components/ArduinoSerialProvider";
import { useState } from "react";

interface ImagePosition {
  top: number;
  left: number;
  rotation: number;
}

const COLLAGE_POSITIONS: Record<string, ImagePosition> = {
  collage1: { top: 8, left: 10, rotation: -3.5 },
  collage2: { top: 10, left: 75, rotation: 2.8 },
  collage3: { top: 35, left: 8, rotation: -2.2 },
  charcoal1: { top: 55, left: 15, rotation: -1.8 },
  charcoal2: { top: 58, left: 78, rotation: 1.5 },
  recruitment1: { top: 32, left: 80, rotation: 2.2 },
  recruitment2: { top: 62, left: 50, rotation: -1.2 },
  recruitment3: { top: 20, left: 58, rotation: 2.5 },
  collage4: { top: 12, left: 65, rotation: -0.8 },
  venice1: { top: 25, left: 25, rotation: 1.8 },
};

function CollageImage({
  id,
  src,
  alt,
  width,
  height,
  className = "",
}: {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}) {
  const pos = COLLAGE_POSITIONS[id];
  if (!pos) return null;

  return (
    <div
      className="pointer-events-none absolute select-none"
      style={{
        top: `${pos.top}%`,
        left: `${pos.left}%`,
        transform: `rotate(${pos.rotation}deg)`,
        zIndex: pos.top < 50 ? 2 : 1,
        width: `${width}px`,
      }}
    >
      <CutoutImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
    </div>
  );
}

const COLLAGE_MIN_HEIGHT = "800px";

export default function Home() {
  const { sendCommand, isConnected } = useArduinoSerial();
  const [showAboutModal, setShowAboutModal] = useState(false);

  return (
    <PaperBoard>
      <div className="relative mb-6 flex flex-col items-center justify-center">
        <div className="inline-block" style={{ transform: "rotate(-1deg)" }}>
          <Image
            src="/images/magazine-kira.png"
            alt="Kira Pan"
            width={800}
            height={300}
            className="h-auto w-[800px]"
            style={{ background: "transparent" }}
          />
        </div>
      </div>

      <div
        className="marquee-container -mt-16 mb-6 w-screen py-1.5"
        style={{
          backgroundColor: "#bf6463",
          marginLeft: "calc(50% - 50vw)",
          marginRight: "calc(50% - 50vw)",
          width: "100vw",
        }}
      >
        <div className="marquee-content">
          <span className="whitespace-nowrap px-8 text-lg text-white">
            Data Analytics • Marketing • UI/UX • Design
          </span>
          <span className="whitespace-nowrap px-8 text-lg text-white">
            Data Analytics • Marketing • UI/UX • Design
          </span>
          <span className="whitespace-nowrap px-8 text-lg text-white">
            Data Analytics • Marketing • UI/UX • Design
          </span>
          <span className="whitespace-nowrap px-8 text-lg text-white">
            Data Analytics • Marketing • UI/UX • Design
          </span>
          <span className="whitespace-nowrap px-8 text-lg text-white">
            Data Analytics • Marketing • UI/UX • Design
          </span>
          <span className="whitespace-nowrap px-8 text-lg text-white">
            Data Analytics • Marketing • UI/UX • Design
          </span>
        </div>
      </div>

      <div
        className="relative mb-6 text-center"
        style={{ transform: "rotate(-0.5deg)" }}
      >
        <div className="mx-auto inline-block max-w-2xl border-2 border-ink bg-white p-8 shadow-[4px_4px_0px_0px_rgba(21,21,21,0.15)]">
          <p className="mb-4 font-handwriting text-3xl leading-relaxed text-ink">
            Hi! I&apos;m Kira, and I am currently an undergraduate student at UC
            Berkeley. I am pursuing my B.A. in Cognitive Science, a data science
            minor and my Berkeley Certificate in Design Innovation. Welcome to
            my website!
          </p>
        </div>
      </div>

      <div className="-mt-3 mb-0 text-center select-none pointer-events-none">
        <p
          className="inline-block font-handwriting text-lg text-olive-grey"
          style={{
            transform: "rotate(-0.3deg)",
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          Use the stickers around my photo to explore the site.
        </p>
      </div>

      <div
        className="relative -mt-24 flex items-center justify-center overflow-hidden"
        style={{
          width: "100vw",
          minHeight: COLLAGE_MIN_HEIGHT,
          marginLeft: "calc(50% - 50vw)",
          marginRight: "calc(50% - 50vw)",
        }}
      >
        <div
          className="relative z-10 pointer-events-none select-none"
          style={{ transform: "rotate(-2deg)", userSelect: "none" }}
        >
          <Image
            src="/images/kira-tranparent.png"
            alt="Kira Pan"
            width={480}
            height={600}
            className="w-[480px] pointer-events-none"
            style={{
              background: "transparent",
              userSelect: "none",
              pointerEvents: "none",
            }}
            draggable={false}
          />
        </div>

        <CollageImage
          id="collage1"
          src="/images/IMG_3848.jpeg"
          alt="Collage artwork"
          width={220}
          height={275}
        />
        <CollageImage
          id="collage2"
          src="/images/IMG_3849.jpeg"
          alt="Collage artwork"
          width={200}
          height={250}
        />
        <CollageImage
          id="collage3"
          src="/images/IMG_3850.jpeg"
          alt="Collage artwork"
          width={240}
          height={300}
        />
        <CollageImage
          id="charcoal1"
          src="/images/IMG_2955.jpeg"
          alt="Charcoal drawing"
          width={210}
          height={265}
        />
        <CollageImage
          id="charcoal2"
          src="/images/IMG_3879.jpg"
          alt="Charcoal drawing"
          width={200}
          height={245}
        />
        <CollageImage
          id="recruitment1"
          src="/images/IMG_2640.jpeg"
          alt="Charcoal drawing"
          width={190}
          height={235}
        />
        <CollageImage
          id="recruitment2"
          src="/images/2.png"
          alt="Recruitment design"
          width={175}
          height={220}
        />
        <CollageImage
          id="recruitment3"
          src="/images/front.png"
          alt="Recruitment design"
          width={205}
          height={260}
        />
        <CollageImage
          id="collage4"
          src="/images/74339640290__E21A547C-56D4-4CBC-B45C-FF0DA2A6E8B3.jpeg"
          alt="Collage artwork"
          width={160}
          height={200}
        />
        <CollageImage
          id="venice1"
          src="/images/venice_drawing.jpeg"
          alt="Venice pen & ink drawing"
          width={200}
          height={250}
        />

        <div
          className="button-hover-tilt absolute pointer-events-auto"
          style={{
            top: "35%",
            left: "35%",
            transform: "translate(-50%, -50%) rotate(-3deg)",
            zIndex: 20,
          }}
        >
          <StickerLink href="/portfolio">
            <span className="text-3xl font-bold text-ink transition-colors group-hover:text-white">
              Portfolio
            </span>
          </StickerLink>
        </div>

        <div
          className="button-hover-tilt-right absolute pointer-events-auto"
          style={{
            top: "35%",
            right: "35%",
            transform: "translate(50%, -50%) rotate(2.5deg)",
            zIndex: 20,
          }}
        >
          <StickerLink href="/projects">
            <span className="text-3xl font-bold text-ink transition-colors group-hover:text-white">
              Projects
            </span>
          </StickerLink>
        </div>

        <div
          className="button-hover-tilt-left-pub absolute pointer-events-auto"
          style={{
            top: "50%",
            left: "35%",
            transform: "translate(-50%, -50%) rotate(-1.5deg)",
            zIndex: 20,
          }}
        >
          <StickerLink href="/publications">
            <span className="text-2xl font-bold text-ink transition-colors group-hover:text-white">
              Publications
            </span>
          </StickerLink>
        </div>

        <div
          className="button-hover-tilt-bottom-left absolute pointer-events-auto"
          style={{
            bottom: "35%",
            left: "35%",
            transform: "translate(-50%, 50%) rotate(-2.5deg)",
            zIndex: 20,
          }}
        >
          <a
            href="/KiraPan-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              if (isConnected) void sendCommand("RESUME");
            }}
            className="group inline-block cursor-pointer border-2 border-ink bg-white px-4 py-3 shadow-[4px_4px_0px_0px_rgba(21,21,21,0.15)] transition-all hover:bg-[#bf6463] hover:shadow-[6px_6px_0px_0px_rgba(21,21,21,0.2)] active:shadow-[2px_2px_0px_0px_rgba(21,21,21,0.15)]"
          >
            <span className="text-3xl font-bold text-ink transition-colors group-hover:text-white">
              Resume
            </span>
          </a>
        </div>

        <div
          className="button-hover-tilt-right-about absolute pointer-events-auto"
          style={{
            top: "50%",
            right: "35%",
            transform: "translate(50%, -50%) rotate(1.8deg)",
            zIndex: 20,
          }}
        >
          <StickerLink href="/about">
            <span className="text-2xl font-bold text-ink transition-colors group-hover:text-white">
              About
            </span>
          </StickerLink>
        </div>

        <div
          className="button-hover-tilt-bottom-right absolute pointer-events-auto"
          style={{
            bottom: "35%",
            right: "35%",
            transform: "translate(50%, 50%) rotate(-1deg)",
            zIndex: 20,
          }}
        >
          <StickerLink href="/contact">
            <span className="text-xl font-bold text-ink transition-colors group-hover:text-white">
              Contact
            </span>
          </StickerLink>
        </div>
      </div>

      <footer className="mt-16 border-t-2 border-ink/20 py-8">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center justify-center gap-8">
            <a
              href="https://www.linkedin.com/in/kira-z-pan"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
              aria-label="LinkedIn"
            >
              <Image
                src="/images/linkedin.png"
                alt="LinkedIn"
                width={60}
                height={60}
                className="h-16 w-16"
              />
            </a>
            <a
              href="https://github.com/kira-pan"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80"
              aria-label="GitHub"
            >
              <Image
                src="/images/github.png"
                alt="GitHub"
                width={60}
                height={60}
                className="h-16 w-16"
              />
            </a>
          </div>
          <p className="text-center text-sm text-olive-grey">
            © 2026{" "}
            <span className="font-handwriting text-base">Kira Pan</span> ·{" "}
            <button
              type="button"
              onClick={() => setShowAboutModal(true)}
              className="font-handwriting text-base underline hover:text-ink"
            >
              About this site
            </button>
          </p>
        </div>
      </footer>

      {showAboutModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => setShowAboutModal(false)}
        >
          <div
            className="relative mx-4 max-w-md border-2 border-ink bg-white p-8 shadow-[4px_4px_0px_0px_rgba(21,21,21,0.15)]"
            onClick={(e) => e.stopPropagation()}
            style={{ transform: "rotate(-0.5deg)" }}
          >
            <button
              type="button"
              onClick={() => setShowAboutModal(false)}
              className="absolute top-2 right-2 text-2xl font-bold text-ink hover:text-olive-grey"
              aria-label="Close"
            >
              ×
            </button>
            <p className="mb-4 font-handwriting text-xl leading-relaxed text-ink">
              This site was designed and built by me using React, Next.js, and
              modern development tools, including AI-assisted workflows for
              iteration and debugging. This site also utilizes a custom font I
              created with my handwriting.
            </p>
            <p className="font-handwriting text-base text-olive-grey">
              The code for this website is available on my{" "}
              <a
                href="https://github.com/kira-pan/kira-pan-personal-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-deep-olive underline hover:text-ink"
              >
                Github
              </a>
              .
            </p>
          </div>
        </div>
      )}
    </PaperBoard>
  );
}
