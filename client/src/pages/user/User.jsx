import "./user.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "./usersource";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Navbar, Sidebar } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../../api/user.fetch";

const User = () => {
  const [data, setData] = useState([]);

  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };

  const { isLogin } = useSelector((state) => state.auth);
  const { users } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log(users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  useEffect(() => {
    setData(users);
  }, [users]);

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, [isLogin, navigate]);

  // const actionColumn = [
  //   {
  //     field: "action",
  //     headerName: "Action",
  //     width: 200,
  //     renderCell: (params) => {
  //       return (
  //         <div className="cellAction">
  //           <Link to="/users/test" style={{ textDecoration: "none" }}>
  //             <div className="viewButton">View</div>
  //           </Link>
  //           <div
  //             className="deleteButton"
  //             onClick={() => handleDelete(params.row.id)}
  //           >
  //             Delete
  //           </div>
  //         </div>
  //       );
  //     },
  //   },
  // ];

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="datatable">
          <div className="datatableTitle">User</div>
          <DataGrid
            className="datagrid"
            rows={data}
            columns={userColumns}
            pageSize={9}
            rowsPerPageOptions={[9]}
            // columns={userColumns.concat(actionColumn)}
            // checkboxSelection
          />
        </div>
      </div>
    </div>
  );
};

export default User;
