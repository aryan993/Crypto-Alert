import { useState } from 'react';
import Navbar from './components/Navbar';
import Charts from './components/Charts';
import Alert from './components/Alert';
import Sidebar from './components/Sidebar';
import "./App.css";



function App() {
  /* To create a state and store the currency  */
  const [currency, setcurrency] = useState('USD');
  const [symbol, setsymbol] = useState('');
  const [index, setindex] = useState('0');
  const [prices, setprices] = useState();

  const newcurr = (a) => {
    setcurrency(a);
  }
  const charting = (sym, indexes, prices) => {
    setsymbol(sym);
    setindex(indexes);
    setprices(prices);
  }

  return (
    <div className="App">
      <div className='Navbar'>
        <Navbar newcurr={newcurr} />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className='col-md-3 tabs'><Sidebar currency={currency} charting={charting} /></div>
          <div className='col-md-6 tabs'><Charts symbol={symbol} currency={currency} /></div>
          <div className='col-md-3 tabs'><Alert symbol={symbol} currency={currency} index={index} prices={prices} /></div>
        </div>
      </div>
    </div>
  );
}

export default App;


/*  link to get coin list data https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false 
    link to get all the currencies https://api.coingecko.com/api/v3/simple/supported_vs_currencies
*/
