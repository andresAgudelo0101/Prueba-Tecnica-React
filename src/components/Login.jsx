import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [userData, setuserData] = useState({
    username: "",
    password: "",
  });

  const handleInput = (e) => {
    e.prevent;
    const newData = { ...userData };
    newData[e.target.id] = e.target.value;
    setuserData(newData);
  };

  const onHandleSubmit = () => {
    window.localStorage.setItem("user-auth", JSON.stringify(userData));
    navigate("/home");
  };

  return (
    <div className=" flex flex-col justify-center items-center h-screen w-full bg-violet-800">
      <div className=" flex flex-col bg-white shadow-2xl w-5/6 md:w-96 h-3/4 md:h-96 gap-4 justify-center items-center rounded-md text-gray-800 ">
        <h1 className=" font-bold text-6xl md:text-5xl text-orange-400">
          Log<span className=" text-violet-800">in</span>
        </h1>
        <input
          type="text"
          className="h-14 block w-5/6 px-4 py-2 text-xl font-normal text-gray-700 bg-white  border-2 border-gray-300 rounded-lg  focus:text-violet-800 focus:bg-white focus:border-violet-800 focus:outline-none"
          placeholder="user: admin"
          onChange={(e) => handleInput(e)}
          id="username"
          value={userData.username}
        />
        <input
          type="password"
          className="h-14 block w-5/6 px-4 py-2 text-xl font-normal text-gray-700 bg-white  border-2 border-gray-300 rounded-lg  focus:text-violet-800 focus:bg-white focus:border-violet-800 focus:outline-none"
          placeholder="password: admin"
          onChange={(e) => handleInput(e)}
          id="password"
          value={userData.password}
        />
        <button
          onClick={onHandleSubmit}
          className=" px-6 py-2 rounded-md font-bold text-lg bg-orange-400  text-white  hover:bg-violet-800 hover:shadow-2xl  hover:shadow-violet-800"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Login;
