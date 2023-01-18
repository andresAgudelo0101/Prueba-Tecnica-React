import axios from "axios";

function DeleteProduct({productId,setDisplayBtnDelete}) {
    const api_url = "https://ops.enerbit.dev/learning/api/v1/meters/";
    const handleDelete = () => {
        axios
          .delete(api_url + productId)
          .then(function (response) {
            console.log(response);
            alert("delete sucsefully");
            setDisplayBtnDelete()
          })
          .catch(function (error) {
            console.log(error);
            if (error) {
              alert("error to Delete");
            }
          });
      };
  return (
    <div className="fixed  top-0 left-0 flex justify-center items-center w-full backdrop-brightness-50 rounded-sm h-screen  ">
      <div className="w-80 md:w-96 h-64 bg-white shadow-2xl rounded-md p-2 overflow-auto">
        <div className="flex justify-end w-full">
          <button
            className=" bg-transparent border-2 border-violet-800 text-violet-800 py-1 px-3 rounded-sm font-bold hover:rotate-90 "
            onClick={setDisplayBtnDelete}
          >
            X
          </button>
        </div>
        <div className=" p-2 h-5/6 flex justify-center flex-col items-center">
          <p className=" text-center font-semibold text-xl">
            Would you like to delete this product?
          </p>
          <div className=" w-full flex justify-center gap-3   p-4 rounded-md">
            <button
              onClick={setDisplayBtnDelete}
              className=" px-6 py-2 rounded-md font-bold text-lg bg-transparent  text-violet-800 border-2 border-violet-800 hover:bg-violet-800 hover:shadow-2xl hover:shadow-violet-800 hover:text-white"
              >
              Cancel
            </button>
            <button
              onClick={handleDelete}
              className=" px-6 py-2 rounded-md text-white bg-red-500 border-2 font-semibold hover:border-red-600 hover:bg-transparent hover:text-red-600 hover:shadow-2xl hover:shadow-red-600"
              >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteProduct;
