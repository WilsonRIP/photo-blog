// app/gallery/page.tsx
import type { Metadata } from "next";
import React from "react"; // Explicitly import React

import { AlbumList } from "~/app/_components/gallery/AlbumList"; // Assuming this component exists
import { EditingShowcase } from "~/app/_components/gallery/EditingShowcase"; // Assuming this component exists
import { PhotoGrid } from "~/app/_components/gallery/PhotoGrid"; // Import PhotoGrid
import type { Album, Photo } from "../data/types"; // Assuming Photo type is also in types

export const metadata: Metadata = {
  title: "Photo Gallery | Photography Portfolio",
  description: "Browse our curated collection of photography work",
};

// --- Placeholder Data (Remove this in a real app) ---
// Temporary placeholder data for individual photos
const placeholderPhotos: Photo[] = [
    { id: 'p1', src: '/images/IMG_1353.JPG', alt: 'Nature Trees' },
    { id: 'p2', src: '/images/IMG_1364.JPG', alt: 'Misty mountain landscape' },
    { id: 'p3', src: '/images/IMG_1258.JPG', alt: 'Close-up portrait with bokeh' },
    { id: 'p4', src: '/images/IMG_0125.JPG', alt: 'Abstract architectural detail' },
    { id: 'p5', src: '/images/IMG_0149.JPG', alt: 'Wildlife animal in its habitat' },
    { id: 'p6', src: '/images/IMG_1222.JPG', alt: 'Still life composition' },
    { id: 'p7', src: '/images/IMG_1354.JPG', alt: 'Coastal sunset view' },
    { id: 'p8', src: '/images/IMG_0117.JPG', alt: 'Urban night scene' },
    // Add more placeholder photos here
    // Make sure the image files exist in your public/images directory
];

// Temporary empty array for albums
const albums: Album[] = [];
// --- End Placeholder Data ---


export default async function GalleryPage() {
  // TODO: Server component data fetching for albums and/or individual photos
  // In a real app, you would fetch albums and/or a paginated list of photos here.
  // const albums = await getGalleryData(); // Fetch albums
  // const recentPhotos = await getRecentPhotos(); // Fetch recent photos

  return (
    <div className="container mx-auto px-4 py-8"> {/* Use a div for main container */}
      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
        Photo Gallery
      </h1>

      {/* Editing Showcase Section */}
      {/* You might conditionally render this or pass dynamic data */}
      <section className="mb-16"> {/* Added bottom margin */}
         <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-8 text-center md:text-left">
            Before & After Editing
         </h2>
         <EditingShowcase
            beforeImage={{
              src: "/images/IMG_0171.JPG", // Replace with actual image paths
              alt: "Original photo before editing"
            }}
            afterImage={{
              src: "/images/IMG_0171-edited.png", // Replace with actual image paths
              alt: "Photo after editing and retouching"
            }}
         />
      </section>


      {/* Albums Section (if you organize photos into albums) */}
      {/* Render AlbumList component if you have albums to display */}
      {albums && albums.length > 0 && (
         <section className="mb-16"> {/* Added bottom margin */}
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-8 text-center md:text-left">
               Browse Albums
            </h2>
            {/* Pass fetched albums data here */}
            <AlbumList albums={albums} />
         </section>
      )}


      {/* All Photos Grid Section - Use PhotoGrid component */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-8 text-center md:text-left">
          All Photos
        </h2>
        {/* Use PhotoGrid and pass the photos data */}
        <PhotoGrid photos={placeholderPhotos} />
      </section>

      {/* Optional: Call to Action or other sections */}
      {/* <section className="text-center mt-16">
         <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
            Interested in Prints?
         </h2>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 text-lg font-medium text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-600"
          >
            Contact Me
          </Link>
      </section> */}

    </div>
  );
}