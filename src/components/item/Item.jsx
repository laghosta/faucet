import React from 'react';
import styles from "./item.module.css"
import axios from "axios";
const Item = ({faucets, admin, changeData}) => {
    function deleteItems(id){
        axios.delete('https://api.allfaucets.me/faucets/'+id).then(()=>axios.get("https://api.allfaucets.me/faucets").then(res=>changeData(res.data)))

    }
    return (
        <div className={styles.item}>
            <p>{faucets.name}</p>
            <div className={styles.item__right}>
                <p>{faucets.reward}</p>
                <p>{faucets.timer}</p>
                <p>{faucets.rate}/5 <img src="/img/Star 1.png" alt=""/></p>
                {!admin? <a href={faucets.link}>CLAIM</a>: null}
                {admin? <button onClick={()=>deleteItems(faucets.id)}>X</button> : null}

            </div>
        </div>
    );
};

export default Item;