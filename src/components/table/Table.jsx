import React from 'react';
import styles from "./table.module.css"
import Item from "../item/Item";
const Table = ({items, data, admin, changeData}) => {
    const  switchTable = () => {
        if (data !== undefined){
        return data.filter(item=>(item.category === items)).map(el=><Item faucets = {el} key ={el.id} admin={admin} changeData={changeData} />)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.table}>
                <div className={styles.table__titles}>
                    <p>NAME</p>
                    <div className={styles.table__right}>
                        <div className={styles.right__item}>
                            <p>REWARD</p>
                            <img src="/img/arrows.png" alt=""/>
                        </div>
                        <div className={styles.right__item}>
                            <p>TIMER</p>
                            <img src="/img/arrows.png" alt=""/>
                        </div>
                        <div className={styles.right__item}>
                            <p>RATE</p>
                            <img src="/img/arrows.png" alt=""/>
                        </div>
                        <div className={styles.right__item}>
                            <p>LINK</p>
                        </div>
                    </div>
                </div>

                {
                    switchTable()
                }

            </div>
        </div>
    );
};

export default Table;