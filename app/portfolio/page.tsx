"use client";

import PaperBoard from "@/components/PaperBoard";
import Link from "next/link";
import CutoutImage from "@/components/CutoutImage";
import Image from "next/image";
import { useState, useEffect, useCallback, useMemo } from "react";

const BIRD_CALLING_POSTER = "/images/KiraPan_Bird_Calling_Poster.jpg";
const DATASTORY_FEED = "/images/recruitment/datastory feed.PNG";

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
    width: number;
    height: number;
    isVideo?: boolean;
  } | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCloseModal = useCallback(() => {
    setSelectedImage(null);
    setIsFlipped(false);
  }, []);

  const handleFlip = useCallback(() => {
    setIsFlipped(prev => !prev);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleCloseModal();
      }
    };
    if (selectedImage) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setIsFlipped(false);
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage, handleCloseModal]);

  const isFlipCard = useMemo(() => {
    return selectedImage?.src === BIRD_CALLING_POSTER;
  }, [selectedImage?.src]);

  const isDatastoryFeed = useMemo(() => {
    return selectedImage?.src === DATASTORY_FEED;
  }, [selectedImage?.src]);
  return (
    <>
    <PaperBoard>
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/" 
          className="inline-block mb-8 bg-white border-2 border-ink rounded-sm px-2 py-1.5 md:px-3 md:py-2 shadow-[4px_4px_0px_0px_rgba(21,21,21,0.15)] hover:shadow-[6px_6px_0px_0px_rgba(21,21,21,0.2)] active:shadow-[2px_2px_0px_0px_rgba(21,21,21,0.15)] transition-all cursor-pointer hover:bg-[#bf6463] group"
        >
          <span className="text-sm md:text-base font-bold text-ink group-hover:text-white transition-colors">← Back</span>
        </Link>
        
        <h1 className="text-5xl md:text-6xl font-bold text-ink mb-8" style={{ transform: 'rotate(-1deg)' }}>
          Portfolio
        </h1>

        <div className="space-y-12">
          <section>
            <div className="inline-block mb-4" style={{ transform: 'rotate(-1deg)' }}>
              <div className="bg-white border-2 border-ink px-4 py-2 shadow-[4px_4px_0px_0px_rgba(21,21,21,0.15)]">
                <h2 className="text-2xl md:text-3xl font-bold text-ink">DataStory: Marketing Content</h2>
              </div>
            </div>
            <div className="flex items-center gap-4 overflow-x-auto pb-4 mb-6">
              <a 
                href="https://www.datastoryberkeley.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-shrink-0 relative group cursor-pointer"
              >
                <CutoutImage
                  src="/images/datastory-website-thumbnail.png"
                  alt="DataStory website"
                  width={250}
                  height={350}
                  className=""
                />
                <div className="absolute inset-0 bg-[#bf6463]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-xl md:text-2xl font-bold">Visit Our Website</span>
                </div>
              </a>
              <div 
                className="flex-shrink-0 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage({ src: "/images/recruitment/datastory feed.PNG", alt: "DataStory feed", width: 250, height: 350 });
                  setIsFlipped(false);
                }}
              >
                <div className="bg-white border-2 border-ink p-1 shadow-[4px_4px_0px_0px_rgba(21,21,21,0.15)] flex items-center justify-center" style={{ height: '350px', minWidth: 'fit-content' }}>
                  <Image
                    src="/images/recruitment/datastory feed.PNG"
                    alt="DataStory feed"
                    width={250}
                    height={350}
                    className="object-contain"
                    style={{ maxHeight: 'calc(350px - 8px)', width: 'auto', height: 'auto' }}
                  />
                </div>
              </div>
              <div 
                className="flex-shrink-0 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage({ src: "/images/recruitment/coffee chat story.MP4", alt: "Coffee chat story", width: 250, height: 350, isVideo: true });
                  setIsFlipped(false);
                }}
              >
                <div className="bg-white border-2 border-ink p-2 shadow-[4px_4px_0px_0px_rgba(21,21,21,0.15)]">
                  <video
                    src="/images/recruitment/coffee chat story.MP4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="none"
                    className="h-[350px] w-auto object-contain"
                  />
                </div>
              </div>
              <div 
                className="flex-shrink-0 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage({ src: "/images/Recruitment-Timeline.mp4", alt: "Recruitment Timeline", width: 250, height: 350, isVideo: true });
                  setIsFlipped(false);
                }}
              >
                <div className="bg-white border-2 border-ink p-2 shadow-[4px_4px_0px_0px_rgba(21,21,21,0.15)]">
                  <video
                    src="/images/Recruitment-Timeline.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="none"
                    className="h-[350px] w-auto object-contain"
                  />
                </div>
              </div>
              <div 
                className="flex-shrink-0 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage({ src: "/images/recruitment/1.png", alt: "Recruitment design 1", width: 250, height: 350 });
                  setIsFlipped(false);
                }}
              >
                <CutoutImage
                  src="/images/recruitment/1.png"
                  alt="Recruitment design 1"
                  width={250}
                  height={350}
                  className=""
                />
              </div>
              <div 
                className="flex-shrink-0 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage({ src: "/images/recruitment/2.png", alt: "Recruitment design 2", width: 250, height: 350 });
                  setIsFlipped(false);
                }}
              >
                <CutoutImage
                  src="/images/recruitment/2.png"
                  alt="Recruitment design 2"
                  width={250}
                  height={350}
                  className=""
                />
              </div>
              <div 
                className="flex-shrink-0 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage({ src: "/images/recruitment/front.png", alt: "Recruitment design front", width: 250, height: 350 });
                  setIsFlipped(false);
                }}
              >
                <CutoutImage
                  src="/images/recruitment/front.png"
                  alt="Recruitment design front"
                  width={250}
                  height={350}
                  className=""
                />
              </div>
              <div 
                className="flex-shrink-0 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage({ src: "/images/recruitment/back.png", alt: "Recruitment design back", width: 250, height: 350 });
                  setIsFlipped(false);
                }}
              >
                <CutoutImage
                  src="/images/recruitment/back.png"
                  alt="Recruitment design back"
                  width={250}
                  height={350}
                  className=""
                />
              </div>
            </div>
          </section>

          <section>
            <div className="inline-block mb-4" style={{ transform: 'rotate(-0.5deg)' }}>
              <div className="bg-white border-2 border-ink px-4 py-2 shadow-[4px_4px_0px_0px_rgba(21,21,21,0.15)]">
                <h2 className="text-2xl md:text-3xl font-bold text-ink">Digital Art</h2>
              </div>
            </div>
            <div className="flex items-center gap-4 overflow-x-auto pb-4 mb-6">
              <div 
                className="flex-shrink-0 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage({ src: "/images/KiraPan_Bird_Calling_Poster.jpg", alt: "Bird Calling digital art poster", width: 250, height: 350 });
                  setIsFlipped(false);
                }}
              >
                <CutoutImage
                  src="/images/KiraPan_Bird_Calling_Poster.jpg"
                  alt="Bird Calling digital art poster"
                  width={250}
                  height={350}
                  className=""
                />
              </div>
              <div 
                className="flex-shrink-0 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage({ src: "/images/cssa-sticker.png", alt: "CSSA sticker", width: 300, height: 300 });
                  setIsFlipped(false);
                }}
                style={{ filter: 'drop-shadow(1px 1px 0px #151515) drop-shadow(-1px -1px 0px #151515) drop-shadow(1px -1px 0px #151515) drop-shadow(-1px 1px 0px #151515) drop-shadow(4px 4px 0px rgba(21,21,21,0.15))' }}
              >
                <Image
                  src="/images/cssa-sticker.png"
                  alt="CSSA sticker"
                  width={300}
                  height={300}
                  className="object-contain"
                  style={{ background: 'transparent' }}
                />
              </div>
              <div 
                className="flex-shrink-0 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage({ src: "/images/roxie-sticker.png", alt: "Roxie sticker", width: 300, height: 300 });
                  setIsFlipped(false);
                }}
                style={{ filter: 'drop-shadow(1px 1px 0px #151515) drop-shadow(-1px -1px 0px #151515) drop-shadow(1px -1px 0px #151515) drop-shadow(-1px 1px 0px #151515) drop-shadow(4px 4px 0px rgba(21,21,21,0.15))' }}
              >
                <Image
                  src="/images/roxie-sticker.png"
                  alt="Roxie sticker"
                  width={300}
                  height={300}
                  className="object-contain"
                  style={{ background: 'transparent' }}
                />
              </div>
            </div>
          </section>

          <section>
            <div className="inline-block mb-4" style={{ transform: 'rotate(1deg)' }}>
              <div className="bg-white border-2 border-ink px-4 py-2 shadow-[4px_4px_0px_0px_rgba(21,21,21,0.15)]">
                <h2 className="text-2xl md:text-3xl font-bold text-ink">Charcoal Drawings</h2>
              </div>
            </div>
            <div className="flex items-center gap-4 overflow-x-auto pb-4 mb-6">
              <div 
                className="flex-shrink-0 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage({ src: "/images/IMG_2955.jpeg", alt: "Charcoal drawing", width: 250, height: 350 });
                  setIsFlipped(false);
                }}
              >
                <CutoutImage
                  src="/images/IMG_2955.jpeg"
                  alt="Charcoal drawing"
                  width={250}
                  height={350}
                  className=""
                />
              </div>
              <div 
                className="flex-shrink-0 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage({ src: "/images/IMG_3879.jpg", alt: "Charcoal drawing", width: 250, height: 350 });
                  setIsFlipped(false);
                }}
              >
                <CutoutImage
                  src="/images/IMG_3879.jpg"
                  alt="Charcoal drawing"
                  width={250}
                  height={350}
                  className=""
                />
              </div>
              <div 
                className="flex-shrink-0 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage({ src: "/images/IMG_2640.jpeg", alt: "Charcoal drawing", width: 250, height: 350 });
                  setIsFlipped(false);
                }}
              >
                <CutoutImage
                  src="/images/IMG_2640.jpeg"
                  alt="Charcoal drawing"
                  width={250}
                  height={350}
                  className=""
                />
              </div>
            </div>
          </section>

          <section>
            <div className="inline-block mb-4" style={{ transform: 'rotate(-1.5deg)' }}>
              <div className="bg-white border-2 border-ink px-4 py-2 shadow-[4px_4px_0px_0px_rgba(21,21,21,0.15)]">
                <h2 className="text-2xl md:text-3xl font-bold text-ink">Pen & Ink Drawings</h2>
              </div>
            </div>
            <div className="flex items-center gap-4 overflow-x-auto pb-4 mb-6">
              <div 
                className="flex-shrink-0 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage({ src: "/images/london_postcard.jpg", alt: "London postcard pen & ink drawing", width: 250, height: 350 });
                  setIsFlipped(false);
                }}
              >
                <CutoutImage
                  src="/images/london_postcard.jpg"
                  alt="London postcard pen & ink drawing"
                  width={250}
                  height={350}
                  className=""
                />
              </div>
              <div 
                className="flex-shrink-0 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage({ src: "/images/venice_drawing.jpeg", alt: "Venice pen & ink drawing", width: 250, height: 350 });
                  setIsFlipped(false);
                }}
              >
                <CutoutImage
                  src="/images/venice_drawing.jpeg"
                  alt="Venice pen & ink drawing"
                  width={250}
                  height={350}
                  className=""
                />
              </div>
              <div 
                className="flex-shrink-0 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage({ src: "/images/KiraPan_Lineart.jpeg", alt: "Line art pen & ink drawing", width: 250, height: 350 });
                  setIsFlipped(false);
                }}
              >
                <CutoutImage
                  src="/images/KiraPan_Lineart.jpeg"
                  alt="Line art pen & ink drawing"
                  width={250}
                  height={350}
                  className=""
                />
              </div>
            </div>
          </section>

          <section>
            <div className="inline-block mb-4" style={{ transform: 'rotate(1.5deg)' }}>
              <div className="bg-white border-2 border-ink px-4 py-2 shadow-[4px_4px_0px_0px_rgba(21,21,21,0.15)]">
                <h2 className="text-2xl md:text-3xl font-bold text-ink">Recycled Material Collage</h2>
              </div>
            </div>
            <div className="flex items-center gap-4 overflow-x-auto pb-4 mb-6">
              <div 
                className="flex-shrink-0 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage({ src: "/images/IMG_3848.jpeg", alt: "Recycled material collage", width: 250, height: 350 });
                  setIsFlipped(false);
                }}
              >
                <CutoutImage
                  src="/images/IMG_3848.jpeg"
                  alt="Recycled material collage"
                  width={250}
                  height={350}
                  className=""
                />
              </div>
              <div 
                className="flex-shrink-0 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage({ src: "/images/IMG_3849.jpeg", alt: "Recycled material collage", width: 250, height: 350 });
                  setIsFlipped(false);
                }}
              >
                <CutoutImage
                  src="/images/IMG_3849.jpeg"
                  alt="Recycled material collage"
                  width={250}
                  height={350}
                  className=""
                />
              </div>
              <div 
                className="flex-shrink-0 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage({ src: "/images/IMG_3850.jpeg", alt: "Recycled material collage", width: 250, height: 350 });
                  setIsFlipped(false);
                }}
              >
                <CutoutImage
                  src="/images/IMG_3850.jpeg"
                  alt="Recycled material collage"
                  width={250}
                  height={350}
                  className=""
                />
              </div>
              <div 
                className="flex-shrink-0 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage({ src: "/images/74339640290__E21A547C-56D4-4CBC-B45C-FF0DA2A6E8B3.jpeg", alt: "Recycled material collage", width: 250, height: 350 });
                  setIsFlipped(false);
                }}
              >
                <CutoutImage
                  src="/images/74339640290__E21A547C-56D4-4CBC-B45C-FF0DA2A6E8B3.jpeg"
                  alt="Recycled material collage"
                  width={250}
                  height={350}
                  className=""
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </PaperBoard>

    {/* Image Modal/Lightbox - rendered outside PaperBoard */}
    {selectedImage && (
      <div 
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        onClick={() => {
          setSelectedImage(null);
          setIsFlipped(false);
        }}
        style={{ 
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          animation: 'fadeIn 0.2s ease-out'
        }}
      >
        <div 
          className="relative"
          style={{ 
            maxWidth: '90vw',
            maxHeight: '90vh',
            perspective: '2000px'
          }}
        >
          {/* Check if this is the Bird Calling poster with flip card */}
          {isFlipCard ? (
            <div 
              className="modal-content relative"
              style={{
                transformStyle: 'preserve-3d'
              }}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                  setIsFlipped(false);
                }}
                className="absolute -top-2 -right-2 bg-white border-2 border-ink rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(21,21,21,0.15)] hover:bg-[#bf6463] hover:text-white transition-colors text-ink font-bold text-lg md:text-xl z-10"
                aria-label="Close"
              >
                ×
              </button>
              <div 
                className="flip-card"
                style={{
                  width: `${selectedImage.width}px`,
                  height: `${selectedImage.height}px`,
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.6s',
                  transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  cursor: 'pointer',
                  position: 'relative'
                }}
              >
              {/* Front of card */}
              <div 
                className="flip-card-front"
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  top: 0,
                  left: 0,
                  cursor: 'pointer',
                  pointerEvents: 'auto',
                  zIndex: isFlipped ? 0 : 1
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFlipped(!isFlipped);
                }}
              >
                <div style={{ pointerEvents: 'none' }}>
                  <CutoutImage
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    width={selectedImage.width}
                    height={selectedImage.height}
                    className=""
                  />
                </div>
              </div>
              {/* Back of card */}
              <div 
                className="flip-card-back"
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                  top: 0,
                  left: 0,
                  cursor: 'pointer',
                  pointerEvents: 'auto',
                  zIndex: isFlipped ? 1 : 0
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFlipped(!isFlipped);
                }}
              >
                <div className="border-2 border-ink p-4 md:p-6 shadow-[4px_4px_0px_0px_rgba(21,21,21,0.15)] h-full flex flex-col items-center justify-center" style={{ width: `${selectedImage.width}px`, height: `${selectedImage.height}px`, backgroundColor: '#bf6463' }}>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3 text-center">Bird Calling Contest Poster</h3>
                  <p className="text-sm md:text-base text-white text-center max-w-md">
                    Commissioned poster design for community's 55th annual bird calling contest.
                  </p>
                </div>
              </div>
              </div>
            </div>
          ) : (
            <div 
              className={`cursor-pointer relative ${isDatastoryFeed ? '' : 'modal-content'}`}
              onClick={(e) => e.stopPropagation()}
              style={isDatastoryFeed ? { transform: 'scale(1.2)', animation: 'zoomIn 0.2s ease-out forwards' } : {}}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleCloseModal();
                }}
                className="absolute -top-2 -right-2 bg-white border-2 border-ink rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(21,21,21,0.15)] hover:bg-[#bf6463] hover:text-white transition-colors text-ink font-bold text-lg md:text-xl z-10"
                aria-label="Close"
              >
                ×
              </button>
              {selectedImage.isVideo ? (
                <div className="bg-white border-2 border-ink p-2 shadow-[4px_4px_0px_0px_rgba(21,21,21,0.15)]">
                  <video
                    src={selectedImage.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="h-[350px] w-auto object-contain"
                  />
                </div>
              ) : isDatastoryFeed ? (
                <div className="bg-white border-2 border-ink p-1 shadow-[4px_4px_0px_0px_rgba(21,21,21,0.15)] flex items-center justify-center" style={{ height: `${selectedImage.height}px`, minWidth: 'fit-content' }}>
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    width={selectedImage.width}
                    height={selectedImage.height}
                    className="object-contain"
                    style={{ maxHeight: `${selectedImage.height}px`, width: 'auto', height: 'auto' }}
                  />
                </div>
              ) : (
                <CutoutImage
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  width={selectedImage.width}
                  height={selectedImage.height}
                  className=""
                />
              )}
            </div>
          )}
        </div>
      </div>
    )}
    </>
  );
}
