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
    setSelectedImage(imageName);
  };

  return (
    <div className="image-header-container">
      <img
        src={Yujin}
        alt="Yujin"
        className={selectedImage === 'Yujin' ? 'selected' : ''}
        onClick={() => handleImageClick('Yujin')}
      />
      <img
        src={Gaeul}
        alt="Gaeul"
        className={selectedImage === 'Gaeul' ? 'selected' : ''}
        onClick={() => handleImageClick('Gaeul')}
      />
      <img
        src={Rei}
        alt="Rei"
        className={selectedImage === 'Rei' ? 'selected' : ''}
        onClick={() => handleImageClick('Rei')}
      />
      <img
        src={Wonyoung}
        alt="Wonyoung"
        className={selectedImage === 'Wonyoung' ? 'selected' : ''}
        onClick={() => handleImageClick('Wonyoung')}
      />
      <img
        src={Liz}
        alt="Liz"
        className={selectedImage === 'Liz' ? 'selected' : ''}
        onClick={() => handleImageClick('Liz')}
      />
      <img
        src={Leeseo}
        alt="Leeseo"
        className={selectedImage === 'Leeseo' ? 'selected' : ''}
        onClick={() => handleImageClick('Leeseo')}
      />
    </div>
  );
};

export default ImageHeader;
