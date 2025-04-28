// lib/gallery/data.ts
import type { Album } from "./types";

// In a real app, this would fetch from an API
export async function getGalleryData(): Promise<Album[]> {
  // Simulate API fetch
  return [
    {
      id: "album-1",
      title: "Landscapes",
      description: "Capturing the beauty of nature's vistas.",
      photos: [
        { id: "photo-1", src: "/images/photo-1.png", alt: "Misty mountains at dawn" },
        { id: "photo-3", src: "/images/photo-3.png", alt: "Coastal scene with dramatic cliffs" },
        { id: "photo-4", src: "/images/photo-4.png", alt: "Forest path in autumn" },
        { id: "photo-5", src: "/images/placeholder.png", alt: "Placeholder image" },
      ],
    },
    {
      id: "album-2",
      title: "Portraits",
      description: "Moments and expressions frozen in time.",
      photos: [
        { id: "photo-2", src: "/images/photo-2.png", alt: "Close-up portrait with soft lighting" },
        { id: "photo-6", src: "/images/placeholder.png", alt: "Placeholder image" },
        { id: "photo-7", src: "/images/placeholder.png", alt: "Placeholder image" },
      ],
    },
  ];
}