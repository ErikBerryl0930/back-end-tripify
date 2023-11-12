import "./adddestination.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const AddDestination = ({ inputs, title }) => {
  const [Name, setName] = useState("");
  const [Region, setRegion] = useState("");
  const [City, setCity] = useState("");
  const [Transport_rekomendation, setTransport_rekomendation] = useState("");
  const [Picture, setPicture] = useState("");
  const [Price, setPrice] = useState("");
  const [file, setfile] = useState("");
 
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
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label>Destination</label>
                <input type="text" placeholder="Enter destination name" />
              </div>
              <div className="formInput">
                <label>Description</label>
                <input onChange={(e) => setName({ destination_name: e.target.value })} type="text" placeholder="Enter description" />
              </div>
              <div className="formInput">
                <label>Choose Region</label>
                <select class="select">
                  <option onChange={(e) => setRegion({ region: e.target.value })} value="1">One</option>
                  <option  onChange={(e) => setRegion({ region: e.target.value })} value="2">Two</option>
                  <option onChange={(e) => setRegion({ region: e.target.value })} value="3">Three</option>
                </select>
              </div>
              <div className="formInput">
                <label>Choose City</label>
                <select class="select">
                  <option onChange={(e) => setCity({ city: e.target.value })} value="1">One</option>
                  <option onChange={(e) => setCity({ city: e.target.value })} value="2">Two</option>
                  <option onChange={(e) => setCity({ city: e.target.value })} value="3">Three</option>
                </select>
              </div>
              <div className="formInput">
                <label>Transport Recommendation</label>
                <input onChange={(e) => setTransport_rekomendation({ transport_recomendation: e.target.value })}
                  type="text"
                  placeholder="Enter transport recommendation"
                />
              </div>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input onChange={(e) => setPicture({ picture: e.target.value })}
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                />
              </div>
              <div className="formInput">
                <label>Price</label>
                <input onChange={(e) => setPrice({ price: e.target.value })}type="number" placeholder="Enter price" />
              </div>

              {/* {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))} */}
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDestination;