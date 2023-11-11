import "./transaction.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "./transactionsource";
import { useEffect, useState } from "react";
import { Navbar, Sidebar } from "../../components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTrans } from "../../api/transaction.fetch";

const Transaction = () => {
  const [data, setData] = useState([]);

  const { isLogin } = useSelector((state) => state.auth);
  const { transactions } = useSelector((state) => state.transaction);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTrans());
  }, [dispatch]);

  useEffect(() => {
    setData(transactions);
  }, [transactions]);

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, [isLogin, navigate]);

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="datatable">
          <div className="datatableTitle">Transaction</div>
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
