import dec1 from '../../assets/images/WOW13-dec1.png';
import dec2 from '../../assets/images/WOW13-dec2.png';
import img from '../../assets/images/WOW13-img.png';

import React from 'react';
import styles from './WOW13.module.scss';

function WOW13() {
  return (
    <div className={styles.root}>
      <div className="col1">
        <h1>Емельянов <br />Сергей <br />Архипович</h1>
        <p>Призван в июле 1941 года. Рядовой. <br />Служил на Дальневосточном фронте, в Китае. <br />Награждён медалью “За победу над Японией”. <br />После Войны работал председателем колхоза “Маевка”, главным бухгалтером, заведующим фермой. <br />Информация разница <br />Красноармеец, ефрейтор. Мобилизован в декабре 1943г. <br />Московская зона обороны, 253 отдельный зенитный артиллерийский дивизион 19 стрелковой дивизии МЗО. <br />Имеет Орден Отечественной войны II степени.</p>
      </div>
      <div className="col2">
        <img src={dec1} alt="wow13-dec1" />
        <img src={img} alt="wow13-img" />
        <img src={dec2} alt="wow13-dec2" />
      </div>
    </div>
  )
}
export default WOW13;