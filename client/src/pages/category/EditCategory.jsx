import "./categoryform.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import { editCategory } from "../../api/category.fetch";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";

const EditCategory = () => {
  const [category_name, setName] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  console.log(category_name);

  const save = (e) => {
    e.preventDefault();
    dispatch(editCategory(category_name));
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Edit Category</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              <div className="formInput">
                <label>Category</label>
                <input
                  value={category_name}
                  onChange={(e) => setName({ category_name: e.target.value })}
                  type="text"
                  placeholder="Enter category name"
                />
              </div>
              <button onClick={save}>Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCategory;
