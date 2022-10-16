import React from 'react';
import styles from "./preHeader.module.css"
import './preHeader.css'
const PreHeader = ({changeItems, items}) => {
    const btnClicked = (event) => {
        changeItems(items = event.target.innerText.toLowerCase())
        document.querySelectorAll(".item").forEach(el=>el.classList.remove("checked"))
        event.target.classList.add("checked")
    }
    return (
        <div className={styles.currencies}>
            <h1 className={styles.text}>Currencies</h1>
            <ul className={styles.currencies__list}>
                <li className= "item checked" id="btc" key={"btc"} onClick={(e)=>btnClicked(e)} >
                    <img src="/img/btc.png" alt="btc" width={25} height={25}/>
                    BTC</li>
                <li className="item" id="eth" onClick={(e)=>btnClicked(e)}>
                    <img src="/img/eth.png"  alt="eth" width={25} height={25}/>
                    ETH</li>
                <li className="item" onClick={(e)=>btnClicked(e)}>
                    <img src="/img/ltc.png" alt="ltc" width={25} height={25}/>
                    LTC</li>
                <li className="item" onClick={(e)=>btnClicked(e)}>
                    <img src="/img/sol.png" alt="sol" width={25} height={25}/>
                    SOL</li>
                <li className="item" onClick={(e)=>btnClicked(e)}>
                    <img src="/img/bnb.png" alt="bnb" width={25} height={25}/>
                    BNB</li>
                <li className="item" onClick={(e)=>btnClicked(e)}>
                    <img src="/img/trx.png" alt="trx" width={25} height={25} onClick={()=>changeItems(items = "trx")}/>
                    TRX</li>
                <li className="item" onClick={(e)=>btnClicked(e)}>
                    <img src="/img/doge.png" alt="doge" width={25} height={25}/>
                    DOGE</li>
                <li className="item" onClick={(e)=>btnClicked(e)}>
                    <img src="/img/dash.png" alt="dash" width={25} height={25}/>
                    DASH</li>
                <li className="item" onClick={(e)=>btnClicked(e)}>
                    <img src="/img/dgb.png" alt="dgb" width={25} height={25}/>
                    DGB</li>
                <li className="item" onClick={(e)=>btnClicked(e)}>
                    <img src="/img/fey.png" alt="fey" width={25} height={25}/>
                    FEY</li>
                <li className="item" onClick={(e)=>btnClicked(e)}>
                    <img src="/img/zec.png" alt="zec" width={25} height={25}/>
                    ZEC</li>
                <li className="item" onClick={(e)=>btnClicked(e)}>
                    <img src="/img/bch.png" alt="bch" width={25} height={25}/>
                    BCH</li>
                <li className="item" onClick={(e)=>btnClicked(e)}>
                    <img src="/img/laughing.png" alt="other" width={25} height={25}/>
                    OTHER</li>
            </ul>
            <style></style>
        </div>
    );
};

export default PreHeader;