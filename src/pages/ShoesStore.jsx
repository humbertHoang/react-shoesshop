import { useState } from "react";
import ProductList from "../components/ProductList.jsx";
import Modal from "../components/Modal.jsx";
import products from "../assets/data/data.json";
const ShoesStore = () => {
  const [stateModal, setStateModal] = useState({});
  const productDetail = { ...stateModal };
  return (
    <>
      <div className="container">
        <h1 className="text-center">Shoes Store</h1>
        <ProductList productsData={products} setStateModal={setStateModal} />
        <Modal content={productDetail} />
      </div>
    </>
  );
};

export default ShoesStore;
