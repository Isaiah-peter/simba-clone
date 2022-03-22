import React from "react";
import "./dashboard.css";
import dollar from "../../images/dollar.jpg";
import euro from "../../images/euro.jpg";
import pounds from "../../images/pounds.jpg";
import DataTable from "./Table";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="topbar">
        <div className="left">
          <h1>Cashout</h1>
          <div className="money">
            <div className="currency">
              <img src={dollar} alt="" />
              <p>1000</p>
            </div>
            <div className="currency">
              <img src={euro} alt="" />
              <p>1000</p>
            </div>
            <div className="currency">
              <img src={pounds} alt="" />
              <p>1000</p>
            </div>
          </div>
        </div>
        <div className="right">
          <button>Logout</button>
        </div>
      </div>
      <div className="maindetails">
        <h1>Transcation Details</h1>
        <DataTable />
      </div>
    </div>
  );
};

export default Dashboard;
