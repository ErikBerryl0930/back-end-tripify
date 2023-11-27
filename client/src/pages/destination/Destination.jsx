import "./destination.scss";
import { DataGrid } from "@mui/x-data-grid";
import { destinationColumns } from "./destinationsource";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Navbar, Sidebar } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteDestination, getDestinations } from "../../api/fetch";
import Swal from "sweetalert2";

const Destination = () => {
  const [data, setData] = useState([]);

  const handleDelete = (id) => {
    Swal.fire({
      text: "Are you sure want to delete?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteDestination(id));
        setData(data.filter((item) => item.id !== id));
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Destination successfully deleted",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const { isLogin } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { destinations } = useSelector((state) => state.dest);

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
              to={`/destinations/information/${params.row.id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">
                <InfoIcon />
              </div>
            </Link>
            <Link
              to={`/destinations/edit/${params.row.id}`}
              style={{ textDecoration: "none" }}
            >
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
