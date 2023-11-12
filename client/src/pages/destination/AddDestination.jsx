import "./adddestination.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {getAddDestinations} from "../../api/Destination";


const AddDestination = ({ inputs, title }) => {
  const dispatch = useDispatch ();
  const [destination_name, setName] = useState("");
  const [description, setDescription] = useState("");
  
 
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");
  const [transport_recomendation, setTransport_recomendation] = useState("");
  const [picture, setPicture] = useState("");
  const [price, setPrice] = useState("");
  const [file, setfile] = useState("");
  const save = (e) => {
    e.preventDefault()
    dispatch(getAddDestinations({destination_name,description,region,city,transport_recomendation,picture,price}))
    

  }
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
                <input onChange={(e) => setName({ destination_name: e.target.value })} type="text" placeholder="Enter destination name" />
              </div>
              <div className="formInput">
                <label>Description</label>
                <input onChange={(e) => setDescription({ description: e.target.value })} type="text" placeholder="Enter description" />
              </div>
              <div className="formInput">
                <label>Region</label>
                <input onChange={(e) => setRegion({ region: e.target.value })} type="text" placeholder="Enter description" />
              </div>
              <div className="formInput">
                <label>City</label>
                <input onChange={(e) => setCity({ city: e.target.value })} type="text" placeholder="Enter description" />
              </div>
             
              <div className="formInput">
                <label>Transport Recommendation</label>
                <input onChange={(e) => setTransport_recomendation({ transport_recomendation: e.target.value })}
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
               <button
                onClick={save}
              >Add</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDestination;