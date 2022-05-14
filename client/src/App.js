import { useContext } from "react";
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import { DarkModeContext } from "./context/darkModeContext";
import { userInput } from "./formSource";
import Auth from "./pages/auth/Auth";
import Home from "./pages/home/Home";
import List from "./pages/list/list";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Registration from "./pages/registration/Registration";
import Single from "./pages/single/Single";
import UnderContraction from "./pages/underContraction/UnderContraction";
import "./style/dark.scss";

function App() {

  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route index element={<Home />} />
            <Route path="auth" element={<Auth />} />
            <Route path="login" element={<Login />} />
            <Route path="registration" element={<Registration />} />
            <Route path="users" >
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New inputs={userInput} title={"Add New User"} />} />
            </Route>
            <Route path="products" >
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
            <Route path="orders" >
              <Route index element={<List />} />
              <Route path=":ordersId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
            <Route path="delivery" >
              <Route index element={<List />} />
              <Route path=":deliveryId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
          </Route>
          <Route path="/under-construction*" >
            <Route index element={<UnderContraction />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
