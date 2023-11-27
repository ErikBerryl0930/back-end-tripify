import "./category.scss";
import { DataGrid } from "@mui/x-data-grid";
import { categoryColumns } from "./categorysource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Navbar, Sidebar } from "../../components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, removeCategory } from "../../api/category.fetch";
import Swal from "sweetalert2";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Category = () => {
  const [data, setData] = useState([]);

  const { isLogin } = useSelector((state) => state.auth);
  const { categories } = useSelector((state) => state.category);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    setData(categories);
  }, [categories]);

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, [isLogin, navigate]);

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
        dispatch(removeCategory(id));
        setData(data.filter((item) => item.id !== id));
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Category Successfully Deleted",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
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
              to={`/categories/edit/${params.row.id}`}
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
            Category
            <Link to="/categories/add" className="link">
              Add Category
            </Link>
          </div>
          <DataGrid
            className="datagrid"
            rows={data}
            columns={categoryColumns.concat(actionColumn)}
            pageSize={9}
            rowsPerPageOptions={[9]}
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
