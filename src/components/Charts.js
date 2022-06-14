import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  LineChart,
  ResponsiveContainer,
  Tooltip,
  Line,
  XAxis,
  YAxis,
} from "recharts";

function Charts({ symbol, currency }) {
  const [graphprices, setgraphprices] = useState([]);
  useEffect(() => {
    axios.get(`https://api.coingecko.com/api/v3/coins/${symbol.toLowerCase()}/market_chart?vs_currency=${currency}&days=180&interval=daily`).then(res => {
      setgraphprices(res.data.prices);
    })
  }, [currency, symbol])
  //console.log(graphprices)
  var data = [];
  if (symbol) {
    graphprices.map((d) => {
      var date = new Date(d[0]);
       date =
        date.getDate() +
        "/" +
        (parseInt(date.getMonth()) + 1 + "/" + parseInt(date.getFullYear()));
      var x = { date: date, price: parseFloat(d[1]) };
      data.push(x);
    });
  }
  //console.log(data);

  return (<>
    <div className='chartname'>
      <h2>{symbol.toUpperCase()}/{currency}</h2>
    </div>
    <div>
      <ResponsiveContainer aspect={1.5}>
        <LineChart width={500} height={500} data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="rgb(240, 185, 11)" dot={{ r: 0 }} activeDot={{ r: 3 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>

  </>)

}

export default Charts