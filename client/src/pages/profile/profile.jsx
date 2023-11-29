import React from "react";
import "./profile.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { changePWD } from "../../api/profile.fetch";

const Profile = () => {

    const [form, setForm] = useState({
        newPassword: "",
        confNewPassword: ""
    })
    const [data, setData] = useState("");
    const { isLogin } = useSelector((state) => state.auth);
    const { profiles } = useSelector((state) => state.profile);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    useEffect(() => {
        console.log("Form Data:", form);
    }, [form]);

    useEffect(() => {
        if (profiles != null) {
            setData(profiles);
        }
    }, [profiles]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('newPassword', form.newPassword);
        formData.append('confNewPassword', form.confNewPassword);

        dispatch(changePWD(formData))
    }


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
                                src={data ?
                                    data.profile.profile_image :
                                    "https://i.pinimg.com/564x/d9/7b/bb/d97bbb08017ac2309307f0822e63d082.jpg"
                                }
                                alt=""
                                className="profileImg"
                            />
                            <div className="details">
                                <h1 className="itemTitle">{data ?
                                    data.username :
                                    "Loading"}</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Email:</span>
                                    <span className="itemValue">{data ?
                                        data.email : "Loaging"}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Role:</span>
                                    <span className="itemValue">{data ?
                                        data.role : "Loading"}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="top">
                    <form onSubmit={handleSubmit}>
                        <label>New Password:
                            <input type="password" name="newPassword" value={form.newPassword} onChange={handleInputChange} />
                        </label>
                        <label>Confirm New Password:
                            <input type="password" name="confNewPassword" value={form.confNewPassword} onChange={handleInputChange} />
                        </label>
                        <button type="submit">Submit</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Profile;
