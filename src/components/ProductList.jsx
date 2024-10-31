import Proptypes from "prop-types";
import ProductItem from "./ProductItem.jsx";
const ProductList = (props) => {
  return (
    <div className="row row-gap-4">
      {props.productsData?.map((product) => (
        <ProductItem
          key={`product-${product.id}`}
          item={product}
          setStateModal={props.setStateModal}
        />
      ))}
    </div>
  );
};
ProductList.propTypes = {
  productsData: Proptypes.array.isRequired,
  setStateModal: Proptypes.func.isRequired,
};
export default ProductList;
