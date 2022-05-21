import Datatable from "../../components/datatable/Datatable";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
// import Form from "../../components/form-api-sample/Form";
// import Datatable from "../../components/datatable-api-sample/Datatable";
import "./list.scss";

const list = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="datatable">
          <Datatable />
        </div>

        {/* <div className="datatable-api">
          <div className="left">
            <Datatable />
          </div>
          <div className="right">
            <Form />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default list;
