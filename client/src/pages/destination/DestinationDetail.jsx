import React from "react";
import "./destinationdetail.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDestinationDetail } from "../../api/fetch";
// import Chart from "../../components/chart/Chart";
// import List from "../../components/table/Table";

const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(number);
};

const DestinationDetail = () => {
  const [detail, setDetail] = useState("");
  const { isLogin } = useSelector((state) => state.auth);
  const { destination } = useSelector((state) => state.dest);
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDestinationDetail(+params.id));
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
            <h1 className="title">Information</h1>
            <div className="item">
              <img src={destination.picture} alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">{destination.destination_name}</h1>
                <div className="detailItem">
                  <span className="itemKey">Description:</span>
                  <span className="itemValue">
                    {destination.description}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Region:</span>
                  <span className="itemValue">{destination.region}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">City:</span>
                  <span className="itemValue">{destination.city}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Transport Recommendation:</span>
                  <span className="itemValue">{destination.transport_recomendation}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Ticket Price:</span>
                  <span className="itemValue">{rupiah(destination.price)}</span>
                </div>
                {/* <div className="detailItem">
                  <span className="itemKey">Rating:</span>
                  <span className="itemValue">5</span>
                </div> */}
              </div>
            </div>
          </div>
          {/* <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;
