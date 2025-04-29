// components/gallery/PhotoGrid.tsx
"use client";

import { useState } from "react";
import type { Photo } from "../../data/types";
import { PhotoItem } from "./PhotoItem";
import { PhotoModal } from "./PhotoModal";

interface PhotoGridProps {
  photos: Photo[];
}

export function PhotoGrid({ photos }: PhotoGridProps) {
  const [selectedPhotoId, setSelectedPhotoId] = useState<string | null>(null);
  
  const selectedPhoto = photos.find(p => p.id === selectedPhotoId);

  const handleCloseModal = () => {
    setSelectedPhotoId(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo) => (
          <PhotoItem
            key={photo.id}
            photo={photo}
            onClick={() => setSelectedPhotoId(photo.id)}
          />
        ))}
      </div>

      {selectedPhoto && (
        <PhotoModal 
          src={selectedPhoto.src} 
          alt={selectedPhoto.alt}
          onClose={handleCloseModal} 
        />
      )}
    </>
  );
}