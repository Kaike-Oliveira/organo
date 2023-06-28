// CORE
import React from 'react';

// STYLE
import './Banner.css';

interface BannerProps {
  src: string
  alt?: string
}

const Banner = ({ src, alt } :BannerProps) => {
  return (
    <header className="banner"> 
      <img src={src} alt={alt} />
    </header>
   );
}

export default Banner;