import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import StoreIcon from "@mui/icons-material/Store";
import PaymentIcon from "@mui/icons-material/Payment";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="sidebar">
      <div className="top">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <span className="logo">UI Admin Template</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to={"/users"} style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineOutlinedIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to={"/products"} style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <Link to={"/orders"} style={{ textDecoration: "none" }}>
            <li>
              <PaymentIcon className="icon" />
              <span>Orders</span>
            </li>
          </Link>
          <Link to={"/delivery"} style={{ textDecoration: "none" }}>
            <li>
              <LocalShippingOutlinedIcon className="icon" />
              <span>Delivery</span>
            </li>
          </Link>
          <p className="title">USEFUL</p>
          <Link to={"/under-construction"} style={{ textDecoration: "none" }}>
            <li>
              <QueryStatsIcon className="icon" />
              <span>Stats</span>
            </li>
          </Link>
          <Link to={"/under-construction"} style={{ textDecoration: "none" }}>
            <li>
              <NotificationsNoneIcon className="icon" />
              <span>Notifications</span>
            </li>
          </Link>
          <p className="title">SERVICE</p>
          <Link to={"/under-construction"} style={{ textDecoration: "none" }}>
            <li>
              <SettingsSystemDaydreamIcon className="icon" />
              <span>System Health</span>
            </li>
          </Link>
          <Link to={"/under-construction"} style={{ textDecoration: "none" }}>
            <li>
              <PsychologyOutlinedIcon className="icon" />
              <span>Logs</span>
            </li>
          </Link>
          <Link to={"/under-construction"} style={{ textDecoration: "none" }}>
            <li>
              <SettingsIcon className="icon" />
              <span>Settings</span>
            </li>
          </Link>
          <p className="title">USER</p>
          <Link to={"/users/:id"} style={{ textDecoration: "none" }}>
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Profile</span>
            </li>
          </Link>
          <Link to={"/under-construction"} style={{ textDecoration: "none" }}>
            <li>
              <ExitToAppIcon className="icon" />
              <span>Logout</span>
            </li>
          </Link>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
