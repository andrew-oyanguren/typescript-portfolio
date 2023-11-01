import { ResponsiveWrapper, ImageView } from 'src/components';

import useWindowDim from 'src/hooks/useWindowDim';

export default function HomePage() {
  const { windowDim } = useWindowDim();

  const isScreenMobile = windowDim.width < 600;

  return (
    <ResponsiveWrapper>
      <h1>Hi, I'm Andy.</h1>
      {isScreenMobile ? <ImageView /> : <p>Image Carousel Placeholder</p>}
    </ResponsiveWrapper>
  );
}
