import img from '../../assets/images/Section2-img.png';
import banner from '../../assets/images/Section2-banner.png';

import React from 'react';
import styles from './Section2.module.scss';

function Section2() {
  return (
    <div className={styles.root}>
        <div className="col">
          <h1>Для чего мы это делаем?</h1>
          <p>Этот сайт — наша попытка сохранить <br />память о тех, кто подарил нам мир. <br />Мы, студенты группы ИСП-31, решили <br />создать этот проект, чтобы рассказать <br />о наших дедушках и бабушках, которые <br />прошли через ужасы войны. <br />Их истории — это не просто слова. Это <br />подвиги, которые изменили ход истории. <br /><br />Мы не видели войну. Мы не слышали <br />взрывов и не знаем, что такое голод. <br />Но мы знаем, что всё, что у нас есть <br />сегодня, — это благодаря им. <br />Их мужество, их жертвы, их любовь к <br />Родине — всё это стало основой нашей <br />свободы. <br /><br />Этот сайт — наш способ сказать спасибо. <br />Спасибо за то, что они выстояли. <br />Спасибо за то, что они подарили нам <br />будущее. Мы помним. Мы гордимся.</p>
        </div>
        <img src={img} alt="sect2-img" />
        <img src={banner} alt="sect2-banner" />
    </div>
  )
}
export default Section2;