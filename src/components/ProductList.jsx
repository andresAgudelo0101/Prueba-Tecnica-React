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
    <ul className=" h-auto p-4 w-auto shadow-2xl rounded-lg text-lg md:text-xl text-gray-900 font-normal bg-gray-50">
      <li>
        <b>serial:</b>
        {props.serial}
      </li>
      <li>
        <b>connection type:</b> {props.connection_type}
      </li>
      <li>
        <b>storage system:</b> {props.storage_system}
      </li>
      <li>
        <b>condition:</b> {props.condition}
      </li>
      <li>
        <b>owner:</b> {props.owner}
      </li>
      <li>
        <b>location:</b> {props.location}
      </li>
      <li>
        <b>manufacturer:</b> {props.manufacturer}
      </li>
      <li>
        <b>purchase:</b> {props.purchase}
      </li>
      <li>
        <b>i max:</b> {props.i_max}
      </li>
      <li>
        <b>i b:</b> {props.i_b}
      </li>
      <li>
        <b>i n:</b> {props.i_n}
      </li>
      <li>
        <b>seals:</b> {props.seals}
      </li>
      <li>
        <b>id:</b> {props.id}
      </li>
      <li>
        <b>created at:</b> {props.created_at}
      </li>
      <li className="h-14 ">
        <b>updated at:</b> {props.updated_at}
      </li>
      <li className=" w-full flex justify-center py-2 gap-3">
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
      </li>
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
    </ul>
  );
}

export default ProductList;
