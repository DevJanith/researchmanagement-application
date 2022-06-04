import BiotechIcon from "@mui/icons-material/Biotech";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import RequestPageIcon from "@mui/icons-material/RequestPage";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt";
import { Button, Paper } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { getUser } from "../../pages/auth/Session";
import "./sidebar.scss";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const [user, setUser] = useState(null);

  const dispatchLogOut = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    try {
      setUser(getUser());
    } catch (error) {
      console.log(error);
    }
  }, []);

  const logout = () => {
    dispatchLogOut({ type: "LOGOUT" });

    navigate("/auth");
  };

  return (
    <div className="sidebar">
      <div className="top">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <span className="logo">Student | RMA</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Student Management</p>
          <Paper>
            <Link to={"/student-management"} style={{ textDecoration: "none" }}>
              <li>
                <DashboardIcon className="icon" />
                <span>Dashboard</span>
              </li>
            </Link>
          </Paper>
          <Paper>
            <Link
              to={"/student-management/group"}
              style={{ textDecoration: "none" }}
            >
              <li>
                <GroupAddIcon className="icon" />
                <span>Group </span>
              </li>
            </Link>
          </Paper>
          <Paper>
            <Link
              to={"/student-management/research"}
              style={{ textDecoration: "none" }}
            >
              <li>
                <BiotechIcon className="icon" />
                <span>Research </span>
              </li>
            </Link>
          </Paper>
          <Paper>
            <Link
              to={"/student-management/request"}
              style={{ textDecoration: "none" }}
            >
              <li>
                <RequestPageIcon className="icon" />
                <span>Request </span>
              </li>
            </Link>
          </Paper>
          <Paper>
            <Link
              to={"/student-management/document"}
              style={{ textDecoration: "none" }}
            >
              <li>
                <DocumentScannerIcon className="icon" />
                <span>Doc </span>
              </li>
            </Link>
          </Paper>
          <Paper>
            <Link
              to={"/student-management/communication"}
              style={{ textDecoration: "none" }}
            >
              <li>
                <MarkUnreadChatAltIcon className="icon" />
                <span>Com </span>
              </li>
            </Link>
          </Paper>
        </ul>
      </div>
      {/* <div className="bottom">
        <Button variant="outlined" color="error" onClick={logout}>
          Log out
        </Button>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div> */}
    </div>
  );
};

export default Sidebar;
