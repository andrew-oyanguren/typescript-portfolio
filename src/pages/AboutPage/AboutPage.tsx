import { Drawer } from 'src/components';

import { PageTitle } from 'src/components';
import { useWindowDim } from 'src/hooks';

export default function AboutPage() {
  const { windowDim } = useWindowDim();

  return (
    <>
      <PageTitle text='My Journey' />
      {windowDim.width > 500 ? <Drawer /> : null}
    </>
  );
}
