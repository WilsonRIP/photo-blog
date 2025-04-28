// components/gallery/PhotoGrid.tsx
"use client";

import { useState } from "react";
import { Photo } from "~/lib/gallery/types";
import { PhotoItem } from "./PhotoItem";

interface PhotoGridProps {
  photos: Photo[];
}

export function PhotoGrid({ photos }: PhotoGridProps) {
  const [selectedPhotoId, setSelectedPhotoId] = useState<string | null>(null);
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {photos.map((photo) => (
        <PhotoItem
          key={photo.id}
          photo={photo}
          onClick={() => setSelectedPhotoId(photo.id)}
        />
      ))}
    </div>
  );
}