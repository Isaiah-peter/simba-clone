import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import close from "../../images/cross.png";
import success from "../../images/correct.png";
import pending from "../../images/wall-clock.png";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "emailTo", headerName: "Email To", width: 200 },
  { field: "emailFrom", headerName: "Email from", width: 200 },
  {
    field: "amount",
    headerName: "Amount",
    type: "number",
    width: 130,
  },
  {
    field: "created_at",
    headerName: "Created At",
    sortable: false,
    width: 200,
  },
  {
    field: "currency_type",
    headerName: "Currency",
    width: 200,
  },
  {
    field: "status",
    headerName: "Status",
    width: 130,
    renderCell: (params) => {
      if (params.row.status === "successful") {
        return (
          <div className="status">
            <img className="statusImage" src={success} alt="" />
            <p className="success">{params.row.status}</p>
          </div>
        );
      }
      if (params.row.status === "pending") {
        return (
          <div className="status">
            <img className="statusImage" src={pending} alt="" />
            <p className="pend">{params.row.status}</p>
          </div>
        );
      }
      if (params.row.status === "fail") {
        return (
          <div className="status">
            <img className="statusImage" src={close} alt="" />
            <p className="fail">{params.row.status}</p>
          </div>
        );
      }
    },
  },
];

const rows = [
  {
    id: 1,
    emailTo: "Snow",
    emailFrom: "Jon",
    amount: 35,
    created_at: 2333,
    currency_type: "USD",
    status: "successful",
  },
  {
    id: 2,
    emailTo: "Snow",
    emailFrom: "Jon",
    amount: 35,
    created_at: 2333,
    currency_type: "USD",
    status: "successful",
  },
  {
    id: 3,
    emailTo: "Snow",
    emailFrom: "Jon",
    amount: 35,
    created_at: 2333,
    currency_type: "USD",
    status: "successful",
  },
  {
    id: 4,
    emailTo: "Snow",
    emailFrom: "Jon",
    amount: 35,
    created_at: 2333,
    currency_type: "GPD",
    status: "successful",
  },
  {
    id: 5,
    emailTo: "Snow",
    emailFrom: "Jon",
    amount: 35,
    created_at: 2333,

    currency_type: "USD",
    status: "successful",
  },
  {
    id: 6,
    emailTo: "Snow",
    emailFrom: "Jon",
    amount: 35,
    created_at: 2333,
    currency_type: "USD",
    status: "pending",
  },
  {
    id: 7,
    emailTo: "Snow",
    emailFrom: "Jon",
    amount: 35,
    created_at: 2333,
    currency_type: "USD",
    status: "pending",
  },
  {
    id: 8,
    emailTo: "Snow",
    emailFrom: "Jon",
    amount: 35,
    created_at: 2333,
    currency_type: "USD",
    status: "fail",
  },
  {
    id: 9,
    emailTo: "Snow",
    emailFrom: "Jon",
    amount: 35,
    created_at: 2333,
    currency_type: "USD",
    status: "fail",
  },
];

export default function DataTable() {
  return (
    <div style={{ height: 450, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
