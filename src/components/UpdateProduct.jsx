import { useState, useEffect } from "react";
import axios from "axios";

function UpdateProduct({ productId, setDisplayBtnEdit }) {
  const [dataUpdate, setdataUpdate] = useState({
    serial: "",
    connection_type: "",
    storage_system: "",
    condition: "",
    owner: "",
    location: "",
    manufacturer: "",
    purchase: 0,
    i_max: 0,
    i_b: 0,
    i_n: 0,
    seals: 0,
    created_at: "",
    updated_at: "",
  });

  const handleInput = (e) => {
    e.prevent;
    const newData = { ...dataUpdate };
    newData[e.target.id] = e.target.value;
    setdataUpdate(newData);
    console.log(newData);
  };

  const api_url = "https://ops.enerbit.dev/learning/api/v1/meters/";

  const getProduct = () => {
    fetch(api_url + productId)
      .then((res) => res.json())
      .then((data) => setdataUpdate(data));
  };

  useEffect(() => {
    getProduct();
    console.log(dataUpdate);
  }, []);

  const handleUpdate = () => {
    axios
      .patch(api_url + productId, dataUpdate)
      .then(function (response) {
        console.log(response);
        alert("successfully updated");
        setDisplayBtnEdit();
      })
      .catch(function (error) {
        console.log(error);
        if (error) {
          alert("error to update");
        }
      });
  };

  return (
    <div className="fixed  top-0 left-0 flex justify-center items-center w-full backdrop-brightness-50 rounded-sm h-screen  ">
      <div className="w-11/12 md:w-3/6 h-5/6 md:h-auto bg-white shadow-2xl rounded-md p-4 overflow-auto">
        <div className="flex justify-end w-full">
          <button
            className=" bg-red-600 py-1 px-3 rounded-sm text-white font-bold hover:rotate-90 "
            onClick={setDisplayBtnEdit}
          >
            X
          </button>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-2 gap-2 text-xl  text-gray-900 font-normal">
          <div className="flex flex-col  ">
            <label>serial</label>
            <input
              type="text"
              className="h-14 block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white  border-2 border-gray-300 rounded-lg  focus:text-violet-800 focus:bg-white focus:border-violet-800 focus:outline-none"
              onChange={(e) => handleInput(e)}
              id="serial"
              value={dataUpdate.serial}
              required
            />
          </div>
          <div className="flex flex-col  ">
            <label>connection type</label>
            <input
              type="text"
              placeholder="type directa"
              className="h-14 block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white  border-2 border-gray-300 rounded-lg  focus:text-violet-800 focus:bg-white focus:border-violet-800 focus:outline-none"
              onChange={(e) => handleInput(e)}
              id="connection_type"
              value={dataUpdate.connection_type}
            />
          </div>
          <div className="flex flex-col  ">
            <label>storage system</label>
            <input
              type="text"
              placeholder="type interno"
              className="h-14 block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white  border-2 border-gray-300 rounded-lg  focus:text-violet-800 focus:bg-white focus:border-violet-800 focus:outline-none"
              onChange={(e) => handleInput(e)}
              id="storage_system"
              value={dataUpdate.storage_system}
            />
          </div>
          <div className="flex flex-col  ">
            <label>condition</label>
            <input
              type="text"
              placeholder="type nuevo or usado"
              className="h-14 block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white  border-2 border-gray-300 rounded-lg  focus:text-violet-800 focus:bg-white focus:border-violet-800 focus:outline-none"
              onChange={(e) => handleInput(e)}
              id="condition"
              value={dataUpdate.condition}
            />
          </div>
          <div className="flex flex-col  ">
            <label>owner</label>
            <input
              type="text"
              placeholder="type RF"
              className="h-14 block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white  border-2 border-gray-300 rounded-lg  focus:text-violet-800 focus:bg-white focus:border-violet-800 focus:outline-none"
              onChange={(e) => handleInput(e)}
              id="owner"
              value={dataUpdate.owner}
            />
          </div>
          <div className="flex flex-col  ">
            <label>location</label>
            <input
              type="text"
              className="h-14 block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white  border-2 border-gray-300 rounded-lg  focus:text-violet-800 focus:bg-white focus:border-violet-800 focus:outline-none"
              onChange={(e) => handleInput(e)}
              id="location"
              value={dataUpdate.location}
            />
          </div>
          <div className="flex flex-col  ">
            <label>manufacturer</label>
            <input
              type="text"
              className="h-14 block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white  border-2 border-gray-300 rounded-lg  focus:text-violet-800 focus:bg-white focus:border-violet-800 focus:outline-none"
              onChange={(e) => handleInput(e)}
              id="manufacturer"
              value={dataUpdate.manufacturer}
            />
          </div>
          <div className="flex flex-col  ">
            <label>purchase</label>
            <input
              type="text"
              className="h-14 block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white  border-2 border-gray-300 rounded-lg  focus:text-violet-800 focus:bg-white focus:border-violet-800 focus:outline-none"
              onChange={(e) => handleInput(e)}
              id="purchase"
              value={dataUpdate.purchase}
            />
          </div>
          <div className="flex flex-col  ">
            <label>i max</label>
            <input
              type="number"
              className="h-14 block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white  border-2 border-gray-300 rounded-lg  focus:text-violet-800 focus:bg-white focus:border-violet-800 focus:outline-none"
              onChange={(e) => handleInput(e)}
              id="i_max"
              value={dataUpdate.i_max}
            />
          </div>
          <div className="flex flex-col  ">
            <label>i b</label>
            <input
              type="number"
              className="h-14 block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white  border-2 border-gray-300 rounded-lg  focus:text-violet-800 focus:bg-white focus:border-violet-800 focus:outline-none"
              onChange={(e) => handleInput(e)}
              id="i_b"
              value={dataUpdate.i_b}
            />
          </div>
          <div className="flex flex-col  ">
            <label>i n</label>
            <input
              type="number"
              className="h-14 block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white  border-2 border-gray-300 rounded-lg  focus:text-violet-800 focus:bg-white focus:border-violet-800 focus:outline-none"
              onChange={(e) => handleInput(e)}
              id="i_n"
              value={dataUpdate.i_n}
            />
          </div>
          <div className="flex flex-col  ">
            <label>seals</label>
            <input
              type="number"
              className="h-14 block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white  border-2 border-gray-300 rounded-lg  focus:text-violet-800 focus:bg-white focus:border-violet-800 focus:outline-none"
              onChange={(e) => handleInput(e)}
              id="seals"
              value={dataUpdate.seals}
            />
          </div>
        </div>
        <div className=" w-full p-2 flex justify-center items-center gap-2">
          <button
            onClick={setDisplayBtnEdit}
            className=" px-6 py-2 rounded-md text-white bg-red-500 border-2 font-semibold hover:border-red-600 hover:bg-transparent hover:text-red-600 hover:shadow-2xl hover:shadow-red-600"
            >
            Cancel
          </button>
          <button
            onClick={handleUpdate}
            className=" px-6 py-2 rounded-md font-bold text-lg bg-transparent  text-violet-800 border-2 border-violet-800 hover:bg-violet-800 hover:shadow-2xl hover:shadow-violet-800 hover:text-white"
            >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpdateProduct;
