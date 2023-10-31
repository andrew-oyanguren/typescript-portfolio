import HeadShot from 'src/assets/images/headshot.png';
import NameOfTheWind from 'src/assets/images/name-of-the-wind.jpeg';
import DiabloGameplay from 'src/assets/images/diablo-gameplay.jpeg';
import MessiWorldcup from 'src/assets/images/messi-world-cup.jpeg';
import JimCarreyMontage from 'src/assets/images/jim-carrey-montage.jpeg';
import SpotifySearch from 'src/assets/images/spotify-search.png';

import styles from './ImageView.module.css';

const IMAGE_CONFIG = [
  {
    asset: HeadShot,
    altText: 'Headshot image',
    title: 'Software Engineer',
  },
  {
    asset: NameOfTheWind,
    altText: 'Name of The Wind image',
    title: 'Reads fantasy books',
  },
  {
    asset: SpotifySearch,
    altText: 'Spotify search screenshot',
    title: 'Listens to indie/pop/folk while coding',
  },
  {
    asset: DiabloGameplay,
    altText: 'Diablo gameplay image',
    title: 'Plays two games',
  },
  {
    asset: MessiWorldcup,
    altText: 'Lionel Messi World Cup image',
    title: 'Calls soccer football',
  },
  {
    asset: JimCarreyMontage,
    altText: 'Jim Carrey montage image',
    title: "Relates everything to 90's movies",
  },
];

export default function ImageView() {
  return (
    <div className={styles.ImageView}>
      {IMAGE_CONFIG.map((obj) => (
        <div key={obj.asset} className={styles.ImageWrapper}>
          <p className={styles.title}>{obj.title}</p>
          <img src={obj.asset} alt={obj.altText} />
        </div>
      ))}
    </div>
  );
}
