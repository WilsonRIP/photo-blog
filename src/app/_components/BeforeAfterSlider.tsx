"use client";

import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

interface BeforeAfterSliderProps {
  beforeImageUrl: string;
  beforeAlt?: string;
  afterImageUrl: string;
  afterAlt?: string;
}

/**
 * A component to display a comparison slider between two images.
 */
export function BeforeAfterSlider({
  beforeImageUrl,
  beforeAlt = "Before image",
  afterImageUrl,
  afterAlt = "After image",
}: BeforeAfterSliderProps) {
  return (
    <div className="overflow-hidden rounded-lg shadow-md">
      <ReactCompareSlider
        itemOne={<ReactCompareSliderImage src={beforeImageUrl} alt={beforeAlt} />}
        itemTwo={<ReactCompareSliderImage src={afterImageUrl} alt={afterAlt} />}
        className="w-full aspect-video" // Adjust aspect ratio as needed
      />
    </div>
  );
} 