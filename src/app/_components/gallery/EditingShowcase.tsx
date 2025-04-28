// components/gallery/EditingShowcase.tsx
"use client";

import { BeforeAfterSlider } from "~/app/_components/BeforeAfterSlider";

interface ImageInfo {
  src: string;
  alt: string;
}

interface EditingShowcaseProps {
  beforeImage: ImageInfo;
  afterImage: ImageInfo;
}

export function EditingShowcase({ beforeImage, afterImage }: EditingShowcaseProps) {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-semibold mb-4">Editing Showcase</h2>
      <div className="max-w-2xl mx-auto">
        <BeforeAfterSlider
          beforeImageUrl={beforeImage.src}
          beforeAlt={beforeImage.alt}
          afterImageUrl={afterImage.src}
          afterAlt={afterImage.alt}
        />
      </div>
    </section>
  );
}