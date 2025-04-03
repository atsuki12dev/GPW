import img1 from '../../assets/images/Section3-img1.png';
import img2 from '../../assets/images/Section3-img2.png';
import img3 from '../../assets/images/Section3-img3.png';
import img4 from '../../assets/images/Section3-img4.png';
import img5 from '../../assets/images/Section3-img5.png';
import img6 from '../../assets/images/Section3-img6.png';

import React from 'react';
import styles from './Section3.module.scss';

function Section3() {
  return (
    <div className={styles.root}>
        <div className="row1">
          <div className="col1">
            <p>Мы <br />благодарны <br />за каждый <br />мирный <br />день!</p>
          </div>
          <div className="col2">
            <img src={img1} alt="sect3-img1" />
          </div>
          <div className="col3">
            <img src={img2} alt="sect3-img2" />
            <img src={img3} alt="sect3-img3" />
          </div>
        </div>
        <div className="row2">
          <img src={img4} alt="sect3-img4" />
          <img src={img5} alt="sect3-img5" />
          <img src={img6} alt="sect3-img6" />
        </div>
    </div>
  )
}
export default Section3;