 import "./adddestination.scss";
 import Sidebar from "../../components/sidebar/Sidebar";
 import Navbar from "../../components/navbar/Navbar";
 import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
 import { useState } from "react";
 import { addDestination } from "../../api/fetch";
 import { useDispatch } from "react-redux";
 import { useNavigate } from "react-router-dom";

const AddDestination = () => {
  const [destination_name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");
  const [transport_recomendation, setTransport_recomendation] = useState("");
  const [picture, setPicture] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(destination_name);
  console.log(description);
  console.log(region);
  console.log(city);
  console.log(price);
  console.log(transport_recomendation);
  console.log(picture);

  const save = (e) => {
    e.preventDefault();
    dispatch(addDestination(destination_name,description,region,city,price,transport_recomendation,picture,
      ));
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
          {/* <div className="left">
            <img
              src={
                form.picture
                  ? URL.createObjectURL(form.picture)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            /> */}
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label>Destination</label>
                <input
                  type="text"
                  name="destination_name"
                  onChange={(e) => setName({ destination_name: e.target.value })}
                  placeholder="Enter destination name"
                />
              </div>
              <div className="formInput">
                <label>Description</label>
                <input 
                  type="text"
                  name="description"
                  onChange={(e) => setDescription({ description: e.target.value })}
                  placeholder="Enter description"
                />
              </div>
              <div className="formInput">
                <label>Region</label>
                <input
                  type="text"
                  onChange={(e) => setRegion({ region: e.target.value })}
                  placeholder="Enter region"
                />
              </div>
              <div className="formInput">
                <label>City</label>
                <input
                  type="text"
                  onChange={(e) => setCity({ city: e.target.value })}
                  placeholder="Enter city"
                />
              </div>
              <div className="formInput">
                <label>Transport Recommendation</label>
                <input
                  type="text"
                  onChange={(e) => setTransport_recomendation({ transport_recomendation: e.target.value })}
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
                  onChange={(e) => setPicture({ picture: e.target.value })}
                  style={{ display: "none" }}
                />
              </div>
              <div className="formInput">
                <label>Price</label>
                <input
                  type="number"
                  onChange={(e) => setPrice({ price: e.target.value })}
                  placeholder="Enter price"
                />
              </div>

              {/* {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))} */}
              <button onClick={save}>Send</button>
            </form>
          </div>
        </div>
      </div>
  
  );
};

export default AddDestination;







































