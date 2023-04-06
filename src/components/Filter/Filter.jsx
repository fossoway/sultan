import React from 'react';
import goods from '../../data/catalog.json';
import styles from './Filter.module.scss';

const Filter = ({price, manufacturer, brand, filter}) => {

    const createCheckbox = (elem) => {
        return (
            <label key={elem} className={styles.filter__input}>
                <input type='checkbox' value={elem} name={elem} />
                {elem}
            </label>
        )
    }

    const brandSet = new Set();

    for (let item of goods) {
        for (let [key, value] of Object.entries(item)) {
            if (key === 'brand') {
                brandSet.add(value);
            }
        }
    }

    const brandList = Array.from(brandSet);

    return (
        <div className={styles.filter}>
            <h2 className={styles.filter__title}>Подбор по параметрам</h2>
            <h3 className={styles.filter__subtitle}>Бренд</h3>
            <form className={styles.filter__form}>
                {brandList.map(brand => createCheckbox(brand))}
            </form>
        </div>
    );
};

export default Filter;
