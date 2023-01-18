import { useState } from "react";
import DeleteProduct from "./DeleteProduct";
import UpdateProduct from "./UpdateProduct";

function ProductList(props) {
  const [btnEdit, setbtnEdit] = useState(false);
  const [btnDelete, setbtnDelete] = useState(false);

  const setDisplayBtnEdit = () => {
    setbtnEdit(!btnEdit);
  };

  const setDisplayBtnDelete = () => {
    setbtnDelete(!btnDelete);
  };

  return (
    <ul className=" h-auto p-6 w-auto shadow-2xl rounded-lg text-lg md:text-xl text-gray-900 font-normal bg-gray-50 flex flex-col justify-evenly">
      <li>
        <b className=" text-zinc-900 font-medium">serial:</b>
        {props.serial}
      </li>
      <li>
        <b className=" text-zinc-900 font-medium">connection type:</b>{" "}
        {props.connection_type}
      </li>
      <li>
        <b className=" text-zinc-900 font-medium">storage system:</b>{" "}
        {props.storage_system}
      </li>
      <li>
        <b className=" text-zinc-900 font-medium">condition:</b>{" "}
        {props.condition}
      </li>
      <li>
        <b className=" text-zinc-900 font-medium">owner:</b> {props.owner}
      </li>
      <li>
        <b className=" text-zinc-900 font-medium">location:</b> {props.location}
      </li>
      <li>
        <b className=" text-zinc-900 font-medium">manufacturer:</b>{" "}
        {props.manufacturer}
      </li>
      <li>
        <b className=" text-zinc-900 font-medium">purchase:</b> {props.purchase}
      </li>
      <li>
        <b className=" text-zinc-900 font-medium">i max:</b> {props.i_max}
      </li>
      <li>
        <b className=" text-zinc-900 font-medium">i b:</b> {props.i_b}
      </li>
      <li>
        <b className=" text-zinc-900 font-medium">i n:</b> {props.i_n}
      </li>
      <li>
        <b className=" text-zinc-900 font-medium">seals:</b> {props.seals}
      </li>
      <li>
        <b className=" text-zinc-900 font-medium">id:</b> {props.id}
      </li>
      <li>
        <b className=" text-zinc-900 font-medium ">created at:</b>{" "}
        {props.created_at}
      </li>
      <li>
        <b className=" text-zinc-900  font-medium">updated at:</b>{" "}
        {props.updated_at}
      </li>

      <div className=" w-full flex justify-center py-2 gap-3">
        <button
          onClick={setDisplayBtnEdit}
          className=" px-6 py-2 rounded-md font-bold text-lg bg-transparent  text-violet-800 border-2 border-violet-800 hover:bg-violet-800 hover:shadow-2xl hover:shadow-violet-800 hover:text-white"
        >
          Edit
        </button>
        <button
          onClick={setDisplayBtnDelete}
          className=" px-6 py-2 rounded-md text-white bg-red-500 border-2 font-semibold hover:border-red-600 hover:bg-transparent hover:text-red-600 hover:shadow-2xl hover:shadow-red-600"
        >
          Delete
        </button>

        {btnEdit && (
          <UpdateProduct
            productId={props.id}
            setDisplayBtnEdit={setDisplayBtnEdit}
          />
        )}

        {btnDelete && (
          <DeleteProduct
            productId={props.id}
            setDisplayBtnDelete={setDisplayBtnDelete}
          />
        )}
      </div>
    </ul>
  );
}

export default ProductList;
