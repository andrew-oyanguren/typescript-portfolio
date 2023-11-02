import { ResponsiveWrapper, ImageView, ImageCarousel } from 'src/components';

import useWindowDim from 'src/hooks/useWindowDim';

export default function HomePage() {
  const { windowDim } = useWindowDim();

  const isScreenMobile = windowDim.width < 540;

  return (
    <ResponsiveWrapper>
      <h1>Hi, I'm Andy.</h1>
      {isScreenMobile ? <ImageView /> : <ImageCarousel />}
    </ResponsiveWrapper>
  );
}
