"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type ProjectPhotoGalleryProps = {
  title: string;
  images: string[];
};

export function ProjectPhotoGallery({ title, images }: ProjectPhotoGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const isOpen = activeIndex !== null;

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      previousFocusRef.current?.focus();
    };
  }, [isOpen]);

  useEffect(() => {
    if (activeIndex === null) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveIndex(null);
      } else if (event.key === "ArrowRight") {
        setActiveIndex((index) => (index === null ? null : (index + 1) % images.length));
      } else if (event.key === "ArrowLeft") {
        setActiveIndex((index) => (index === null ? null : (index - 1 + images.length) % images.length));
      } else if (event.key === "Tab") {
        const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
        );
        if (!focusable?.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, images.length]);

  function openPhoto(index: number) {
    previousFocusRef.current = document.activeElement as HTMLElement;
    setActiveIndex(index);
  }

  function showPrevious() {
    setActiveIndex((index) => (index === null ? null : (index - 1 + images.length) % images.length));
  }

  function showNext() {
    setActiveIndex((index) => (index === null ? null : (index + 1) % images.length));
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-4">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => openPhoto(index)}
            aria-label={`Open photo ${index + 1} of ${images.length} for ${title}`}
            className="group relative aspect-[4/3] overflow-hidden border border-white/10 bg-[#10171d] text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8fe0ff]"
          >
            <Image
              src={image}
              alt={`${title}, photo ${index + 1}`}
              width={1200}
              height={900}
              sizes="(max-width: 767px) 50vw, 275px"
              className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.04]"
            />
            <span className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />
          </button>
        ))}
      </div>

      {activeIndex !== null ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm sm:p-8"
          onClick={(event) => {
            if (event.target === event.currentTarget) setActiveIndex(null);
          }}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={`${title}, photo ${activeIndex + 1} of ${images.length}`}
            className="relative flex h-full max-h-[900px] w-full max-w-[1400px] items-center justify-center"
          >
            <div className="pointer-events-none absolute left-1 top-1 z-10 rounded-full border border-white/15 bg-black/50 px-3 py-2 text-xs tracking-[0.12em] text-white/75 sm:left-2 sm:top-2">
              {String(activeIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
            </div>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setActiveIndex(null)}
              aria-label="Close image viewer"
              className="absolute right-1 top-1 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/55 text-white transition hover:border-white/50 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8fe0ff] sm:right-2 sm:top-2"
            >
              <X className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={showPrevious}
              aria-label="Previous photo"
              className="absolute left-0 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/55 text-white transition hover:border-white/50 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8fe0ff] sm:left-2 sm:h-12 sm:w-12"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div className="relative h-[min(78vh,820px)] w-full">
              <Image
                key={images[activeIndex]}
                src={images[activeIndex]}
                alt={`${title}, photo ${activeIndex + 1}`}
                fill
                sizes="100vw"
                priority
                className="object-contain"
              />
            </div>

            <button
              type="button"
              onClick={showNext}
              aria-label="Next photo"
              className="absolute right-0 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/55 text-white transition hover:border-white/50 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8fe0ff] sm:right-2 sm:h-12 sm:w-12"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <p className="absolute bottom-1 left-1/2 -translate-x-1/2 text-center text-xs uppercase tracking-[0.2em] text-white/70 sm:bottom-2">
              {title}
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
