import img1 from '../../assets/images/WOW6-img1.png';
import img2 from '../../assets/images/WOW6-img2.png';

import React from 'react';
import styles from './WOW6.module.scss';

function WOW6() {
  return (
    <div className={styles.root}>
      <h1>БАЯЗИТОВ <br />Зайнулла <br />Мухаметович</h1>
      <div className="row">
        <img src={img1} alt="wow6-img1" />
        <img src={img2} alt="wow6-img2" />
      </div>
    </div>
  )
}
export default WOW6;