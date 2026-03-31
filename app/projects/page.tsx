"use client";

import PaperBoard from "@/components/PaperBoard";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Projects() {
  const [currentImage, setCurrentImage] = useState(1);
  const totalImages = 22;
  const [currentTemplateImage, setCurrentTemplateImage] = useState(1);
  const totalTemplateImages = 22;
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const checkWidth = () => {
      setWindowWidth(window.innerWidth);
    };
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  // Calculate responsive container height that reduces on smaller screens
  const getSlideshowHeight = () => {
    if (windowWidth === 0) return '400px';
    if (windowWidth >= 768) return '400px';
    if (windowWidth <= 375) return '250px'; // Shorter on very small screens
    if (windowWidth <= 640) return '280px'; // Shorter on mobile
    // Smooth transition between 640px and 768px
    const ratio = (windowWidth - 640) / (768 - 640);
    const height = 280 + (400 - 280) * ratio;
    return `${height}px`;
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev >= totalImages ? 1 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev <= 1 ? totalImages : prev - 1));
  };

  const jumpToSlide = (slideNumber: number) => {
    setCurrentImage(slideNumber);
  };

  const nextTemplateImage = () => {
    setCurrentTemplateImage((prev) => (prev >= totalTemplateImages ? 1 : prev + 1));
  };

  const prevTemplateImage = () => {
    setCurrentTemplateImage((prev) => (prev <= 1 ? totalTemplateImages : prev - 1));
  };

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
          Projects
        </h1>

        <div className="space-y-8">
          <div className="bg-white border-2 border-ink p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(21,21,21,0.15)]">
            <h2 className="text-3xl font-bold text-ink mb-4">Predictive Patent Application Dashboard</h2>
            <p className="text-lg text-ink leading-relaxed mb-4">
              This project is an interactive Streamlit dashboard developed with my partner as part of a project 
              examining how USPTO Office Actions influence the likelihood that a patent application receives an 
              allowance. I utilized machine learning techniques and Streamlit to build the final front-end dashboard.
            </p>
            <p className="text-base text-olive-grey mb-6">
              See video demo of our Streamlit interface on <button onClick={() => jumpToSlide(21)} className="text-deep-olive hover:text-ink underline cursor-pointer">slide 21</button>. The code is available on my <a href="https://github.com/kira-pan/predictive-patent-dashboard" target="_blank" rel="noopener noreferrer" className="text-deep-olive hover:text-ink underline">Github</a> as well.
            </p>
            
            {/* Image Carousel */}
            <div className="relative w-full max-w-3xl mx-auto">
              <div className="relative w-full bg-paper flex items-center justify-center overflow-hidden transition-all duration-300" style={{ height: getSlideshowHeight() }}>
                {currentImage === 21 ? (
                  <video
                    src="/images/jcp-demo.mov"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-contain max-w-full max-h-full"
                  />
                ) : (
                  <Image
                    src={`/images/jcp_${currentImage}.png`}
                    alt={`Dashboard screenshot ${currentImage}`}
                    width={1200}
                    height={800}
                    className="object-contain max-w-full max-h-full"
                  />
                )}
              </div>
              
              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white border-2 border-ink px-3 py-2 shadow-[4px_4px_0px_0px_rgba(21,21,21,0.15)] hover:shadow-[6px_6px_0px_0px_rgba(21,21,21,0.2)] transition-shadow"
                aria-label="Previous image"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ink">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white border-2 border-ink px-3 py-2 shadow-[4px_4px_0px_0px_rgba(21,21,21,0.15)] hover:shadow-[6px_6px_0px_0px_rgba(21,21,21,0.2)] transition-shadow"
                aria-label="Next image"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ink">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              
              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white border-2 border-ink px-3 py-1 shadow-[4px_4px_0px_0px_rgba(21,21,21,0.15)]">
                <span className="text-sm font-bold text-ink">{currentImage} / {totalImages}</span>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-ink p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(21,21,21,0.15)]">
            <h2 className="text-3xl font-bold text-ink mb-4">
              Uncertain Foot<em>notes</em>
            </h2>
            <p className="text-lg text-ink leading-relaxed mb-4">
              An interactive sentence generator where you build syntactically valid English sentences from scanned word-cutout images. Click any phrase to swap it within the same grammatical slot, or hit Regenerate for a brand new structure—each iteration follows phrase-structure rules from my linguistics coursework (e.g. S → NP VP), with part-of-speech “footnote” sounds that change by category.
            </p>
            <p className="text-base text-olive-grey mb-6">
              Test it yourself <a href="https://kira-pan.github.io/uncertain-footnotes/" target="_blank" rel="noopener noreferrer" className="text-deep-olive hover:text-ink underline">here</a>, or read my <a href="/images/Kira%20Pan%20-%20_Uncertain%20Footnotes_%20Documentation.pdf" target="_blank" rel="noopener noreferrer" className="text-deep-olive hover:text-ink underline">documentation</a> and code on <a href="https://github.com/kira-pan/uncertain-footnotes" target="_blank" rel="noopener noreferrer" className="text-deep-olive hover:text-ink underline">Github</a>.
            </p>

            <div className="relative w-full max-w-3xl mx-auto">
              <div
                className="relative w-full bg-paper flex items-center justify-center overflow-hidden transition-all duration-300"
                style={{ height: getSlideshowHeight() }}
              >
                <video
                  src="/images/KiraPan_UncertainFootnotes_Demo.mov"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="object-contain max-w-full max-h-full"
                />
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-ink p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(21,21,21,0.15)]">
            <h2 className="text-3xl font-bold text-ink mb-4">DataStory Slideshow Template</h2>
            <p className="text-lg text-ink leading-relaxed mb-4">
              Slideshow template designed from scratch for our consulting organization to utilize for general meetings and when presenting our final deliverables to clients.
            </p>
            
            {/* Image Carousel */}
            <div className="relative w-full max-w-3xl mx-auto">
              <div className="relative w-full bg-paper flex items-center justify-center overflow-hidden transition-all duration-300" style={{ height: getSlideshowHeight() }}>
                <Image
                  src={`/images/spring-slideshow-template/${currentTemplateImage}-template.png`}
                  alt={`Template slide ${currentTemplateImage}`}
                  width={1200}
                  height={800}
                  className="object-contain max-w-full max-h-full"
                />
              </div>
              
              {/* Navigation Buttons */}
              <button
                onClick={prevTemplateImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white border-2 border-ink px-3 py-2 shadow-[4px_4px_0px_0px_rgba(21,21,21,0.15)] hover:shadow-[6px_6px_0px_0px_rgba(21,21,21,0.2)] transition-shadow"
                aria-label="Previous image"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ink">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextTemplateImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white border-2 border-ink px-3 py-2 shadow-[4px_4px_0px_0px_rgba(21,21,21,0.15)] hover:shadow-[6px_6px_0px_0px_rgba(21,21,21,0.2)] transition-shadow"
                aria-label="Next image"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ink">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              
              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white border-2 border-ink px-3 py-1 shadow-[4px_4px_0px_0px_rgba(21,21,21,0.15)]">
                <span className="text-sm font-bold text-ink">{currentTemplateImage} / {totalTemplateImages}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PaperBoard>
  );
}
