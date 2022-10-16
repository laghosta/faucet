import Header from "./components/header/Header";
import PreHeader from "./components/preHeader/PreHeader";
import Table from "./components/table/Table";
import React from "react";
import Item from "./components/item/Item";
import Admin from "./components/admin/Admin";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";
import axios from "axios";
import {logDOM} from "@testing-library/react";
function App() {
    const [data, setData] = React.useState([])
    const [items, setItems] = React.useState("btc")
    React.useEffect(()=>{
        axios.get("https://api.allfaucets.me/faucets").then(res=>setData(res.data))
    }, [])

    return (
    <div className="App">
            <Header/>
            <PreHeader changeItems={setItems} items ={items}/>
            <Table items={items}  data={data}/>
    </div>
  );
}

export default App;
