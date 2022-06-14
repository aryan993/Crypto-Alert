import * as React from 'react';
import { useState } from 'react';
import logo from "./download.png";
function Navbar({ newcurr }) {

  const [currency, setcurrency] = useState('USDT');
  const casd = (a) => {
    newcurr(a);
  }
  const logoStyle = {
    width: "50px",
    marginRight: "10px",
    borderRadius: 150 / 2,
  };
  return (
    <>
      <header className="navbar  sticky-top flex-md-nowrap  shadow">
        <div className="col-md-5 me-0 px-3 fs-6">
          <img src={logo} alt="" style={logoStyle} />
          <a className="navbar-brand px-3" href="/" style={{ color: '#F0B90B' }}><b>Crypto Alert</b></a>
          <a className="navbar-brand " href="/" style={{ color: 'azure' }}>Home</a>
        </div>
        <select
          id="demo-simple-select"
          value={currency}
          style={{ width: 100, height: 40, marginLeft: 15 }}
          onChange={(e) => {
            setcurrency(e.target.value);
            casd(e.target.value)
          }}
        >
          <option value={"USD"}>USD</option>
          <option value={"INR"}>INR</option>
        </select>

        <div className="navbar-nav">
          <div className="nav-item text-nowrap">
            <a className="nav-link px-3" href="#" style={{ color: 'azure' }}>Sign out</a>
          </div>
        </div>
      </header>

    </>
  )
}

export default Navbar
