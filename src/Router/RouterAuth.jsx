import { Navigate } from "react-router-dom";
import { useState } from "react";
import { users } from "./AuthData";
function RouterAuth({ children }) {
  const [data, setdata] = useState(
    JSON.parse(localStorage.getItem("user-auth"))
  );
  if (data == null) {
    return <Navigate to="/" />;
  }
  if (
    users.filter(
      (user) => user.user === data.username && user.password === data.password
    ).length == 0
  ) {
    return <Navigate to="/" />;
  }

  return children;
}

export default RouterAuth;
