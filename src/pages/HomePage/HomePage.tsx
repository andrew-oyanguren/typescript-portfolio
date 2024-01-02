import { ImageView, ImageCarousel } from 'src/components';

import useWindowDim from 'src/hooks/useWindowDim';
import { BooksList, PageTitle } from 'src/components';

export default function HomePage() {
  const { windowDim } = useWindowDim();

  const isDeviceSmall = windowDim.width < 768;
  const isDeviceLarge = windowDim.width > 1340;

  return (
    <>
      <PageTitle
        text="Hi, I'm Andy"
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
