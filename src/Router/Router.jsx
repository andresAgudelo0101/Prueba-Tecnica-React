import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Login from "../components/Login";
import Home from "../pages/Home";
import LoginAuth from "./LoginAuth";
import RouterAuth from "./RouterAuth";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LoginAuth>
              <Login />
            </LoginAuth>
          }
        />

        <Route
          path="/home"
          element={
            <RouterAuth>
              <Home />
              <Footer/>
            </RouterAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
