// components/gallery/AlbumList.tsx
"use client";

import type { Album } from "../../data/types";
import { PhotoGrid } from "./PhotoGrid";

interface AlbumListProps {
  albums: Album[];
}

export function AlbumList({ albums }: AlbumListProps) {
  return (
    <div className="space-y-12">
      {albums.map((album) => (
        <section 
          key={album.id} 
          aria-labelledby={album.id}
          className="scroll-m-20"
        >
          <h2 id={album.id} className="text-2xl font-semibold mb-2">
            {album.title}
          </h2>
          
          {album.description && (
            <p className="text-muted-foreground mb-6">
              {album.description}
            </p>
          )}
          
          <PhotoGrid photos={album.photos} />
        </section>
      ))}
    </div>
  );
}