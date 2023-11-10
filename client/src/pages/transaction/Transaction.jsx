import "./transaction.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "./transactionsource";
import { useState } from "react";
import { Navbar, Sidebar } from "../../components";

const Transaction = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="datatable">
          <div className="datatableTitle">
            Transaction
          </div>
          <DataGrid
            className="datagrid"
            rows={data}
            columns={userColumns}
            pageSize={9}
            rowsPerPageOptions={[9]}
          />
        </div>
      </div>
    </div>
  );
};

export default Transaction;
