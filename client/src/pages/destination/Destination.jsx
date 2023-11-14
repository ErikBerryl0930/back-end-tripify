import "./destination.scss";
import { DataGrid } from "@mui/x-data-grid";
import { destinationColumns, destinationRows } from "./destinationsource";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Navbar, Sidebar } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { getDestinations } from "../../api/destination.fetch";

const Destination = () => {
  const [data, setData] = useState([]);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const { isLogin } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { destinations } = useSelector((state) => state.destination);

  useEffect(() => {
    dispatch(getDestinations());
  }, [dispatch]);

  useEffect(() => {
    setData(destinations);
  }, [destinations]);

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, [isLogin, navigate]);

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to="/destinations/:destinationId"
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">
                <InfoIcon />
              </div>
            </Link>
            <Link to="/destinations/detail" style={{ textDecoration: "none" }}>
              <div className="editButton">
                <EditIcon />
              </div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              <DeleteIcon />
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="datatable">
          <div className="datatableTitle">
            Destination
            <Link to="/destinations/add" className="link">
              Add Destination
            </Link>
          </div>
          <div style={{ height: "100%", width: "100%" }}>
            <DataGrid
              className="datagrid"
              rows={data}
              columns={destinationColumns.concat(actionColumn)}
              pageSize={9}
              rowsPerPageOptions={[9]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
