import "./categoryform.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import { addCategory } from "../../api/category.fetch";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const AddCategory = () => {
  const [category_name, setName] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(category_name);

  const save = (e) => {
    e.preventDefault();
    dispatch(addCategory(category_name));
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Category</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              <div className="formInput">
                <label>Category</label>
                <input
                  onChange={(e) => setName({ category_name: e.target.value })}
                  type="text"
                  placeholder="Enter category name"
                />
              </div>
              <button onClick={save}>Add</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
