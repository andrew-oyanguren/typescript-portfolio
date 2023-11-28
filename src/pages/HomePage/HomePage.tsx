import { ImageView, ImageCarousel } from 'src/components';

import useWindowDim from 'src/hooks/useWindowDim';
import { PageTitle } from 'src/components';

export default function HomePage() {
  const { windowDim } = useWindowDim();

  const isDeviceSmall = windowDim.width < 768;

  return (
    <>
      <PageTitle text="Hi, I'm Andy" />
      {isDeviceSmall ? <ImageView /> : <ImageCarousel />}
    </>
  );
}
