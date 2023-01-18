import { useState } from "react";
import axios from "axios";
function AddProduct(props) {
  const [dataSubmit, setdataSubmit] = useState({
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
    created_at: new Date(),
    updated_at: "",
  });

  const handleInput = (e) => {
    e.prevent;
    const newData = { ...dataSubmit };
    newData[e.target.id] = e.target.value;
    setdataSubmit(newData);
    console.log(newData);
  };

  const handleSubmit = () => {
    axios
      .post("https://ops.enerbit.dev/learning/api/v1/meters", dataSubmit)
      .then(function (response) {
        console.log(response);
        alert("saved successfully");
        props.closeAddProd();
      })
      .catch(function (error) {
        console.log(error);
        if (error) {
          alert("failed to save");
        }
      });
  };
  return (
    <div className="fixed  flex justify-center items-center w-full backdrop-brightness-50 rounded-sm h-screen  ">
      <div className="w-11/12 md:w-4/6 h-5/6 md:h-auto bg-white shadow-2xl rounded-md p-4 overflow-auto">
        <div className="flex justify-end w-full">
          <button
            className=" bg-red-600 py-1 px-3 rounded-sm text-white font-bold hover:rotate-90 "
            onClick={props.closeAddProd}
          >
            X
          </button>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-2 text-xl  text-gray-900 font-normal">
          <div className="flex flex-col">
            <label>serial</label>
            <input
              type="text"
              className=" h-14 block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white  border-2 border-gray-300 rounded-lg  focus:text-violet-800  focus:bg-white focus:border-violet-800 focus:outline-none"
              onChange={(e) => handleInput(e)}
              id="serial"
              value={dataSubmit.serial}
              required
            />
          </div>
          <div className="flex flex-col ">
            <label>connection type</label>
            <input
              type="text"
              placeholder="type directa"
              className=" h-14 block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white  border-2 border-gray-300 rounded-lg  focus:text-violet-800  focus:bg-white focus:border-violet-800 focus:outline-none"
              onChange={(e) => handleInput(e)}
              id="connection_type"
              value={dataSubmit.connection_type}
            />
          </div>
          <div className="flex flex-col">
            <label>storage system</label>
            <input
              type="text"
              placeholder="type interno"
              className="h-14 block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white  border-2 border-gray-300 rounded-lg  focus:text-violet-800  focus:bg-white focus:border-violet-800 focus:outline-none"
              onChange={(e) => handleInput(e)}
              id="storage_system"
              value={dataSubmit.storage_system}
            />
          </div>
          <div className="flex flex-col">
            <label>condition</label>
            <input
              type="text"
              placeholder="type nuevo or usado"
              className=" h-14 block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white  border-2 border-gray-300 rounded-lg  focus:text-violet-800  focus:bg-white focus:border-violet-800 focus:outline-none"
              onChange={(e) => handleInput(e)}
              id="condition"
              value={dataSubmit.condition}
            />
          </div>
          <div className="flex flex-col">
            <label>owner</label>
            <input
              type="text"
              placeholder="type RF"
              className=" h-14 block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white  border-2 border-gray-300 rounded-lg  focus:text-violet-800  focus:bg-white focus:border-violet-800 focus:outline-none"
              onChange={(e) => handleInput(e)}
              id="owner"
              value={dataSubmit.owner}
            />
          </div>
          <div className="flex flex-col">
            <label>location</label>
            <input
              type="text"
              className=" h-14 block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white  border-2 border-gray-300 rounded-lg  focus:text-violet-800  focus:bg-white focus:border-violet-800 focus:outline-none"
              onChange={(e) => handleInput(e)}
              id="location"
              value={dataSubmit.location}
            />
          </div>
          <div className="flex flex-col">
            <label>manufacturer</label>
            <input
              type="text"
              className=" h-14 block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white  border-2 border-gray-300 rounded-lg  focus:text-violet-800  focus:bg-white focus:border-violet-800 focus:outline-none"
              onChange={(e) => handleInput(e)}
              id="manufacturer"
              value={dataSubmit.manufacturer}
            />
          </div>
          <div className="flex flex-col">
            <label>purchase</label>
            <input
              type="text"
              className=" h-14 block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white  border-2 border-gray-300 rounded-lg  focus:text-violet-800  focus:bg-white focus:border-violet-800 focus:outline-none"
              onChange={(e) => handleInput(e)}
              id="purchase"
              value={dataSubmit.purchase}
            />
          </div>
          <div className="flex flex-col">
            <label>i max</label>
            <input
              type="number"
              className=" h-14 block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white  border-2 border-gray-300 rounded-lg  focus:text-violet-800  focus:bg-white focus:border-violet-800 focus:outline-none"
              onChange={(e) => handleInput(e)}
              id="i_max"
              value={dataSubmit.i_max}
            />
          </div>
          <div className="flex flex-col">
            <label>i b</label>
            <input
              type="number"
              className=" h-14 block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white  border-2 border-gray-300 rounded-lg  focus:text-violet-800  focus:bg-white focus:border-violet-800 focus:outline-none"
              onChange={(e) => handleInput(e)}
              id="i_b"
              value={dataSubmit.i_b}
            />
          </div>
          <div className="flex flex-col">
            <label>i n</label>
            <input
              type="number"
              className=" h-14 block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white  border-2 border-gray-300 rounded-lg  focus:text-violet-800  focus:bg-white focus:border-violet-800focus:outline-none"
              onChange={(e) => handleInput(e)}
              id="i_n"
              value={dataSubmit.i_n}
            />
          </div>
          <div className="flex flex-col">
            <label>seals</label>
            <input
              type="number"
              className="h-14 block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white  border-2 border-gray-300 rounded-lg  focus:text-violet-800  focus:bg-white focus:border-violet-800focus:outline-none"
              onChange={(e) => handleInput(e)}
              id="seals"
              value={dataSubmit.seals}
            />
          </div>
        </div>
        <div className=" w-full p-2 flex justify-center items-center">
          <button
            onClick={handleSubmit}
            className=" px-6 py-2 rounded-md font-bold text-lg bg-orange-400  text-white border-2 border-orange-400 hover:shadow-2xl hover:shadow-orange-400"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
