import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className={styles.header__wrapper}>
          <div className={styles.header__contacts}>
            <div className={styles.header__item}>
            <span className={styles.header__bold}>
              г. Кокчетав, ул. Ж. Ташенова 129Б
            </span>
              <span>(Рынок Восточный)</span>
            </div>
            <div className={styles.header__item}>
            <span className={styles.header__bold}>
              <a href="mailto:opt.sultan@mail.ru">
                opt.sultan@mail.ru
              </a>
            </span>
              <span>На связи в любое время</span>
            </div>
          </div>

          <nav>
            <ul className={styles.menu__list}>
              <li>О компании</li>
              <li>Доставка и оплата</li>
              <li>Возврат</li>
              <li>Контакты</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
