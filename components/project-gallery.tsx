"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from "react";

export type ProjectPhoto = {
  alt: string;
  thumbnail: string;
  full: string;
};

type ProjectGalleryProps = {
  projectName: string;
  photos: ProjectPhoto[];
};

export function ProjectGallery({ projectName, photos }: ProjectGalleryProps) {
  const projectLabel = projectName.toUpperCase();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const isOpen = activeIndex !== null;
  const hasMultiplePhotos = photos.length > 1;

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

  function handleDialogKeyDown(event: ReactKeyboardEvent<HTMLDivElement>) {
    if (activeIndex === null) return;

    if (event.key === "Escape") {
      setActiveIndex(null);
    } else if (hasMultiplePhotos && event.key === "ArrowRight") {
      setActiveIndex((index) => (index === null ? null : (index + 1) % photos.length));
    } else if (hasMultiplePhotos && event.key === "ArrowLeft") {
      setActiveIndex((index) => (index === null ? null : (index - 1 + photos.length) % photos.length));
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

  function openPhoto(index: number) {
    previousFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setActiveIndex(index);
  }

  function scrollGallery(direction: -1 | 1) {
    const track = trackRef.current;
    if (!track) return;

    const firstPhoto = track.querySelector<HTMLElement>("[data-gallery-photo]");
    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
    track.scrollBy({
      left: direction * ((firstPhoto?.offsetWidth ?? track.clientWidth * 0.8) + gap),
      behavior: "instant",
    });
  }

  function showPrevious() {
    setActiveIndex((index) => (index === null ? null : (index - 1 + photos.length) % photos.length));
  }

  function showNext() {
    setActiveIndex((index) => (index === null ? null : (index + 1) % photos.length));
  }

  return (
    <>
      <div className="relative h-[280px] shrink-0 sm:h-[320px]">
        <div
          ref={trackRef}
          className="flex h-full snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label={`${projectLabel} project photos`}
        >
          {photos.map((photo, index) => (
            <button
              key={photo.full}
              data-gallery-photo
              type="button"
              onClick={() => openPhoto(index)}
              aria-label={`View ${projectLabel} photo ${index + 1} of ${photos.length}`}
              className={`group relative h-full shrink-0 snap-start overflow-hidden bg-[#10171d] text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8fe0ff] ${hasMultiplePhotos ? "w-[84%] sm:w-[48%] lg:w-[32%]" : "w-full"}`}
            >
              <Image
                src={photo.thumbnail}
                alt={photo.alt}
                fill
                sizes={hasMultiplePhotos ? "(max-width: 639px) 84vw, (max-width: 1023px) 48vw, 32vw" : "(max-width: 767px) 100vw, 50vw"}
                loading="lazy"
                decoding="async"
                className="object-cover transition duration-500 group-hover:scale-[1.035]"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70 transition group-hover:opacity-100" />
              <span className="absolute bottom-3 left-3 text-[0.55rem] uppercase tracking-[0.2em] text-white/80">
                {String(index + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
              </span>
            </button>
          ))}
        </div>

        {hasMultiplePhotos ? (
          <>
            <button
              type="button"
              onClick={() => scrollGallery(-1)}
              aria-label={`Scroll ${projectLabel} gallery left`}
              className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/55 text-white/80 shadow-lg backdrop-blur transition hover:border-[#8fe0ff]/60 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8fe0ff]"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollGallery(1)}
              aria-label={`Scroll ${projectLabel} gallery right`}
              className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/55 text-white/80 shadow-lg backdrop-blur transition hover:border-[#8fe0ff]/60 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8fe0ff]"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </>
        ) : null}
      </div>

      {activeIndex !== null ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md sm:p-8"
          onClick={(event) => {
            if (event.target === event.currentTarget) setActiveIndex(null);
          }}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={`${projectLabel} photo ${activeIndex + 1} of ${photos.length}`}
            onKeyDown={handleDialogKeyDown}
            tabIndex={-1}
            className="relative flex h-full max-h-[1000px] w-full max-w-[1500px] items-center justify-center"
          >
            <div className="pointer-events-none absolute left-1 top-1 z-10 rounded-full border border-white/15 bg-black/55 px-3 py-2 text-xs tracking-[0.16em] text-white/75 sm:left-2 sm:top-2">
              <span aria-live="polite">{String(activeIndex + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}</span>
            </div>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setActiveIndex(null)}
              aria-label={`Close ${projectLabel} photo viewer`}
              className="absolute right-1 top-1 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/55 text-white transition hover:border-white/50 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8fe0ff] sm:right-2 sm:top-2"
            >
              <X className="h-5 w-5" />
            </button>

            {hasMultiplePhotos ? (
              <button
                type="button"
                onClick={showPrevious}
                aria-label={`Previous ${projectLabel} photo`}
                className="absolute left-0 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/55 text-white transition hover:border-white/50 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8fe0ff] sm:left-2 sm:h-12 sm:w-12"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            ) : null}

            <div className="relative h-[min(82vh,900px)] w-full">
              <Image
                key={photos[activeIndex].full}
                src={photos[activeIndex].full}
                alt={photos[activeIndex].alt}
                fill
                sizes="(max-width: 1500px) 100vw, 1500px"
                loading="eager"
                decoding="async"
                className="object-contain"
              />
            </div>

            {hasMultiplePhotos ? (
              <button
                type="button"
                onClick={showNext}
                aria-label={`Next ${projectLabel} photo`}
                className="absolute right-0 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/55 text-white transition hover:border-white/50 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8fe0ff] sm:right-2 sm:h-12 sm:w-12"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
