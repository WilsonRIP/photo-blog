"use client";

import Image from "next/image";
import { XMarkIcon } from '@heroicons/react/24/solid';

interface PhotoModalProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export function PhotoModal({ src, alt, onClose }: PhotoModalProps) {
  // Handle clicks outside the image to close the modal
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Handle escape key press to close the modal
  // This requires an effect to add/remove the event listener
  // Consider adding this if needed for better accessibility

  return (
    <div 
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={handleBackdropClick}
      aria-modal="true"
      role="dialog"
    >
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-white/70 hover:text-white z-50"
        aria-label="Close image viewer"
      >
        <XMarkIcon className="h-8 w-8" />
      </button>
      
      <div className="relative w-full max-w-4xl max-h-[80vh] aspect-[3/2]"> 
        <Image
          src={src}
          alt={alt}
          fill
          style={{ objectFit: "contain" }}
          className="rounded-md"
          onError={(e) => {
            // Cast target to HTMLImageElement to access src
            const target = e.target as HTMLImageElement;
            console.error("Image failed to load:", target.src);
            // Optionally set an error state here to show a placeholder
          }}
        />
      </div>
    </div>
  );
} 