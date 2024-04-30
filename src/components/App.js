import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [index, setIndex] = useState(1);

  const [inputData, setInputData] = useState({
    first_name: "",
    last_name: "",
    model: "",
    car_price: "",
    card_info: "",
    expiry_date: "",
  });

  const handleChange = (e, id) => {
    setInputData({
      ...inputData,
      [id]: e.target.value,
    });
  };

  console.log(inputData);

  const handleNext = (e) => {
    e.preventDefault();
    setIndex((idx) => idx + 1);
  };

  const handleBack = (e) => {
    e.preventDefault();
    setIndex((idx) => idx - 1);
  };

  function renderTable() {
    if (index === 1) {
      return (
        <div>
          <h2> Customer Details</h2>
          <label htmlFor="first_name">First Name:</label>
          <input
            type="text"
            id="first_name"
            value={inputData.first_name}
            onChange={(e) => handleChange(e, "first_name")}
          />
          
          <label htmlFor="last_name">Last Name:</label>
          <input
            type="text"
            id="last_name"
            value={inputData.last_name}
            onChange={(e) => handleChange(e, "last_name")}
          />
        </div>
      );
    } else if (index === 2) {
      return (
        <div>
          <h2>Car Details</h2>
          <label htmlFor="model">Brand:</label>
          <input
            type="text"
            id="model"
            value={inputData.model}
            onChange={(e) => handleChange(e, "model")}
          />
          <label htmlFor="car_price">Model:</label>
          <input
            type="text"
            id="car_price"
            value={inputData.car_price}
            onChange={(e) => handleChange(e, "car_price")}
          />
        </div>
      );
    } else if (index === 3) {
      return (
        <div>
          <h2>Payment Details</h2>
          <label htmlFor="card_info">Card Information:</label>
          <input
            type="text"
            id="card_info"
            value={inputData.card_info}
            onChange={(e) => handleChange(e, "card_info")}
          />
          {inputData.card_info.length>1 && inputData.card_info.length<=12 &&<div style={{color:'red'}}> Credit card number must be 12 digit</div> }
          <label htmlFor="expiry_date">Expiry Date:</label>
          <input
            type="date"
            id="expiry_date"
            value={inputData.expiry_date}
            onChange={(e) => handleChange(e, "expiry_date")}
          />
           {inputData.expiry_date.length !== 5 ||
            inputData.expiry_date.indexOf("/") !== 2 ||
            inputData.expiry_date.lastIndexOf("/") !== 2 &&  
            <div style={{ color: "red" }}>Expiry date must be in MM/YY</div> }
        </div>
      );
    } else {
      return null;
    }
  }

  return (
    <div>
      <form>
        {renderTable()}

        {/* {index>0  && <button onClick={handleBack}>Previous</button>}
        {index  ? <button onClick={handleNext}>Next</button>:  <button>Submit</button>} */}
        {index !== 3 ? (
          <button onClick={handleNext}>Next</button>
        ) : (
          <button>Submit</button>
        )}
        {index > 1 && <button onClick={handleBack}>Previous</button>}
      </form>
    </div>
  );
};

export default App;
