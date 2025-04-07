import dec1 from '../../assets/images/WOW14-dec1.png';
import dec2 from '../../assets/images/WOW14-dec2.png';
import img from '../../assets/images/WOW14-img.png';

import React from 'react';
import styles from './WOW14.module.scss';

function WOW14() {
  return (
    <div className={styles.root}>
      <div className="col1">
        <img src={dec1} alt="wow14-dec1" />
        <img src={img} alt="wow14-img" />
        <img src={dec2} alt="wow14-dec2" />
      </div>
      <div className="col2">
        <h1>Емельянов <br />Никифор <br />Архипович</h1>
        <p>(1907- 1983гг.) кавалерист, красноармеец. <br />Начало службы ноябрь 1943 года, шестой гвардейский стрелковый полк, кавалерист. <br />Демобилизован в апреле 1945 после ранения. <br />Медаль “За отвагу” 1944г.</p>
      </div>
    </div>
  )
}
export default WOW14;