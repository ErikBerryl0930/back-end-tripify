import "./adddestination.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import { editDestination } from "../../api/destination.fetch";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import { getDestinationById } from "../../api/destination.fetch";

const editDestination = () => {
  const [destination_name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [region, setRegion] = useState("");
  const [price, setPrice] = useState("");
  const [transport_recomendation, setTransport_recomendation] = useState("");
  const [picture, setPicture] = useState("");
  const { destination } = useSelector((state) => state.destination);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const save = (e) => {
    e.preventDefault();
    dispatch(editDestination(+params.id, destination_name,description,region,price,transport_recomendation,
       picture ));
  };

  useEffect(() => {
    dispatch(getDestinationById(+params.id));
  }, [dispatch, params.id]);

  
  return (
    

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
       
  
  );
};





































    // <div className="new">
    //   <Sidebar />
    //   <div className="newContainer">
    //     <Navbar />
    //     <div className="top">
    //       <h1>Edit Destination</h1>
    //     </div>
    //     <div className="bottom">
    //       <div className="right">
    //         <form>
    //           <div className="formInput">
    //             <label>Category</label>
    //             <input
    //               defaultValue={category.category_name}
    //               onChange={(e) => setName({ category_name: e.target.value })}
    //               type="text"
    //               placeholder="Enter category name"
    //             />
    //           </div>
    //           <button onClick={save}>Save</button>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    
//   );
// };

//export default EditCategory;
