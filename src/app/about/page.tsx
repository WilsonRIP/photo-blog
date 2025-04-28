// app/about/page.tsx
import Image from "next/image";
import Link from "next/link";
import React from "react"; // Explicitly import React

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
        About Me
      </h1>

      {/* Bio and Photo Section */}
      <section className="flex flex-col md:flex-row items-center md:items-start gap-12 mb-16">
        {/* Photographer Photo */}
        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl flex-shrink-0 border-4 border-white dark:border-gray-800">
          {/* Replace with your actual photo path */}
          <Image
            src="/images/photographer-portrait.jpg" // Example path
            alt="A portrait of the photographer"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 192px, 256px" // Appropriate sizes for the image dimensions
          />
        </div>

        {/* Bio Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            My Story
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Welcome! I&apos;m [Your Name], the photographer behind PhotoBlog. My journey into photography began [mention how you started, e.g., several years ago with a simple point-and-shoot camera, during a trip that inspired you]. What started as a hobby quickly evolved into a passion for capturing moments, stories, and the beauty of the world around me.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Through my lens, I strive to [mention your photography style or goal, e.g., convey emotions, tell visual narratives, highlight the magic in the mundane]. This blog is a space where I share my work, the stories behind the photos, and hopefully, inspire you to see the world through a different perspective.
          </p>
           {/* Optional link to a more detailed resume/CV if applicable */}
           {/* <Link href="/resume" className="inline-block mt-4 text-blue-600 dark:text-blue-400 hover:underline">
              Learn more about my background
           </Link> */}
        </div>
      </section>

      {/* Inspiration Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800 dark:text-gray-200">
          Inspiration & Approach
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center md:text-left max-w-3xl mx-auto">
          I draw inspiration from [mention sources of inspiration, e.g., nature&apos;s ever-changing light, the genuine expressions of people, the vibrant energy of cities, other artists]. My approach is often [describe your process, e.g., patient observation, spontaneous capture, detailed planning]. I believe that [share your philosophy on photography, e.g., every photo tells a story, the best moments are often unplanned].
        </p>
      </section>

       {/* Optional: Gear Section */}
       <section className="mb-16">
        <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800 dark:text-gray-200">
          My Gear
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center md:text-left max-w-3xl mx-auto">
          While the gear isn&apos;t everything, having the right tools helps bring the vision to life. I primarily shoot with [mention your main camera body, e.g., a Canon EOS R5] and my favorite lenses are [mention a couple of preferred lenses, e.g., the versatile 24-70mm and the sharp 85mm prime]. For post-processing, I use [mention software, e.g., Adobe Lightroom and Photoshop].
        </p>
       </section>

      {/* Call to Action */}
      <section className="text-center mt-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
            Ready to Explore My Work?
        </h2>
        <Link
          href="/gallery"
          className="inline-block px-10 py-4 text-lg font-medium text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-600"
        >
          View Gallery
        </Link>
         {/* Optional: Link to Contact Page */}
         {/* <p className="mt-4 text-gray-700 dark:text-gray-300">
            Or <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">get in touch</Link> if you have any questions.
         </p> */}
      </section>
    </div>
  );
}