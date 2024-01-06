import { useEffect } from 'react';

import { useUserContext } from 'src/hooks';
import useWindowDim from 'src/hooks/useWindowDim';
import { ImageView, ImageCarousel } from 'src/components';

import { BooksList, PageTitle, LoadingScreen } from 'src/components';

export default function HomePage() {
  const { userSession, initUserSession } = useUserContext();

  useEffect(() => {
    const timer = setTimeout(() => {
      initUserSession();
    }, 3000);

    return () => clearTimeout(timer);
  }, [initUserSession]);

  const { windowDim } = useWindowDim();

  const isDeviceSmall = windowDim.width < 768;
  const isDeviceLarge = windowDim.width > 1340;

  return !userSession ? (
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
