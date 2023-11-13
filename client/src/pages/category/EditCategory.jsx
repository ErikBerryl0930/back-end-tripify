import "./categoryform.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import { editCategory } from "../../api/category.fetch";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import { getCategoryById } from "../../api/category.fetch";

const EditCategory = () => {
  const [category_name, setName] = useState("");
  const { category } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const save = (e) => {
    e.preventDefault();
    dispatch(editCategory(+params.id, category_name));
    navigate('/categories');
  };

  useEffect(() => {
    dispatch(getCategoryById(+params.id));
  }, [dispatch, params.id]);

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
                  defaultValue={category.category_name}
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
