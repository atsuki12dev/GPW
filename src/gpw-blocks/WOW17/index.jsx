import dec1 from '../../assets/images/WOW7-dec1.png';
import dec2 from '../../assets/images/WOW7-dec2.png';
import img from '../../assets/images/WOW17-img.jpg';

import React from 'react';
import styles from './WOW17.module.scss';

function WOW17() {
  return (
    <div className={styles.root}>
        <div className="col2">
          <img src={dec1} alt="wow7-dec1" />
          <img src={img} alt="wow17-img" />
          <img src={dec2} alt="wow7-dec2" />
        </div>
        <div className="col1">
          <h1>Патраков <br />Константин <br />Михайлович</h1>
          <p>1918 года рождения <br />Красноармеец. Шофер 6 батареи награжден 28 февраля 1944 медалью "за отвагу" за то что он в период боев с 14 января 1944 года умело без аварии водит свою машину. 9 февраля 1944 года при смене огневых позиций спас и быстро вытащил застрявшие 2 машины, чем освободил дорогу от создания "пробок". 10 февраля 1944 года вывел машину с боеприпасами из-под сильной бомбежки и обстрела, доставив на огневые позиции, тем самым батальон не имел перебоев в боеприпасах.</p>
        </div>
    </div>
  )
}
export default WOW17;