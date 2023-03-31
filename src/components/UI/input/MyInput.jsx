import React from 'react';
import MyButton from "../button/MyButton";
import styles from './MyInput.module.scss'

const MyInput = (props) => {
    return (
        <form className={styles.form}>
            <input {...props} className={styles.input}/>
            <MyButton icon='search'></MyButton>
        </form>
    );
};

export default MyInput;
