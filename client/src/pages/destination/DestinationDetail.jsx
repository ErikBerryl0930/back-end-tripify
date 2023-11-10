import React from "react";
import "./destinationdetail.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const DestinationDetail = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            {/* <div className="editButton">Edit</div> */}
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/18510514/pexels-photo-18510514/free-photo-of-a-close-up-of-apples-on-a-tree.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Destination Name</h1>
                <div className="detailItem">
                  <span className="itemKey">Description:</span>
                  <span className="itemValue">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Region:</span>
                  <span className="itemValue">Jawa Timur</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">City:</span>
                  <span className="itemValue">Malang</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Transport Recommendation:</span>
                  <span className="itemValue">Bus</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Ticket Price:</span>
                  <span className="itemValue">Rp 10000</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Rating:</span>
                  <span className="itemValue">5</span>
                </div>
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
