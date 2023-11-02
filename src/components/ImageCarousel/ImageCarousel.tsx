import { useState, useEffect } from 'react';
import { IMAGE_CONFIG } from 'src/constants/imageConstants';

import { ControlButton } from 'src/components';

import styles from './ImageCarousel.module.css';

export default function ImageCarousel() {
  const [currentImageIdx, setCurrentImageIdx] = useState(0);
  const [currentImage, setCurrentImage] = useState(
    IMAGE_CONFIG[currentImageIdx]
  );

  const isFirstImage = currentImageIdx === 0;
  const isLastImage = currentImageIdx === IMAGE_CONFIG.length - 1;

  const handleImageIdx = (idx: number) => {
    setCurrentImage(IMAGE_CONFIG[idx]);
  };

  const onBack = () => {
    setCurrentImageIdx((prevIdx) => prevIdx - 1);
  };

  const onNext = () => {
    setCurrentImageIdx((prevIdx) => prevIdx + 1);
  };

  useEffect(() => {
    handleImageIdx(currentImageIdx);
  }, [currentImageIdx]);

  return (
    <div className={styles.ImageCarousel}>
      <div className={styles.imageContainer}>
        {<img src={currentImage.asset} alt={currentImage.altText} />}
      </div>

      <div className={styles.title}>
        <p>{currentImage.title}</p>
      </div>

      <div className={styles.controls}>
        <ControlButton
          onClick={onBack}
          controlType={'Back'}
          altText='Back button'
          isDisabled={isFirstImage}
        />
        <ControlButton
          onClick={onNext}
          controlType={'Next'}
          altText='Next button'
          isDisabled={isLastImage}
        />
      </div>
    </div>
  );
}
