import React from 'react'
import {useState} from 'react'

const Coin = ({
  id,
  name,
  price,
  priceChange,
  symbol,
  alerting
}) => {
  return (
        <tr className='coinlist'>
          <td><a onClick={() => {
            alerting(symbol,price);
          }}>{name}</a></td>
          <td>{price}</td>
          <td>{priceChange < 0 ? (
            <p className='text-danger'>{priceChange.toFixed(2)}%</p>
          ) : (
            <p className='text-success'>{priceChange.toFixed(2)}%</p>
          )}
          </td>
        </tr>
  );
};

export default Coin
