import { BrowserRouter, Route, Routes } from "react-router-dom";
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
            </RouterAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
