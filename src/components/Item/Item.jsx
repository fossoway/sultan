import React from 'react';
import MyButton from "../UI/button/MyButton";
import styles from './Item.module.scss';

const Item = ({img, name, type, size, barcode, manufacturer, brand, description, price, filter}) => {
    return (
        <div className={styles.card}>
            <div className={styles.card__image}>
            <img src={img} alt={name} />
            </div>
            <p className={styles.card__size}>{size}</p>
            <p><span className={styles.card__name}>{brand} </span>{name}</p>
            <p><span className={styles.card__sub}>Штрихкод:</span>{barcode}</p>
            <p><span className={styles.card__sub}>Производитель:</span>{manufacturer}</p>
            <p><span className={styles.card__sub}>Бренд:</span>{brand}</p>
            <div className={styles.card__cart}>
                <span className={styles.card__price}>{price} ₸</span>
                <MyButton icon='cart' size='small'>в корзину</MyButton>
            </div>
        </div>
    );
};

export default Item;
