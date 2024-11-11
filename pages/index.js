import Image from "next/image";
import styles from "./Home.module.css";

import heroBanner from '@/public/images/hero-banner.png';
import {
  divinity,
  synchronicity,
  theUndertaking,
  asTheSunSpeaks
} from '@/public/images/albums'
import soundwaves from '@/public/images/soundwaves.jpg'

export default function Home() {
  return (
    <>
      <div className={styles.heroImage}>
        <Image src={heroBanner} fill alt="" priority />
      </div>
      <div className={styles.cta}>
        <Image style={{ marginLeft: '10px' }} height="200" width="200" src={divinity} alt="" />
        <Image height="200" width="200" src={synchronicity} alt="" />
        <div className={styles.ctaText}>
          <div>
            Your <em>Album</em> and <em>Artist</em> Name
          </div>
          <div className={styles.ctaSubText}>
            <div>on <em>Custom</em> Album Designs</div>
          </div>
          <button className="buton cta">Shop Now</button>
        </div>
        <Image height="200" width="200" src={theUndertaking} alt="" />
        <Image height="200" width="200" src={asTheSunSpeaks} alt="" />
      </div>
      <div className={styles.soundwavesImage}>
        <Image src={soundwaves} alt='' />
      </div>
    </>
  );
}
