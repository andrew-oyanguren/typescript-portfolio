import { useState, useEffect } from 'react';
import { IMAGE_CONFIG } from 'src/constants/imageConstants';
import useWindow from 'src/hooks/useWindowDim';

import { ControlButton } from 'src/components';

import styles from './ImageCarousel.module.css';

export default function ImageCarousel() {
  const [initCycle, setInitCycle] = useState(true);
  const [currentImageIdx, setCurrentImageIdx] = useState(0);
  const [currentImage, setCurrentImage] = useState(
    IMAGE_CONFIG[currentImageIdx]
  );
  const [imgAnimating, setImgAnimating] = useState(false);

  const { windowDim } = useWindow();

  const isFirstImage = currentImageIdx === 0;
  const isLastImage = currentImageIdx === IMAGE_CONFIG.length - 1;

  const handleImageIdx = (idx: number) => {
    setCurrentImage(IMAGE_CONFIG[idx]);
  };

  const onBack = () => {
    setImgAnimating(true);
    setCurrentImageIdx((prevIdx) => prevIdx - 1);
  };

  const onNext = () => {
    setImgAnimating(true);
    setCurrentImageIdx((prevIdx) => prevIdx + 1);
  };

  useEffect(() => {
    handleImageIdx(currentImageIdx);
  }, [currentImageIdx]);

  useEffect(() => {
    setImgAnimating(false);
  }, [currentImage]);

  useEffect(() => {
    const delay = isFirstImage ? 4000 : 3000;

    if (initCycle) {
      const interval = setInterval(() => {
        if (isLastImage) {
          setCurrentImageIdx(0);
          setInitCycle(false);
          return;
        }
        onNext();
      }, delay);

      return () => clearInterval(interval);
    }
  }, [initCycle, isFirstImage, isLastImage, currentImageIdx]);

  const animateClass = !imgAnimating ? styles.animate : '';

  return (
    <div className={styles.ImageCarousel}>
      <div className={`${styles.TitleContainer} ${animateClass}`}>
        {windowDim.width < 1340 ? (
          <p>{currentImage.title}</p>
        ) : (
          <ul className={styles.TitleList}>
            {IMAGE_CONFIG.map(({ title }, idx) => {
              return (
                <li
                  className={idx === currentImageIdx ? styles.highlight : ''}
                  key={title}
                >
                  {title}
                </li>
              );
            })}
          </ul>
        )}
      </div>

      <div className={styles.ImageCarouselContainer}>
        <div className={styles.ImageWrapper}>
          <img
            className={animateClass}
            src={currentImage.asset}
            alt={currentImage.altText}
          />
        </div>

        <div
          className={`${styles.Controls} ${initCycle ? styles.initial : ''}`}
        >
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
    </div>
  );
}
