import Datatable from "../../components/datatable/Datatable";
import Form from "../../components/form/Form";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./list.scss";

const list = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="Container">
          <div className="tableContainer">
            <Datatable />
          </div>
          <div className="formContainer">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default list;
