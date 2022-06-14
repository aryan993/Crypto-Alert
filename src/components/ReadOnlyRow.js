import React from "react";

const ReadOnlyRow = ({ contact, handleDeleteClick }) => {
  return (
    <div className="price-list">
      <div className="cont">{contact}</div>
      <div className="cont2">
        <button className="btn2" type="button" onClick={() => handleDeleteClick(contact)}>
          X
        </button>
      </div>
    </div>

  );
};

export default ReadOnlyRow;
