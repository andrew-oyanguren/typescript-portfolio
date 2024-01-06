import { ImageView, ImageCarousel } from 'src/components';

import useWindowDim from 'src/hooks/useWindowDim';
import { useEffect, useState } from 'react';
import { BooksList, PageTitle, LoadingScreen } from 'src/components';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const { windowDim } = useWindowDim();

  const isDeviceSmall = windowDim.width < 768;
  const isDeviceLarge = windowDim.width > 1340;

  return !isLoading ? (
    <LoadingScreen />
  ) : (
    <>
      <PageTitle
        text="Hi, I'm Andy."
        style={{
          marginBottom: isDeviceSmall
            ? 'var(--spacing-small)'
            : 'var(--spacing-medium)',
          textAlign: isDeviceLarge ? 'start' : 'center',
          width: isDeviceLarge ? 'var(--mobile-width-percent)' : 'auto',
          maxWidth: isDeviceLarge ? 'var(--desktop-width)' : 'none',
        }}
      />
      {isDeviceSmall ? <ImageView /> : <ImageCarousel />}
      <BooksList />
    </>
  );
}
