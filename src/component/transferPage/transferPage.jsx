import React, { useEffect, useState } from "react";
import "../login/login.css";
import "./transferPage.css";
import { ReactComponent as Logo } from "../../images/workflow-mark-indigo-600.svg";
import { ReactComponent as Lock } from "../../images/lock.svg";
import Select from "react-select";

const TransferPage = () => {
  const [receiver, setReceiver] = useState("");
  const [amount, setAmount] = useState(0);
  const [currencyType, setCurrencyType] = useState(null);
  const [currencyTarget, setCurrencyTarget] = useState(null);

  const options = [
    { value: "USD", label: "USD" },
    { value: "EUR", label: "EUR" },
    { value: "GBP", label: "GBP" },
  ];

  console.log({
    amount: amount,
    email_to: receiver,
    currency_type: currencyType.value,
    currency_target: currencyTarget.value,
  });
  return (
    <div className="login" id="login">
      <div className="container">
        <div className="imageContainer">
          <Logo />
        </div>
        <div className="loginContainer">
          <h1 className="loginHeader">Send Money</h1>
          <p className="transfer-head">
            transfer money to your family and friend
          </p>
          <form className="inputContainer">
            <div className="loginDetails">
              <label htmlFor="">Amount</label>
              <input
                type="number"
                onChange={(e) => setAmount(e.target.value)}
                placeholder="amount to send..."
                name="amount"
              />
            </div>
            <div className="loginDetails">
              <label htmlFor="">Source Currency</label>
              <Select
                onChange={setCurrencyType}
                options={options}
                defaultValue={currencyType}
              />
            </div>
            <div className="loginDetails">
              <label htmlFor="">target Currency</label>
              <Select
                onChange={setCurrencyTarget}
                options={options}
                defaultValue={currencyTarget}
              />
            </div>
            <div className="loginDetails">
              <label htmlFor="">Receiver</label>
              <input
                type="email"
                onChange={(e) => setReceiver(e.target.value)}
                placeholder="email..."
                name="email_to"
              />
            </div>
            <div className="loginButton">
              <Lock className="logo" />
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TransferPage;
