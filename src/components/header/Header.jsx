import React from 'react';
import styles from "./header.module.css"
const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.header__container}>
                <img src="/img/AllFaucets.png" alt="logo" className={styles.header__logo}/>
                <a href="https://bithub.win/?r=62212" target="_blank">
                    <img src="/img/Frame 4.png" alt="bithub"/>
                </a>
                <div style={{display:"flex", alignItems:"center", gap:"10px"}}>
                    <span style={{color:"#fff", fontWeight:"500", fontSize:"20px"}}>SHARE YOUR FAUCETS HERE </span>
                    <a href="https://t.me/faucetsofferbot" target="_blank"><img src="/img/tg.png" alt="telegram" width={50} height={50}/></a></div>
                </div>

        </div>
    );
};

export default Header;