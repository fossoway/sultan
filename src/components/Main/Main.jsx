import React from 'react';
import styles from './Main.module.scss';
import Filter from "../Filter/Filter";
import ItemList from "../ItemList/ItemList";

const Main = ({goods}) => {
    return (
        <div className='container'>
            <div className={styles.main}>
                <Filter />
                <ItemList goods={goods}/>
            </div>

        </div>
    );
};

export default Main;
