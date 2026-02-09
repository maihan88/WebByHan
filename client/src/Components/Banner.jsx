import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Banner = ({
  title,
  subtitle,
  backgroundImageDesktop,
  backgroundImageMobile,
  scrollRef
}) => {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const bgImage = isMobile
    ? (backgroundImageMobile)
    : (backgroundImageDesktop);

  const handleScrollDown = () => {
    if (scrollRef && scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative w-full h-[100vh] min-h-[600px] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl pt-[120px]">
        <h1 className="text-4xl md:text-6xl lg:text-[58px] font-lora font-semibold mb-4">
          {title}
        </h1>
        <div className="ml-[35%] w-[30%] h-[2.5px] bg-white mb-4"></div>
        <div className="px-6">
          <p className="text-[10px] md:text-xl lg:text-[16px] font-lora max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>
        {/* Scroll down button */}
        <div 
          className="mt-16 cursor-pointer animate-bounce" 
          onClick={handleScrollDown}
        >
          <div className="w-12 h-12 mx-auto border-2 border-white rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
