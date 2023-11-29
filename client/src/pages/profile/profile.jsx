import React from "react";
import "./profile.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [data, setData] = useState("");
  const { isLogin } = useSelector((state) => state.auth);
  const { profiles } = useSelector((state) => state.profile);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (profiles != null) {
      setData(profiles);
    }
  }, [profiles]);

  console.log(profiles);

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
              <img
                src={profiles ? profiles.profile.profile_image : "https://i.pinimg.com/564x/d9/7b/bb/d97bbb08017ac2309307f0822e63d082.jpg"}
                alt=""
                className="profileImg"
              />
              <div className="details">
                <h1 className="itemTitle">{profiles? profiles.username : "Loading"}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{profiles? profiles.email: "Loading"}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Role:</span>
                  <span className="itemValue">{profiles? profiles.role: "Loading"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="top">
          <div className="left">
            <h1 className="title">Change Password</h1>
            <div className="item">
                <div className="right">
                  <form>
                    <div className="formInput">
                      <label>Old Password</label>
                      <input
                        type="password"
                        placeholder="Enter old password"
                      />
                    </div>
                  </form>
                </div>
                <div className="right">
                  <form>
                    <div className="formInput">
                      <label>New Password</label>
                      <input
                        type="password"
                        placeholder="Enter new password"
                      />
                    </div>
                  </form>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
