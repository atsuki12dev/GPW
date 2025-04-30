import dec1 from '../../assets/images/WOW3-dec1.png';
import dec2 from '../../assets/images/WOW3-dec2.png';
import img from '../../assets/images/WOW3-img.png';


import React from 'react';
import styles from './WOW3.module.scss';

function WOW3() {
  return (
    <div className={styles.root}>
        <div className="col1">
          <h1>МУРАТШИН <br />РАХМАТ <br />ТАИПОВИЧ</h1>
          <p> (1921-1992). <br />Мой прадедушка родился в 1921году в г. Владивосток Приморского края В 1939 году призывается в ряды действительной Красной Армии. В 1941-1945 годы воевал на Волховском, Прибалтийском, Ленинградском фронтах. Принимал участие в обороне Ленинграда. Был четырежды ранен. Демобилизовался в 1946 году. Награждён орденами Красной Звезды, Отечественной войны 1 степени, медалями «За победу над Германией в Великой Отечественной войне 1941-1945 г. г.», «За оборону Ленинграда», «За доблесть и отвагу», юбилейными медалями и почетными грамотами Президиума Верховного Совета БАССР.</p>
        </div>
        <div className="col2">
          <img src={dec1} alt="wow3-dec1" />
          <img src={img} alt="wow3-img" />
          <img src={dec2} alt="wow3-dec2" />
        </div>
    </div>
  )
}
export default WOW3;