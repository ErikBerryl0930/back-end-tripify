import "./destination.scss";
import { DataGrid } from "@mui/x-data-grid";
import { destinationColumns, destinationRows } from "./destinationsource";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Navbar, Sidebar } from "../../components";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Destination = () => {
  const [data, setData] = useState(destinationRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

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
