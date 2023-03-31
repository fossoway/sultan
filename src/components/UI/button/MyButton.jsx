import React from 'react';
import styles from './MyButton.module.scss';

const MyButton = ({children, icon, ...props}) => {
    let iconStyle = '';

    if (icon === 'catalog') {
        iconStyle = styles.catalog;
    }

    if (icon === 'search') {
        iconStyle = styles.search;
    }

    if (icon === 'price') {
        iconStyle = styles.price;
    }

    return (
        <button {...props} className={styles.button + ' ' + iconStyle}>
            {children}
        </button>
    );
};

export default MyButton;
