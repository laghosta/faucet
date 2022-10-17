import React from 'react';
import styles from "./admin.module.css"
import axios from "axios";
import {logDOM} from "@testing-library/react";
import Header from "../header/Header";
import PreHeader from "../preHeader/PreHeader";
import Table from "../table/Table";
import Item from "../item/Item";

const Admin = () => {
    const [data1, setData1] = React.useState([])
    const [items1, setItems1] = React.useState("btc")
    const [selectValue, setSelectValue] = React.useState("btc")
    React.useEffect(()=>{
        axios.get("https://api.allfaucets.me/faucets").then(res=>setData1(res.data))
    }, [])
    function createObject(e){
        e.preventDefault()
        let name = document.getElementById("name").value
        let reward = document.getElementById("reward").value
        let timer = document.getElementById("timer").value
        let rate = document.getElementById("rate").value
        let link = document.getElementById("link").value
        let obj = {
                "category": selectValue,
                "name": name ,
                "reward": reward,
                "timer": timer,
                "rate" : parseInt(rate),
                "url": link

        }
        axios.post('https://api.allfaucets.me/faucets/', obj).then(()=>axios.get("https://api.allfaucets.me/faucets").then(res=>setData1(res.data)))
        axios.get("https://api.allfaucets.me/faucets").then(res=>setData1(res.data))


    }

    return (
        <div>
        <div className={styles.wrapper}>
            <form className={styles.form} action="">
                <input id="name"   type="text" placeholder="Name"/>
                <input id="timer"  type="text" placeholder="Timer"/>
                <input id="reward" type="text" placeholder="Reward"/>
                <input id="rate" type="text" placeholder="Rate"/>
                <input id="link" type="text" placeholder="Link"/>
                <select name="category" id="category" value={selectValue} onChange={(e)=>setSelectValue(e.target.value)}>
                    <option value="btc" defaultValue>BTC</option>
                    <option value="eth">ETH</option>
                    <option value="ltc">LTC</option>
                    <option value="sol">SOL</option>
                    <option value="trx">TRX</option>
                    <option value="bnb">BNB</option>
                    <option value="fey">FEY</option>
                    <option value="doge">DOGE</option>
                    <option value="dgb">DGB</option>
                    <option value="bch">BCH</option>
                    <option value="zec">ZEC</option>
                    <option value="dash">DASH</option>
                    <option value="other">OTHER</option>
                </select>
                <button type="submit" onClick={(e)=>createObject(e)}>ADD</button>
            </form>

        </div>
            <div className="App">
                <PreHeader changeItems={setItems1} items ={items1}/>
                <Table items={items1} data={data1}  admin={true} changeData={setData1}/>
            </div>
            <a href="/" style={{textAlign:"center",fontSize:"40px", display:"block", marginTop:"1.3em"}}>HOME</a>
    </div>
    );
};

export default Admin;