
import DashboardIcon from "@mui/icons-material/Dashboard";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import "./sidebar.scss";
import { useDispatch } from "react-redux";
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import TopicIcon from '@mui/icons-material/Topic';
import SchemaIcon from '@mui/icons-material/Schema';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import StarIcon from '@mui/icons-material/Star';

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
          <span className="logo">Client | RMA</span>
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


          {/* <p className="title">Student Management</p>
          <Link to={"/student-management"} style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineOutlinedIcon className="icon" />
              <span>Student Management</span>
            </li>
          </Link>


          <p className="title">Tutorial Management</p>
          <Link to={"/tutorial-management"} style={{ textDecoration: "none" }}>
            <li>
              <BookmarksSharpIcon className="icon" />
              <span>Tutorial Management</span>
            </li>
          </Link> */}


          <p className="title">Staff Management</p>
          <Link to={"/staff-management"} style={{ textDecoration: "none" }}>
            <li><StarIcon className="icon" /><span style={{fontSize: '18px', color: '#00008B'}}>Supervisor <br/>Co-Supervisor</span></li>
          </Link>
          
            <li><DashboardIcon className="icon" style={{marginLeft: '30px'}}/><span>Dashboard</span></li>

          <Link to={"/research-topics"} style={{ textDecoration: "none" }}>
            <li><TopicIcon className="icon" style={{marginLeft: '30px'}}/><span>Research Topics</span></li>
          </Link>

          <Link to={"/marking-scheme"} style={{ textDecoration: "none" }}>
            <li><SchemaIcon className="icon" style={{marginLeft: '30px'}}/><span>Marking Scheme</span></li>
          </Link>

            <li><DocumentScannerIcon className="icon" style={{marginLeft: '30px'}}/><span>Research Documents</span></li>


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
