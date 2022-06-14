import { useState, useEffect, Component } from 'react';
import React from 'react';
import ReadOnlyRow from './ReadOnlyRow';
import data from './mock-data.json'
import './Alert.css'

function Alert({ symbol, currency, index, prices }) {

  const [contacts, setContacts] = useState([]);   //data is the data--- and now contact becomes our new data
  const [addFormData, setAddFormData] = useState({
    price: "",
  });
  useEffect(() => {
    if (currency === 'USD') {
      setContacts(data[index].usd);
    }
    if (currency === 'INR') {
      setContacts(data[index].inr);
    }
  }, [index, symbol, currency]);

  const handleAddFormChange = (event) => {
    event.preventDefault();
    setAddFormData(+event.target.value);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const newContact = addFormData
    const newContacts = [...contacts, newContact];
    setContacts(newContacts);                       // this changes the state but do not savethe value in the array
    data[index].usd.push(+addFormData);          // this save the value in the array after thecomponent get re-rendered thus no duplication
  };

  const handleDeleteClick = (con) => {
    const newContacts = [...contacts];
    const indexs = contacts.indexOf(con);
    newContacts.splice(indexs, 1);
    setContacts(newContacts);
  };

  return (
    <div>
      <div className='priced'>
        <h3 >{symbol.toUpperCase()}/{currency} : {prices}</h3>
      </div>
      <div className="app-container">
        {//code for form to enter new values
        }
        <form onSubmit={handleAddFormSubmit}>
          <input
            type="number"
            name="price"
            required="required"
            placeholder="Enter new price target"
            onChange={handleAddFormChange}
            className='pricetargetinp'
          />
        </form>
        <form>
          {contacts.map((contact) => (
            <ReadOnlyRow
              contact={contact}
              handleDeleteClick={handleDeleteClick}
            />
          ))}
        </form>
      </div>
    </div>
  )
}


export default Alert

