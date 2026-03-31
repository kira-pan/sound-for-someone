"use client";

import PaperBoard from "@/components/PaperBoard";
import Link from "next/link";
import CutoutImage from "@/components/CutoutImage";
import { useState } from "react";

export default function About() {
  const [showAboutModal, setShowAboutModal] = useState(false);

  return (
    <PaperBoard>
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/" 
          className="inline-block mb-8 bg-white border-2 border-ink rounded-sm px-2 py-1.5 md:px-3 md:py-2 shadow-[4px_4px_0px_0px_rgba(21,21,21,0.15)] hover:shadow-[6px_6px_0px_0px_rgba(21,21,21,0.2)] active:shadow-[2px_2px_0px_0px_rgba(21,21,21,0.15)] transition-all cursor-pointer hover:bg-[#bf6463] group"
        >
          <span className="text-sm md:text-base font-bold text-ink group-hover:text-white transition-colors">← Back</span>
        </Link>
        
        <h1 className="text-5xl md:text-6xl font-bold text-ink mb-8" style={{ transform: 'rotate(-1deg)' }}>
          About
        </h1>

        <div className="space-y-6">
          <div className="bg-white border-2 border-ink p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(21,21,21,0.15)]">
            <p className="text-xl md:text-2xl text-ink leading-relaxed mb-4 font-handwriting">
              Hi! I&apos;m Kira, an undergraduate student at UC Berkeley passionate about data analytics,
              marketing, user experience, and human-centered design.
            </p>
            <p className="text-xl md:text-2xl text-ink leading-relaxed mb-4 font-handwriting">
              At Berkeley, I am involved with DataStory Consulting as Director of Marketing and Consultant, The Daily Californian as a Data Reporter, and a dancer with Danceworx.
            </p>
            <p className="text-xl md:text-2xl text-ink leading-relaxed font-handwriting">
              Outside of school, I love to do all things creative, including editing my website, journaling, collaging, drawing, and crocheting. I also enjoy dance, <a href="https://beliapp.co/app/kira0520" target="_blank" rel="noopener noreferrer" className="text-deep-olive hover:text-ink underline">trying new restaurants</a>, and traveling!
            </p>
            <div className="mt-3">
              <button
                onClick={() => setShowAboutModal(true)}
                className="text-sm text-olive-grey hover:text-ink underline font-handwriting"
              >
                Learn about this site.
              </button>
            </div>
          </div>
          
          {/* Image Gallery */}
          <div className="bg-white border-2 border-ink p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(21,21,21,0.15)]">
            <div className="flex items-center gap-4 overflow-x-auto pb-4">
              <CutoutImage
                src="/images/about_1.jpeg"
                alt="About photo"
                width={250}
                height={350}
                className="flex-shrink-0"
              />
              <CutoutImage
                src="/images/about_2.jpg"
                alt="About photo"
                width={250}
                height={350}
                className="flex-shrink-0"
              />
              <CutoutImage
                src="/images/about_3.jpeg"
                alt="About photo"
                width={250}
                height={350}
                className="flex-shrink-0"
              />
              <CutoutImage
                src="/images/about_4.jpg"
                alt="About photo"
                width={250}
                height={350}
                className="flex-shrink-0"
              />
              <CutoutImage
                src="/images/about_5.jpeg"
                alt="About photo"
                width={250}
                height={350}
                className="flex-shrink-0"
              />
              <CutoutImage
                src="/images/about_6.jpeg"
                alt="About photo"
                width={250}
                height={350}
                className="flex-shrink-0"
              />
              <CutoutImage
                src="/images/about_7.jpeg"
                alt="About photo"
                width={250}
                height={350}
                className="flex-shrink-0"
              />
              <CutoutImage
                src="/images/about_8.jpg"
                alt="About photo"
                width={250}
                height={350}
                className="flex-shrink-0"
              />
            </div>
          </div>
        </div>
      </div>

      {/* About This Site Modal */}
      {showAboutModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => setShowAboutModal(false)}
        >
          <div 
            className="bg-white border-2 border-ink p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(21,21,21,0.15)] max-w-md mx-4 relative"
            onClick={(e) => e.stopPropagation()}
            style={{ transform: 'rotate(-0.5deg)' }}
          >
            <button
              onClick={() => setShowAboutModal(false)}
              className="absolute top-2 right-2 text-ink hover:text-olive-grey text-2xl font-bold"
              aria-label="Close"
            >
              ×
            </button>
            <p className="text-lg md:text-xl text-ink leading-relaxed mb-4 font-handwriting">
              This site was designed and built by me using React, Next.js, and modern development tools, including AI-assisted workflows for iteration and debugging. This site also utilizes a custom font I created with my handwriting.
            </p>
            <p className="text-base text-olive-grey font-handwriting">
              The code for this website is available on my{" "}
              <a 
                href="https://github.com/kira-pan/kira-pan-personal-portfolio" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-deep-olive hover:text-ink underline"
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
