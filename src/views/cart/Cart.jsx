import React, { Component, lazy } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconHeartFill } from "bootstrap-icons/icons/heart-fill.svg";
import { ReactComponent as IconTrash } from "bootstrap-icons/icons/trash.svg";
import { ReactComponent as IconChevronRight } from "bootstrap-icons/icons/chevron-right.svg";
import { ReactComponent as IconChevronLeft } from "bootstrap-icons/icons/chevron-left.svg";
import { ReactComponent as IconTruck } from "bootstrap-icons/icons/truck.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
const CouponApplyForm = lazy(() =>
  import("../../components/others/CouponApplyForm")
);

class CartView extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  onSubmitApplyCouponCode = async (values) => {
    alert(JSON.stringify(values));
  };
  render() {
    return (
      <React.Fragment>
        <div className="bg-secondary border-top p-4 text-white mb-3">
          <h1 className="display-6">Carrito</h1>
        </div>
        <div className="container mb-3">
          <div className="row">
            <div className="col-md-9">
              <div className="card">
                <div className="table-responsive">
                  <table className="table table-borderless">
                    <thead className="text-muted">
                      <tr className="small text-uppercase">
                        <th scope="col">Producto</th>
                        <th scope="col" width={120}>
                          Cantidad
                        </th>
                        <th scope="col" width={150}>
                          Price
                        </th>
                        <th scope="col" className="text-end" width={130}></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="row">
                            <div className="col-3 d-none d-md-block">
                              <img
                                src="../../images/products/tshirt_red_480x400.webp"
                                width="80"
                                alt="..."
                              />
                            </div>
                            <div className="col">
                              <Link
                                to="/product/detail"
                                className="text-decoration-none"
                              >
                                Otro nombre de prodcto
                              </Link>
                              <p className="small text-muted">
                                Talla: XL, Color: blue, Marca: XYZ
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="input-group input-group-sm mw-140">
                            <button
                              className="btn btn-primary text-white"
                              type="button"
                            >
                              <FontAwesomeIcon icon={faMinus} />
                            </button>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="1"
                            />
                            <button
                              className="btn btn-primary text-white"
                              type="button"
                            >
                              <FontAwesomeIcon icon={faPlus} />
                            </button>
                          </div>
                        </td>
                        <td>
                          <var className="price">$237.00</var>
                          <small className="d-block text-muted">
                            $79.00 cada uno
                          </small>
                        </td>
                        <td className="text-end">
                          <button className="btn btn-sm btn-outline-secondary me-2">
                            <IconHeartFill className="i-va" />
                          </button>
                          <button className="btn btn-sm btn-outline-danger">
                            <IconTrash className="i-va" />
                          </button>
                        </td>
                                        </tr>
                                        <tr>
                        <td>
                          <div className="row">
                            <div className="col-3 d-none d-md-block">
                              <img
                                src="../../images/products/tshirt_grey_480x400.webp"
                                width="80"
                                alt="..."
                              />
                            </div>
                            <div className="col">
                              <Link
                                to="/product/detail"
                                className="text-decoration-none"
                              >
                                Otro nombre de producto
                              </Link>
                              <p className="small text-muted">
                                Talla: XL, Color: blue, Marca: XYZ
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="input-group input-group-sm mw-140">
                            <button
                              className="btn btn-primary text-white"
                              type="button"
                            >
                              <FontAwesomeIcon icon={faMinus} />
                            </button>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="1"
                            />
                            <button
                              className="btn btn-primary text-white"
                              type="button"
                            >
                              <FontAwesomeIcon icon={faPlus} />
                            </button>
                          </div>
                        </td>
                        <td>
                          <var className="price">$237.00</var>
                          <small className="d-block text-muted">
                            $79.00 cada uno
                          </small>
                        </td>
                        <td className="text-end">
                          <button className="btn btn-sm btn-outline-secondary me-2">
                            <IconHeartFill className="i-va" />
                          </button>
                          <button className="btn btn-sm btn-outline-danger">
                            <IconTrash className="i-va" />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="card-footer">
                  <Link to="/checkout" className="btn btn-primary float-end">
                    Proceder al pago <IconChevronRight className="i-va" />
                  </Link>
                  <Link to="/" className="btn btn-secondary">
                    <IconChevronLeft className="i-va" /> Continuar comprando
                  </Link>
                </div>
              </div>
              <div className="alert alert-success mt-3">
                <p className="m-0">
                  <IconTruck className="i-va me-2" /> Envio gratis
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mb-3">
                <div className="card-body">
                  <CouponApplyForm onSubmit={this.onSubmitApplyCouponCode} />
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <dl className="row border-bottom">
                    <dt className="col-6">Precio Total:</dt>
                    <dd className="col-6 text-end">$1,568</dd>

                    <dt className="col-6 text-success">Descuento:</dt>
                    <dd className="col-6 text-success text-end">-$58</dd>
                    <dt className="col-6 text-success">
                      Cupon:{" "}
                      <span className="small text-muted">CODIGOEJEMPLO</span>{" "}
                    </dt>
                    <dd className="col-6 text-success text-end">-$68</dd>
                  </dl>
                  <dl className="row">
                    <dt className="col-6">Total:</dt>
                    <dd className="col-6 text-end  h5">
                      <strong>$1,350</strong>
                    </dd>
                  </dl>
                  <hr />
                  <p className="text-center">
                    <img
                      src="../../images/payment/payments.webp"
                      alt="..."
                      height={26}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-light border-top p-4">
          <div className="container">
            <h6>Pago y politica de ventas</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CartView;
