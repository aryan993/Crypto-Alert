import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import Coin from './Coin';
import { one } from  './emailing'
import "./Sidebar.css"

function Sidebar({ currency,charting }) {

    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');
    const [pricelist, setpricelist] = useState([]);
      
    
    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`).then(res => {   /* This part runs the fetch the data from api with a var in its string  for currency */
            setCoins(res.data);                /*set the value in data */          
            charting(res.data[0].id,0,res.data[0].current_price)
            setpricelist(res.data.map(a => a.current_price))
        })
    }, [currency]);
    
    one(pricelist,currency);

    //Logic behind search 
    const handleChange = e => {
        setSearch(e.target.value);
    };
    const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    );
    const alerting=(symb,prices)=>{
        charting(symb.toUpperCase(),coins.findIndex(x => x.id === symb),prices);  
    }
    return (
        <>
            <div className='coin-app'>
                <form>
                    <input className='coin-input' type='text' style={{ width:'95%' }} onChange={handleChange} placeholder='Search' />
                </form>
                <div className='sidebar-table'>
                    <table className="table" >
                        <tbody>
                            {filteredCoins.map(coin => {
                                return (
                                    <Coin key={coin.id} name={coin.name} price={coin.current_price} priceChange={coin.price_change_percentage_24h} symbol={coin.id} alerting={alerting}/>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Sidebar