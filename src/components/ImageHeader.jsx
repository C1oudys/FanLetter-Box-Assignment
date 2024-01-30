// ImageHeader.js

import React, { useState } from 'react';
import './ImageHeader.css';

import Yujin from '../assets/Yujin.png';
import Gaeul from '../assets/Gaeul.png';
import Rei from '../assets/Rei.png';
import Wonyoung from '../assets/Wonyoung.png';
import Liz from '../assets/Liz.png';
import Leeseo from '../assets/Leeseo.png';

const ImageHeader = () => {
  const [selectedImage, setSelectedImage] = useState();

  const handleImageClick = (imageName) => {
    setSelectedImage(selectedImage === imageName ? imageName : imageName);
  };

  return (
    <div className="image-header-container">
      <div className="image-with-name">
        <img
          src={Yujin}
          alt="Yujin"
          className={selectedImage === 'Yujin' ? 'selected' : ''}
          onClick={() => handleImageClick('Yujin')}
        />
        <span className="artist-name">Yujin</span>
      </div>

      <div className="image-with-name">
        <img
          src={Gaeul}
          alt="Gaeul"
          className={selectedImage === 'Gaeul' ? 'selected' : ''}
          onClick={() => handleImageClick('Gaeul')}
        />
        <span className="artist-name">Gaeul</span>
      </div>

      <div className="image-with-name">
        <img
          src={Rei}
          alt="Rei"
          className={selectedImage === 'Rei' ? 'selected' : ''}
          onClick={() => handleImageClick('Rei')}
        />
        <span className="artist-name">Rei</span>
      </div>

      <div className="image-with-name">
        <img
          src={Wonyoung}
          alt="Wonyoung"
          className={selectedImage === 'Wonyoung' ? 'selected' : ''}
          onClick={() => handleImageClick('Wonyoung')}
        />
        <span className="artist-name">Wonyoung</span>
      </div>

      <div className="image-with-name">
        <img
          src={Liz}
          alt="Liz"
          className={selectedImage === 'Liz' ? 'selected' : ''}
          onClick={() => handleImageClick('Liz')}
        />
        <span className="artist-name">Liz</span>
      </div>

      <div className="image-with-name">
        <img
          src={Leeseo}
          alt="Leeseo"
          className={selectedImage === 'Leeseo' ? 'selected' : ''}
          onClick={() => handleImageClick('Leeseo')}
        />
        <span className="artist-name">Leeseo</span>
      </div>
    </div>
  );
};

export default ImageHeader;
