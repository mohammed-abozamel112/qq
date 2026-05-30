import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import LiveProjectButton from '../components/LiveProjectButton';

const projects = [
  {
    number: '01',
    category: 'Client',
    name: 'Nextlevel Studio',
    images: {
      col1: [
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
      ],
      col2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
    },
  },
  {
    number: '02',
    category: 'Personal',
    name: 'Aura Brand Identity',
    images: {
      col1: [
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
      ],
      col2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
    },
  },
  {
    number: '03',
    category: 'Client',
    name: 'Solaris Digital',
    images: {
      col1: [
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
      ],
      col2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
    },
  },
];

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const totalCards = projects.length;
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={ref} className="sticky h-[85vh] flex items-center justify-center" style={{ top: `${index * 28}px` }}>
      <motion.div 
        className="w-full max-w-7xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8"
        style={{ scale }}
      >
        {/* Top Row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 mb-6 sm:mb-8 md:mb-10">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            <span 
              className="font-black text-[#D7E2EA]"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-[#D7E2EA] text-xs sm:text-sm uppercase tracking-widest opacity-60">
                {project.category}
              </span>
              <h3 
                className="text-[#D7E2EA] font-medium"
                style={{ fontSize: 'clamp(1.2rem, 2.5vw, 2rem)' }}
              >
                {project.name}
              </h3>
            </div>
          </div>
          <LiveProjectButton />
        </div>

        {/* Image Grid */}
        <div className="flex gap-3 sm:gap-4 md:gap-5">
          {/* Left Column - 2 images */}
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-5" style={{ width: '40%' }}>
            <img
              src={project.images.col1[0]}
              alt={`${project.name} 1`}
              className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover w-full"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            />
            <img
              src={project.images.col1[1]}
              alt={`${project.name} 2`}
              className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover w-full"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            />
          </div>

          {/* Right Column - 1 tall image */}
          <div style={{ width: '60%' }}>
            <img
              src={project.images.col2}
              alt={`${project.name} 3`}
              className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover w-full h-full"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-20">
      <h2 
        className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 md:mb-24"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Project
      </h2>

      <div>
        {projects.map((project, i) => (
          <ProjectCard key={project.number} project={project} index={i} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
