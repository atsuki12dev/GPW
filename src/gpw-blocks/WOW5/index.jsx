import img from '../../assets/images/WOW5-img.png';
import dec from '../../assets/images/WOW5-dec.png';

import React from 'react';
import styles from './WOW5.module.scss';

function WOW5() {
  return (
    <div className={styles.root}>
        <div className="col1">
          <h1>Баязитов Хайдар <br />Махмутович <br />(Мухаметуллович)</h1>
          <img src={img} alt="wow5-img" />
        </div>
        <img src={dec} alt="wow5-dec" />
    </div>
  )
}
export default WOW5;