import { Navigate } from "react-router-dom";
import { users } from "./AuthData";
import { useState } from "react";

export default function LoginAuth({ children }) {
  const [data, setdata] = useState(
    JSON.parse(localStorage.getItem("user-auth"))
  );
  if (data !== null) {
    if (
      users.filter(
        (user) => user.user == data.username && user.password == data.password
      ).length >= 1
    ) {
      return <Navigate to="/home" />;
    }
  }

  return children;
}
