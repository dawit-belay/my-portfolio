import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="flex-center px-5 md:px-10 pt-2 md:pt-4 pb-10 md:py-20">
          <div className="w-full h-full md:px-10 px-5">
            <TitleHeader
              title="Projects I Build So Far"
              sub="🚀 Check out some of my recent work"
            />
            <div className="mt-16">
              <div className="showcaselayout">
                <a
                  href="https://washera-blog.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="first-project-wrapper cursor-pointer group hover:opacity-90 transition-opacity duration-300"
                  ref={rydeRef}
                >
                  <div className="image-wrapper">
                    <img
                      src="/images/washera-blog-image.png"
                      alt="Washera Blog Interface" />
                  </div>
                  <div className="text-content">
                    <h2>
                      Share Your Story with a Powerful, Minimalist Writing Platform 
                      called washera
                    </h2>
                    <p className="text-white-50 md:text-xl">
                      An app built with React, TailwindCSS, & nodejs for a fast,
                      user-friendly experience.
                    </p>
                  </div>
                </a>

                <div className="project-list-wrapper overflow-hidden">
                  <a
                    href="https://pickparkk.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project cursor-pointer group hover:opacity-90 transition-opacity duration-300"
                    ref={libraryRef}
                  >
                    <div className="image-wrapper bg-[#FFEFDB]">
                      <img
                        src="/images/pick-park-image.png"
                        alt="Parking Management Platform"
                      />
                    </div>
                    <h2>Parking Management Platform</h2>
                  </a>

                  <a
                    href="https://my-movies-database-app-main.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project cursor-pointer group hover:opacity-90 transition-opacity duration-300"
                    ref={ycDirectoryRef}
                  >
                    <div className="image-wrapper bg-[#FFE7EB]">
                      <img src="/images/movie-database-image.png" alt="Movie Database App" />
                    </div>
                    <h2>search and browse movies from imdb database</h2>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
