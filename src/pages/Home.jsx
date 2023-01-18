import ProductList from "../components/ProductList";
import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import AddProduct from "../components/AddProduct";

function Home() {
  const api_url = "https://ops.enerbit.dev/learning/api/v1/meters";

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [btnAdd, setBtnAdd] = useState(false);

  const closeAddBtn = () => {
    setBtnAdd(!btnAdd);
  };

  useEffect(() => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProducts(data.items));
  }, []);

  return (
    <div className="flex flex-col px-10 gap-4 items-center h-screen w-full bg-violet-800" >
      <div className="w-full  flex flex-col md:flex-row md:justify-between items-center gap-2 h-auto p-4 bg-white" >
        <h1 className=" font-bold text-6xl text-orange-400" >ener<span className=" text-violet-800">Bit</span></h1>
        <div className=" flex flex-col gap-2">
          <input
            type="search"
            className="form-control block w-full px-4 py-2 text-xl font-normal text-black bg-white  border-2 border-orange-400 rounded-lg  focus:text-violet-800 focus:bg-white focus:border-violet-800 focus:outline-none"
            placeholder="Search product"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className=" px-6 py-2 rounded-md font-bold text-lg bg-transparent  text-violet-800 border-2 border-violet-800 hover:bg-orange-400 hover:border-orange-400 hover:text-white"
            onClick={closeAddBtn}
          >
            Add product
          </button>
        </div>
      </div>
      <div className={styles.container}>
        {products
          ?.filter((prod) => prod.serial.includes(search))
          .map((product) => (
            <ProductList
              key={product.id}
              serial={product.serial}
              connection_type={product.connection_type}
              storage_system={product.storage_system}
              condition={product.condition}
              owner={product.owner}
              location={product.location}
              manufacturer={product.manufacturer}
              purchase={product.purchase}
              i_max={product.i_max}
              i_b={product.i_b}
              i_n={product.i_n}
              seals={product.seals}
              id={product.id}
              created_at={product.created_at}
              updated_at={product.updated_at}
            />
          ))}
      </div>
      {btnAdd && <AddProduct closeAddProd={closeAddBtn} />}
    </div>
  );
}

export default Home;
