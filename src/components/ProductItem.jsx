import PropTypes from "prop-types";
const ProductItem = (props) => {
  const { item, setStateModal } = props;
  return (
    <>
      <div className="col-4">
        <div className="card mx-auto">
          <img src={item.image} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">${item.price}</p>
            <button href="#" className="btn btn-dark rounded-0">
              Add to cart <i className="bi bi-cart4"></i>
            </button>
            <button
              type="button"
              className="btn btn-dark ms-3 rounded-0"
              data-bs-toggle="modal"
              data-bs-target="#productModal"
              onClick={() => setStateModal(item)}>
              Xem chi tiết
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
ProductItem.propTypes = {
  item: PropTypes.object.isRequired,
  setStateModal: PropTypes.func.isRequired,
};
export default ProductItem;
