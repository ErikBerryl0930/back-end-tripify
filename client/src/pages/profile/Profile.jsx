import React from "react";
import "./profile.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProfile } from "../../api/profile.fetch";

const Profile = () => {
  const [detail, setDetail] = useState("");
  const { isLogin } = useSelector((state) => state.auth);
  const { destination } = useSelector((state) => state.dest);
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile(+params.id));
  }, [dispatch, params.id]);
  
  useEffect(() => {
    if (destination != null) {
      setDetail(destination);
    }
  }, [destination]);
  
  console.log(detail);
  
  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, [isLogin, navigate]);

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <h1 className="title">Profile</h1>
            <div className="item">
              <img src={destination.picture} alt="" className="profileImg" />
              <div className="details">
                <h1 className="itemTitle">{destination.destination_name}</h1>
                <div className="detailItem">
                  <span className="itemKey">Full Name:</span>
                  <span className="itemValue">
                    {destination.description}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Username:</span>
                  <span className="itemValue">{destination.region}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{destination.region}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">{destination.region}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">{destination.city}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">{destination.transport_recomendation}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
