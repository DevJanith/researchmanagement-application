import { useContext } from "react";
import {
  BrowserRouter, Navigate, Route, Routes
} from "react-router-dom";
import { DarkModeContext } from "./context/darkModeContext";
import Auth from "./pages/auth/Auth";
import CompositeTable from "./pages/CompositeTable/CompositeTable";
import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";
import GroupManagement from "./pages/StudentManagement/GroupManagement/GroupManagement";
import UnderContraction from "./pages/underContraction/UnderContraction";
import PrivateRoutes from "./PrivateRoutes";
import "./style/dark.scss";

function App() {

  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route path="auth" element={<Auth />} />
            <Route path="/under-construction*" element={<UnderContraction />} />
            <Route path="/404*" element={<NotFound />} />

            {/* <Route path="app" element={<Home />} /> */}
            {/* <Route path="login" element={<Login />} />
            <Route path="registration" element={<Registration />} /> */}
            <Route path="student-management" >
              <Route index element={<PrivateRoutes component={Home} />} />
              <Route path="group" element={<PrivateRoutes component={GroupManagement} />} />
              <Route path="table" element={<PrivateRoutes component={CompositeTable} />} />
            </Route>
            {/* <Route path="tutorial-management">
              <Route index element={<TutorialManagement />} />
            </Route>
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
            </Route> */}
          </Route>
          <Route path='*' element={<Navigate to='/404' replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
