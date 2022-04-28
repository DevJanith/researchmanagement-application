import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import "./single.scss";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?cs=srgb&dl=pexels-nathan-cowley-1300402.jpg&fm=jpg"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Tom harde</h1>
                <div className="detailItem">
                  <span className="itemKey">Email : </span>
                  <span className="itemKey">JaneDoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone : </span>
                  <span className="itemKey">+94 768 523 525</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address : </span>
                  <span className="itemKey">
                    Elton st. 234, Garden Yd. NewYork
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country : </span>
                  <span className="itemKey">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title={"User spending's (Last 6 month)"} />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title"> Last transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
