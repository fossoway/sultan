import React, {useState} from 'react';
import Item from "../Item/Item";
import styles from './ItemList.module.scss';


const ItemList = ({goods}) => {

    return (
            <div className={styles.cardList}>
                {goods.map(good => <Item key={good.barcode}
                                         img={good.img}
                                         name={good.name}
                                         type={good.type}
                                         size={good.size}
                                         barcode={good.barcode}
                                         manufacturer={good.manufacturer}
                                         brand={good.brand}
                                         price={good.price}
                                         description={good.description}
                                         filter={good.filter}
                />)}
            </div>
    );
};

export default ItemList;
