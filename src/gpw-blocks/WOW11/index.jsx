import doc1 from '../../assets/images/WOW11-dec1.png';
import doc2 from '../../assets/images/WOW11-dec2.png';
import img from '../../assets/images/WOW11-img.png';

import React from 'react';
import styles from './WOW11.module.scss';

function WOW11() {
  return (
    <div className={styles.root}>
        <div className="col1">
          <h1>Андреев <br />Андрей <br />Евдокимович</h1>
          <p>(1907-1982) <br />Ленинградский фронт. 35 стрелковый полк, рядовой. <br />Был призван в августе 1941, воевал на ленинградском фронте. <br />В июле 1942 получил ранение в правую руку в следствии чего был демобилизован. <br />Медаль “За оборону Ленинграда”.</p>
        </div>
        <div className="col2">
          <img src={doc1} alt="wow11-doc1" />
          <img src={img} alt="wow11-img" />
          <img src={doc2} alt="wow11-doc2" />
        </div>
    </div>
  )
}
export default WOW11;