import "./adddestination.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { addDestination } from "../../api/fetch";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


const AddDestination = () => {

  const [form, setForm] = useState({
    destination_name: "",
    description: "",
    region: "",
    city: "",
    transport_recomendation: "",
    picture: null,
    price: 0,
  })

  const dispatch = useDispatch()

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setForm((prevForm) => ({
      ...prevForm,
      picture: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('destination_name', form.destination_name);
    formData.append('description', form.description);
    formData.append('region', form.region);
    formData.append('city', form.city);
    formData.append('transport_recomendation', form.transport_recomendation);
    formData.append('image', form.picture);
    formData.append('price', form.price);

    dispatch(addDestination(formData))

    console.log(form.picture)
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Destination</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                form.picture
                  ? URL.createObjectURL(form.picture)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label>Destination</label>
                <input
                  type="text"
                  name="destination_name"
                  onChange={handleInputChange}
                  placeholder="Enter destination name" />
              </div>
              <div className="formInput">
                <label>Description</label>
                <input
                  type="text"
                  name="description"
                  onChange={handleInputChange}
                  placeholder="Enter description" />
              </div>
              <div className="formInput">
                <label>Region</label>
                <input
                  type="text"
                  name="region"
                  onChange={handleInputChange}
                  placeholder="Enter region"
                />
              </div>
              <div className="formInput">
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  onChange={handleInputChange}
                  placeholder="Enter city"
                />
              </div>
              <div className="formInput">
                <label>Transport Recommendation</label>
                <input
                  type="text"
                  name="transport_recomendation"
                  onChange={handleInputChange}
                  placeholder="Enter transport recommendation"
                />
              </div>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  name="image"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
              </div>
              <div className="formInput">
                <label>Price</label>
                <input type="number"
                  name="price"
                  onChange={handleInputChange}
                  placeholder="Enter price" />
              </div>

              {/* {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))} */}
              <button
                onClick={handleSubmit}
              >Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDestination;
