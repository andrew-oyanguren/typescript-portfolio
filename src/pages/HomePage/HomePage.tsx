import { ImageView, ImageCarousel } from 'src/components';

import useWindowDim from 'src/hooks/useWindowDim';
import { PageTitle } from 'src/components';

export default function HomePage() {
  const { windowDim } = useWindowDim();

  const isScreenMobile = windowDim.width < 540;

  return (
    <>
      <PageTitle text="Hi, I'm Andy" />
      {isScreenMobile ? <ImageView /> : <ImageCarousel />}
    </>
  );
}
