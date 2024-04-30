import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const inputFields = [
    [
      { id: "first_name", label: "First Name" },
      { id: "last_name", label: "Last Name" },
    ],
    [
      { id: "model", label: "Car Model" },
      { id: "car_price", label: "Car Price" },
    ],
    [
      { id: "card_info", label: "Card Information" },
      { id: "expiry_date", label: "Expiry Date" },
    ],
  ];

  const [form, setForm] = useState(inputFields);
  const [index, setIndex] = useState(0);

  const [inputData, setInputData] = useState({
    first_name: "",
    last_name: "",
    model: "",
    car_price: "",
    card_info: " ",
    expiry_date: " ",
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

  return (
    <div>
      <form>
        {index == 0 && <h2>Customer Details</h2>}
        {index == 1 && <h2>Car Details</h2>}
        {index == 2 && <h2>Payment Details</h2>}
        {form[index].map((field, i) => (
          <div key={i}>
            {field.detail && <h2>{field.detail}</h2>}
            <label htmlFor={field.id}>{field.label}</label>
            <input
              type="text"
              id={field.id}
              value={inputData[field.id]}
              onChange={(e) => handleChange(e, field.id)}
            />

            {index === 2 &&
              inputData.card_info.length > 1 &&
              inputData.card_info.length <= 12 && (
                <div style={{ color: "red" }}>
                  Credit Card number must be exactly 12 digits
                </div>
              )}
            {index === 2 &&
              (inputData.expiry_date.length !== 5 ||
                inputData.expiry_date.indexOf("/") !== 2 ||
                inputData.expiry_date.lastIndexOf("/") !== 2) && (
                <div style={{ color: "red" }}>Expiry date must be in MM/YY</div>
              )}
          </div>
        ))}
        {index !== 2 ? (
          <button onClick={handleNext}>Next</button>
        ) : (
          <button>Submit</button>
        )}

        {index > 0 && <button onClick={handleBack}>Back</button>}
      </form>
    </div>
  );
};

export default App;
