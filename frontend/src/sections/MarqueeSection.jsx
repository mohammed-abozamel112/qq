import React, { useState, useEffect } from 'react';

const images = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
];

const images2 = [
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
];

const MarqueeSection = () => {
  const [offset, setOffset] = useState(0);
  const [sectionTop, setSectionTop] = useState(0);

  useEffect(() => {
    const sectionElement = document.getElementById('marquee-section');
    if (sectionElement) {
      setSectionTop(sectionElement.offsetTop);
    }

    const handleScroll = () => {
      const scrollOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(scrollOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionTop]);

  // Triple the images for seamless scrolling
  const row1Images = [...images, ...images, ...images];
  const row2Images = [...images2, ...images2, ...images2];

  return (
    <section id="marquee-section" className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10">
      <div className="flex flex-col gap-3">
        {/* Row 1 - Scrolls Right */}
        <div className="flex gap-3 overflow-hidden">
          <div 
            className="flex gap-3 flex-shrink-0"
            style={{
              transform: `translateX(${offset - 200}px)`,
              willChange: 'transform',
            }}
          >
            {row1Images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Project ${i + 1}`}
                className="rounded-2xl object-cover"
                style={{ width: '420px', height: '270px' }}
                loading="lazy"
              />
            ))}
          </div>
        </div>

        {/* Row 2 - Scrolls Left */}
        <div className="flex gap-3 overflow-hidden">
          <div 
            className="flex gap-3 flex-shrink-0"
            style={{
              transform: `translateX(${-(offset - 200)}px)`,
              willChange: 'transform',
            }}
          >
            {row2Images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Project ${i + 12}`}
                className="rounded-2xl object-cover"
                style={{ width: '420px', height: '270px' }}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
