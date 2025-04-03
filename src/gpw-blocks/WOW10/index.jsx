import dec1 from '../../assets/images/WOW10-dec1.png';
import dec2 from '../../assets/images/WOW10-dec2.png';
import img from '../../assets/images/WOW10-img.png';

import React from 'react';
import styles from './WOW10.module.scss';

function WOW10() {
  return (
    <div className={styles.root}>
        <div className="col1">
          <img src={dec1} alt="wow10-dec1" />
          <img src={img} alt="wow10-img" />
          <img src={dec2} alt="wow10-dec2" />
        </div>
        <div className="col2">
          <h1>Патраев <br />Василий <br />Тимофеевич</h1>
          <p>(1905-1944) красноармеец, рядовой <br />Мобилизован 22 июня 1941г (или 2 августа 1941 года). <br />Воевал под Ленинградом. Участвовал в снятии блокады Ленинграда. Пропал без вести в 1944г, после лечения в госпитале. Последнее место службы 290 артиллерийский полк 104 стрелковой дивизии. <br />С ним воевали два его брата Захар (умер в Эстонии, захоронен в братской могиле) и Фёдор (скончался в родном селе от полученных ранений на войне, после победы).Медаль “За оборону Ленинграда”. <br />Его отец Патраев Тимофей воевал в первой мировой войне будучи разведчиком.</p>
        </div>
    </div>
  )
}
export default WOW10;