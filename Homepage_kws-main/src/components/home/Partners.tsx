import React, { useEffect, useRef } from "react";

const Partners: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  
  // Setup automatic sliding effect
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    
    // Clone the first set of items and append them to the end for seamless looping
    const createClones = () => {
      const items = slider.querySelectorAll('.partner-logo');
      const clones = Array.from(items).map(item => item.cloneNode(true));
      clones.forEach(clone => {
        slider.appendChild(clone);
      });
    };
    
    createClones();
    
    let animationId: number;
    let position = 0;
    const speed = 0.5; // pixels per frame - adjust for speed
    
    const animate = () => {
      position -= speed;
      
      // Reset position when first set of logos is completely scrolled
      if (Math.abs(position) >= slider.clientWidth / 2) {
        position = 0;
      }
      
      slider.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup animation on unmount
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return (
    <section className="self-center w-full max-w-[1162px] overflow-hidden ml-[15px] max-md:max-w-full">
      <div 
        ref={sliderRef} 
        className="flex items-center gap-10 whitespace-nowrap"
        style={{ willChange: 'transform' }}
      >
        {/* Original logos */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/7c192a35cc20f9484f37410416a4598c00e7f51e?placeholderIfAbsent=true"
          alt="Partner logo"
          className="partner-logo aspect-[2.19] object-contain w-[184px] shrink-0"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/eba76b04e9cdc2ed7587f1e20049137fb11bea90?placeholderIfAbsent=true"
          alt="Partner logo"
          className="partner-logo aspect-[2.26] object-contain w-[190px] shrink-0"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/1f46995ae79bc4d8ae6fbf72944131cbdecfed80?placeholderIfAbsent=true"
          alt="Partner logo"
          className="partner-logo aspect-[2.87] object-contain w-[252px] shrink-0"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/24a64ddbb11a21587c758037621636f495e4f2b4?placeholderIfAbsent=true"
          alt="Partner logo"
          className="partner-logo aspect-[3.61] object-contain w-[318px] shrink-0"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/23a3c2e3bc6c40d1929e6e069f81541b/36417a233e6711fc26fabce96b2e1f818199f45b?placeholderIfAbsent=true"
          alt="Partner logo"
          className="partner-logo aspect-[1.11] object-contain w-[98px] shrink-0"
        />
        
        {/* Additional logos from the public/logo folder */}
        <img
          src="/logo/1.png"
          alt="Partner logo"
          className="partner-logo object-contain h-16 shrink-0"
        />
        <img
          src="/logo/2.png"
          alt="Partner logo"
          className="partner-logo object-contain h-16 shrink-0"
        />
        <img
          src="/logo/3.png"
          alt="Partner logo"
          className="partner-logo object-contain h-16 shrink-0"
        />
        <img
          src="/logo/4.png"
          alt="Partner logo"
          className="partner-logo object-contain h-16 shrink-0"
        />
        <img
          src="/logo/5.png"
          alt="Partner logo"
          className="partner-logo object-contain h-16 shrink-0"
        />
      </div>
    </section>
  );
};

export default Partners;
