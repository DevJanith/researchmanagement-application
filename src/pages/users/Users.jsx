import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./users.scss";

const Users = () => {
  return (
    <div className="users">
      <Sidebar />
      <div className="usersContainer">
        <Navbar />
        experiment
        <span className="test">Test</span>
      </div>
    </div>
  );
};

export default Users;
