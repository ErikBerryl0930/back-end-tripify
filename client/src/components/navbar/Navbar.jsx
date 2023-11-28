import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getProfile } from "../../api/profile.fetch";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const [data, setData] = useState("");
  const { profiles } = useSelector((state) => state.profile);
  const udispatch = useDispatch();

  useEffect(() => {
    udispatch(getProfile());
  }, [udispatch]);

  useEffect(() => {
    if (profiles != null) {
      setData(profiles);
    }
  }, [profiles]);

  console.log(profiles);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <img
              src={profiles.user.profile.profile_image}
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
