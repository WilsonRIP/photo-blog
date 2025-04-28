// app/gallery/page.tsx
import type { Metadata } from "next";
import { AlbumList } from "~/app/_components/gallery/AlbumList";
import { EditingShowcase } from "~/app/_components/gallery/EditingShowcase";
import type { Album } from "../data/types";
// import { getGalleryData } from "~/lib/gallery/data"; // Commented out until path is known

export const metadata: Metadata = {
  title: "Photo Gallery | Photography Portfolio",
  description: "Browse our curated collection of photography work",
};

export default async function GalleryPage() {
  // Server component data fetching
  // const albums = await getGalleryData(); // Commented out
  const albums: Album[] = []; // Temporary empty array
  
  return (
    <section className="container py-8 space-y-12">
      <h1 className="text-3xl font-bold">Photo Gallery</h1>
      
      <EditingShowcase 
        beforeImage={{
          src: "/images/photo-1.png",
          alt: "Before editing"
        }}
        afterImage={{
          src: "/images/photo-2.png",
          alt: "After editing"
        }}
      />
      
      {/* Pass the temporary empty array */}
      <AlbumList albums={albums} />
    </section>
  );
}