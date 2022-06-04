import DashboardIcon from "@mui/icons-material/Dashboard";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import "./sidebar.scss";
import { useDispatch } from "react-redux";
<<<<<<< HEAD
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import TopicIcon from "@mui/icons-material/Topic";
import SchemaIcon from "@mui/icons-material/Schema";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import StarIcon from "@mui/icons-material/Star";
=======
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import TopicIcon from '@mui/icons-material/Topic';
import SchemaIcon from '@mui/icons-material/Schema';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import StarIcon from '@mui/icons-material/Star';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import DuoIcon from '@mui/icons-material/Duo';
import { Button, Paper } from "@mui/material";
import CoPresentIcon from '@mui/icons-material/CoPresent';
>>>>>>> main

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const [user, setUser] = useState(null);

  const dispatchLogOut = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    try {
      setUser(JSON.parse(localStorage.getItem("profile")));
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
          <span className="logo">Admin | RMA</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Paper>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <li>
                <DashboardIcon className="icon" />
                <span>Dashboard</span>
              </li>
            </Link>
          </Paper>

          <p className="title">Admin Management</p>
<<<<<<< HEAD
          <Link
            to={"/admin-management/user-reservation"}
            style={{ textDecoration: "none" }}
          >
            <li>
              <PersonOutlineOutlinedIcon className="icon" />
              <span>User Reservation</span>
            </li>
          </Link>
          <Link
            to={"/admin-management/alocate-panel"}
            style={{ textDecoration: "none" }}
          >
            <li>
              <PersonOutlineOutlinedIcon className="icon" />
              <span>Alocate Panels</span>
            </li>
          </Link>
          <Link
            to={"/admin-management/materials"}
            style={{ textDecoration: "none" }}
          >
            <li>
              <PersonOutlineOutlinedIcon className="icon" />
              <span>Materials</span>
            </li>
          </Link>
          <p className="title">Staff Management</p>
          <Link to={"/staff-management"} style={{ textDecoration: "none" }}>
            <li>
              <StarIcon className="icon" />
              <span style={{ fontSize: "18px", color: "#00008B" }}>
                Supervisor <br />
                Co-Supervisor
              </span>
            </li>
          </Link>
          <li>
            <DashboardIcon className="icon" style={{ marginLeft: "30px" }} />
            <span>Dashboard</span>
          </li>

          <Link to={"/research-topics"} style={{ textDecoration: "none" }}>
            <li>
              <TopicIcon className="icon" style={{ marginLeft: "30px" }} />
              <span>Research Topics</span>
            </li>
          </Link>

          <Link to={"/marking-scheme"} style={{ textDecoration: "none" }}>
            <li>
              <SchemaIcon className="icon" style={{ marginLeft: "30px" }} />
              <span>Marking Scheme</span>
            </li>
          </Link>

          <Link to={"/research-document"} style={{ textDecoration: "none" }}>
            <li>
              <DocumentScannerIcon
                className="icon"
                style={{ marginLeft: "30px" }}
              />
              <span>Research Documents</span>
            </li>
          </Link>
=======
          <Paper>
            <Link to={"/admin-management"} style={{ textDecoration: "none" }}>
              <li>
                <PersonOutlineOutlinedIcon className="icon" />
                <span>Admin Management</span>
              </li>
            </Link>
          </Paper>


          
          <p className="title" style={{ marginTop: '40px'}}>Staff Management</p>
          <Paper>
          <Link to={"/staff-management"} style={{ textDecoration: "none" }}>
            <li>
              <PeopleAltIcon className="icon" />
              <span>Supervisor<br/>Co-Supervisor</span>
            </li>
          </Link>
          </Paper>
          
          <Paper>
            <Link to={"/research-topics"} style={{ textDecoration: "none" }}>
              <li><TopicIcon className="icon"/><span>Research Topics</span></li>
            </Link>
          </Paper>

          <Paper>
            <Link to={"/marking-scheme"} style={{ textDecoration: "none" }}>
              <li><SchemaIcon className="icon" /><span>Marking Scheme</span></li>
            </Link>
          </Paper>

          <Paper>
            <Link to={"/research-document"} style={{ textDecoration: "none" }}>
              <li><DocumentScannerIcon className="icon" /><span>Research Documents</span></li>
            </Link>
          </Paper>

          <Paper>
            <Link to={"/chat-function"} style={{ textDecoration: "none" }}>
              <li><DuoIcon className="icon" /><span>Chat with Us!</span></li>
            </Link>
          </Paper>


          <p className="title" style={{ marginTop: '40px'}}>Panel Members</p>
          <Paper>
            <Link to={"#"} style={{ textDecoration: "none" }}>
              <li><PeopleAltIcon className="icon"/><span>Panel Members</span></li>
            </Link>
          </Paper>

          <Paper>
            <Link to={"#"} style={{ textDecoration: "none" }}>
              <li><TopicIcon className="icon"/><span>Research Topics</span></li>
            </Link>
          </Paper>

          <Paper>
            <Link to={"#"} style={{ textDecoration: "none" }}>
              <li><SchemaIcon className="icon"/><span>Presentation Marking Scheme</span></li>
            </Link>
          </Paper>

          <Paper>
            <Link to={"#"} style={{ textDecoration: "none" }}>
              <li><CoPresentIcon className="icon"/><span>Presentation Documents</span></li>
            </Link>
          </Paper>

>>>>>>> main

          {/* <Link to={"/login"} style={{ textDecoration: "none" }}> */}
          <li onClick={logout} style={{ marginTop: "20%" }}>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
          {/* </Link> */}
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
      <div style={{ margin: "20px" }}>
        <h5>
          {user != null ? user?.result.name : "Currently No User Available"}
        </h5>
      </div>
    </div>
  );
};

export default Sidebar;
