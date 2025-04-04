import doc1 from '../../assets/images/WOW11-dec1.png';
import doc2 from '../../assets/images/WOW11-dec2.png';
import img from '../../assets/images/WOW16-img.jpg';

import React from 'react';
import styles from './WOW16.module.scss';

function WOW16() {
  return (
    <div className={styles.root}>
        <div className="col1">
          <h1>Литвинов <br />Михаил <br />Степанович</h1>
          <p>1911 год рождения <br />Призван на фронт в 1941 году. Воевал в пехоте, до 1943 года. Был ранен, демобилизован по инвалидности в октябре 1943 года.</p>
        </div>
        <div className="col2">
          <img src={doc1} alt="wow11-doc1" />
          <img src={img} alt="wow16-img" />
          <img src={doc2} alt="wow11-doc2" />
        </div>
    </div>
  )
}
export default WOW16;