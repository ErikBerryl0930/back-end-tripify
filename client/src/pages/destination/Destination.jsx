import "./destination.scss";
import { DataGrid } from "@mui/x-data-grid";
import { destinationColumns, destinationRows } from "./destinationsource";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Navbar, Sidebar } from "../../components";

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
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
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
            <Link to="/destinations/new" className="link">
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
              // checkboxSelection
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
