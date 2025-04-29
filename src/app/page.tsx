// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import React from "react"; // Explicitly import React

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8"> {/* Add container and padding to the main div */}
      {/* Hero Section with overlay, text, and CTA */}
      <section className="relative h-96 md:h-[500px] lg:h-[600px] flex items-center justify-center text-center overflow-hidden rounded-lg shadow-xl mb-16"> {/* Refactored hero-section */}
        <Image
          src="/images/IMG_1386.JPG" // Ensure this path is correct relative to your public directory
          alt="Hero Image showcasing photography"
          fill
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" // Added transition for potential future hover effects on container
          priority // Good practice for LCP image
        />
        {/* Hero Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div> {/* Refactored hero-overlay */}

        {/* Hero Content */}
        <div className="relative z-10 text-white max-w-3xl px-4"> {/* Refactored hero-content */}
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg"> {/* Increased font weight and added shadow */}
            Welcome to PhotoBlog
          </h1>
          <p className="mb-8 text-lg md:text-xl drop-shadow-lg"> {/* Added shadow */}
            Explore my latest stories and moments captured through the lens.
          </p>
          <Link
            href="/gallery"
            className="inline-block px-8 py-3 text-lg font-medium text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-600" // Refactored btn-primary with rounded-full
          >
            View Gallery
          </Link>
        </div>
      </section>

      {/* Featured Blog Posts styled as cards */}
      <section className="py-12"> {/* Refactored featured-posts padding */}
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100"> {/* Refactored featured-title */}
          Featured Blog Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Refactored featured-grid */}

          {/* Example Featured Post Card */}
          <Link
            href="/blog/my-first-blog-post" // Use meaningful hrefs
            className="group block bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200" // Refactored featured-post-card
          >
             {/* Featured Post Thumbnail - Using a placeholder div based on original */}
            <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 transition-colors duration-300 group-hover:bg-gray-300 dark:group-hover:bg-gray-600 flex items-center justify-center text-gray-500 dark:text-gray-400">
                {/* Replace with Image component in a real app */}
                Thumbnail Placeholder
            </div>
            {/* Featured Post Content */}
            <div className="p-6"> {/* Refactored featured-post-content */}
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200"> {/* Refactored featured-post-card-title */}
                My First Blog Post Title
              </h3>
              <p className="text-gray-600 dark:text-gray-400"> {/* Refactored featured-post-excerpt */}
                A short description to pique interest and invite people to read more about the first post.
              </p>
            </div>
          </Link>

          {/* Example Featured Post Card 2 */}
          <Link
            href="/blog/travel-adventures" // Use meaningful hrefs
            className="group block bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200"
          >
             <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 transition-colors duration-300 group-hover:bg-gray-300 dark:group-hover:bg-gray-600 flex items-center justify-center text-gray-500 dark:text-gray-400">
                Thumbnail Placeholder
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                Travel Adventures and Stories
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Stories from the road, capturing landscapes and cultures around the world.
              </p>
            </div>
          </Link>

          {/* Example Featured Post Card 3 */}
          <Link
            href="/blog/photography-tips" // Use meaningful hrefs
            className="group block bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200"
          >
            <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 transition-colors duration-300 group-hover:bg-gray-300 dark:group-hover:bg-gray-600 flex items-center justify-center text-gray-500 dark:text-gray-400">
                Thumbnail Placeholder
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                Essential Photography Tips
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Helpful guides and techniques to improve your photography skills.
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* Recent Photos grid with hover effect */}
      <section className="py-12"> {/* Refactored recent-photos padding */}
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100"> {/* Refactored recent-title */}
          Recent Photos
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> {/* Refactored photo-grid */}

          {/* Example Photo Grid Item */}
          <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-[1.02] cursor-pointer"> {/* Refactored photo-grid-item, added slight scale on container hover */}
            <Image
              src="/images/IMG_1244.JPG" // Ensure paths are correct
              alt="Portrait photo"
              fill
              className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" // Increased scale on Image hover
              sizes="(max-width: 768px) 50vw, 25vw"
            />
             {/* Optional: Add an overlay on hover */}
             <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>

           {/* Example Photo Grid Item 2 */}
           <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-[1.02] cursor-pointer">
            <Image
              src="/images/IMG_1266.JPG"
              alt="Portrait photo"
              fill
              className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
             <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>

           {/* Example Photo Grid Item 3 */}
           <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-[1.02] cursor-pointer">
            <Image
              src="/images/IMG_1353.JPG"
              alt="Landscape photo"
              fill
              className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
             <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>

           {/* Example Photo Grid Item 4 */}
           <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-[1.02] cursor-pointer">
            <Image
              src="/images/IMG_0113.JPG"
              alt="Scenic view photo"
              fill
              className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
             <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>
          {/* Add more photo grid items as needed */}
        </div>
         {/* Optional: View More button */}
        <div className="text-center mt-8">
           <Link href="/gallery" className="inline-block px-6 py-3 text-md font-medium text-blue-600 border border-blue-600 rounded-full hover:bg-blue-50 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-gray-800 transition duration-200">
              View More Photos
           </Link>
        </div>
      </section>
    </div>
  );
}