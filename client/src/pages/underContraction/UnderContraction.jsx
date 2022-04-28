import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./underContraction.scss";

const UnderContraction = () => {
  return (
    <div className="underConstruction">
      <Sidebar />
      <div className="underConstructionContainer">
        <Navbar />
        <div className="underConstruction">
          <h1 className="title">Under Construction</h1>
        </div>
      </div>
    </div>
  );
};

export default UnderContraction;
