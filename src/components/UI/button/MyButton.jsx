import React from 'react';
import styles from './MyButton.module.scss';

const MyButton = ({children, icon, size, ...props}) => {
    let iconStyle = '';
    let buttonSize = '';

    if (icon === 'catalog') {
        iconStyle = styles.catalog;
    }

    if (icon === 'search') {
        iconStyle = styles.search;
    }

    if (icon === 'price') {
        iconStyle = styles.price;
    }

    if (icon === 'cart') {
        iconStyle = styles.cart;
    }

    if (size === 'small') {
        buttonSize = styles.small;
    }

    return (
        <button {...props} className={styles.button + ' ' + iconStyle + ' ' + buttonSize}>
            {children}
        </button>
    );
};

export default MyButton;
