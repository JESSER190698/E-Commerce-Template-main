import React, { Component } from "react";
import { ReactComponent as IconEnvelope } from "bootstrap-icons/icons/envelope.svg";
import { ReactComponent as IconTruck } from "bootstrap-icons/icons/truck.svg";
import { ReactComponent as IconReceipt } from "bootstrap-icons/icons/receipt.svg";
import { ReactComponent as IconCreditCard2Front } from "bootstrap-icons/icons/credit-card-2-front.svg";
import { ReactComponent as IconCart3 } from "bootstrap-icons/icons/cart3.svg";

class CheckoutView extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className="bg-secondary border-top p-4 text-white mb-3">
          <h1 className="display-6">Pago</h1>
        </div>
        <div className="container mb-3">
          <div className="row">
            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-header">
                  <IconEnvelope className="i-va" /> Informacion de contacto
                </div>
                <div className="card-body">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Correo"
                        aria-label="Correo Electronico"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Telefono"
                        aria-label="No. Telefono"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="card mb-3">
                <div className="card-header">
                  <IconTruck className="i-va" /> Informacion de envios
                </div>
                <div className="card-body">
                  <div className="row g-3">
                    <div className="col-md-12">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nombre"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Direccion"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Direccion 2 (opcional)"
                      />
                    </div>
                    <div className="col-md-4">
                      <select className="form-select" required>
                        <option value>-- Pais --</option>
                        <option>Mexico</option>
                      </select>
                    </div>
                    <div className="col-md-4">
                      <select className="form-select" required>
                        <option value>-- Estado --</option>
                        <option>Coahuila</option>
                      </select>
                    </div>
                    <div className="col-md-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="CP"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="card mb-3">
                <div className="card-header">
                  <IconReceipt className="i-va" /> Informacion de pago
                  <div className="form-check form-check-inline ms-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Mismo que la informacion de envio
                    </label>
                  </div>
                </div>
                <div className="card-body">
                  <div className="row g-3">
                    <div className="col-md-12">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nombre"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Direccion"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Direccion 2 (Opcional)"
                      />
                    </div>
                    <div className="col-md-4">
                      <select className="form-select" required>
                        <option value>-- Pais --</option>
                        <option>Mexico</option>
                      </select>
                    </div>
                    <div className="col-md-4">
                      <select className="form-select" required>
                        <option value>-- Estado --</option>
                        <option>Coahuila</option>
                      </select>
                    </div>
                    <div className="col-md-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="CP"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="card mb-3 border-info">
                <div className="card-header bg-info">
                  <IconCreditCard2Front className="i-va" /> Metodo de pago
                </div>
                <div className="card-body">
                  <div className="row g-3 mb-3 border-bottom">
                    <div className="col-md-6">
                      <div className="form-check">
                        <input
                          id="credit"
                          name="paymentMethod"
                          type="radio"
                          className="form-check-input"
                          defaultChecked
                          required
                        />
                        <label className="form-check-label" htmlFor="credit">
                          Tarjeta de credito
                          <img
                            src="../../images/payment/cards.webp"
                            alt="..."
                            className="ms-3"
                            height={26}
                          />
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-check">
                        <input
                          id="paypal"
                          name="paymentMethod"
                          type="radio"
                          className="form-check-input"
                          required
                        />
                        <label className="form-check-label" htmlFor="paypal">
                          PayPal
                          <img
                            src="../../images/payment/paypal_64.webp"
                            alt="..."
                            className="ms-3"
                            height={26}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nombre que aparece en la tarjeta"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Numero de tarjeta"
                      />
                    </div>
                    <div className="col-md-4">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Mes de expiracion"
                      />
                    </div>
                    <div className="col-md-4">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Año de expiracion"
                      />
                    </div>
                    <div className="col-md-4">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="CVV"
                      />
                    </div>
                  </div>
                </div>
                <div className="card-footer border-info d-grid">
                  <button type="button" className="btn btn-info">
                    Paga ahora <strong>$162</strong>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                  <IconCart3 className="i-va" /> Carrito{" "}
                  <span className="badge bg-secondary float-end">3</span>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h6 className="my-0">Nombre del producto</h6>
                      <small className="text-muted">Breve descripcion</small>
                    </div>
                    <span className="text-muted">$150</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h6 className="my-0">Segundo producto</h6>
                      <small className="text-muted">Breve descriptcon</small>
                    </div>
                    <span className="text-muted">$1234</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h6 className="my-0">Tercer producto</h6>
                      <small className="text-muted">Breve descripcion</small>
                    </div>
                    <span className="text-muted">$570</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between bg-light">
                    <div className="text-success">
                      <h6 className="my-0">Codigo de descuento </h6>
                      <small>CODIGOEJEMPLO</small>
                    </div>
                    <span className="text-success">−$50</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Total (MXN)</span>
                    <strong>$CANTIDADEJEMPLO </strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CheckoutView;
