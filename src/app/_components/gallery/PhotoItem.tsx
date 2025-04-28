// components/gallery/PhotoItem.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import { Photo } from "~/lib/gallery/types";

interface PhotoItemProps {
  photo: Photo;
  onClick?: () => void;
}

export function PhotoItem({ photo, onClick }: PhotoItemProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  
  return (
    <div 
      className="aspect-square relative rounded-md overflow-hidden group cursor-pointer"
      onClick={onClick}
    >
      {isLoading && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse" />
      )}
      
      {hasError ? (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <span className="text-gray-500">Failed to load image</span>
        </div>
      ) : (
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className={`
            object-cover transition-all duration-300
            group-hover:scale-105 
            ${isLoading ? 'opacity-0' : 'opacity-100'}
          `}
          onLoadingComplete={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
          priority={photo.id === "photo-1"}
        />
      )}
      
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <span className="text-white font-medium px-3 py-1 bg-black/50 rounded-full text-sm">
          View
        </span>
      </div>
    </div>
  );
}