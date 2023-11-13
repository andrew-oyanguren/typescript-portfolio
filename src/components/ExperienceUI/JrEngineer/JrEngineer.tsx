import BookIcon from 'src/assets/svgs/book.svg';
import CodeIcon from 'src/assets/svgs/code.svg';
import MapIcon from 'src/assets/svgs/map.svg';
import { Card } from 'src/components';

export default function JrEngineer() {
  return (
    <>
      <Card style={{ backgroundColor: 'var(--color-dark-gray)' }}>
        <img style={{ width: 45, height: 45 }} src={CodeIcon} alt='Code Icon' />
        <p>Responsible for Pulse releases and debugging.</p>
      </Card>
      <p>image placeholder</p>
      <Card
        style={{
          borderTopLeftRadius: 50,
          borderTopRightRadius: 0,
          borderBottomRightRadius: 50,
          borderBottomLeftRadius: 0,
        }}
      >
        <p>Developed a Q&A and release process for Pulse to the Play Store.</p>
        <img style={{ width: 45, height: 45 }} src={MapIcon} alt='Map Icon' />
        <p>I was Instrumental in FE decisions when building new features.</p>
      </Card>
      <p>
        Led refactor updating Pulse from its primitive state into an updated
        React Native application
      </p>
      <Card style={{ backgroundColor: 'var(--color-dark)' }}>
        <img style={{ width: 45, height: 45 }} src={BookIcon} alt='Book Icon' />
        <p>
          Researched and successfully integrated React libraries into Novo.
          Developed data grids, and forms using React Hook Form and
          ReactDataGrid
        </p>
      </Card>
    </>
  );
}
