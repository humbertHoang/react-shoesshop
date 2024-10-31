// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
const Modal = (props) => {
  const { content } = props;
  return (
    <>
      <div
        className="modal fade"
        id="productModal"
        tabIndex={-1}
        aria-labelledby="productModalLabel"
        aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="productModalLabel">
                {content.name}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-4">
                  <img className="w-100" src={content.image} />
                </div>
                <div className="col-8">
                  <table className="table">
                    <tbody>
                      <tr>
                        <th scope="row">ID</th>
                        <td>{content.id}</td>
                      </tr>
                      <tr>
                        <th scope="row">Alias</th>
                        <td>{content.alias}</td>
                      </tr>
                      <tr>
                        <th scope="row">Price</th>
                        <td>${content.price}</td>
                      </tr>
                      <tr>
                        <th scope="row">Description</th>
                        <td>{content.description}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
Modal.propTypes = {
  content: PropTypes.object.isRequired,
};
export default Modal;
