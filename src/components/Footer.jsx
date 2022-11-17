import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconTelephone } from "bootstrap-icons/icons/telephone.svg";
import { ReactComponent as IconEnvelope } from "bootstrap-icons/icons/envelope.svg";
import { ReactComponent as IconBriefcase } from "bootstrap-icons/icons/briefcase.svg";
import { ReactComponent as IconBadgeAd } from "bootstrap-icons/icons/badge-ad.svg";
import { ReactComponent as IconGift } from "bootstrap-icons/icons/gift.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faYoutube,
  faApple,
  faWindows,
  faAndroid,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <React.Fragment>
      <footer>
        <div className="container-fluid bg-primary">
          <div className="row ">
            <div className="col-md-9 py-3 text-white">
              Siguenos en nuestras redes sociales
            </div>
            <div className="col-md-3 py-3 text-center text-white">
              <Link to="/" title="Apple">
                <FontAwesomeIcon icon={faApple} className="text-light me-3" />
              </Link>
              <Link to="/" title="Windows">
                <FontAwesomeIcon icon={faWindows} className="text-light me-3" />
              </Link>
              <Link to="/" title="Android">
                <FontAwesomeIcon icon={faAndroid} className="text-light me-3" />
              </Link>
              |
              <Link to="/" title="Twitter">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-light ms-3 me-3"
                />
              </Link>
              <Link to="/" title="Facebook">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="text-light me-3"
                />
              </Link>
              <Link to="/" title="Instagram">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-light me-3"
                />
              </Link>
              <Link to="/" title="Youtube">
                <FontAwesomeIcon icon={faYoutube} className="text-light me-3" />
              </Link>
            </div>
          </div>
        </div>
        <div className="container-fluid bg-dark text-white">
          <div className="row ">
            <div className="col-md-3 py-3">
              <div className="h6">Nombre de compañia</div>
              <hr />
              <p>
                Texto ejemplo:  Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="col-md-3 py-3">
              <div className="h6">Products</div>
              <hr />
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Electronicos
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Moviles
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Auto y bicicleta
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Super Mercado
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Tarjetas de viaje
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 py-3">
              <div className="h6">Politicas</div>
              <hr />
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Politica de reembolso
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Terminos y condiciones
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Seguridad
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Privacidad
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Cumplimiento
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 py-3">
              <div className="h6">Direccion</div>
              <hr />
              <address>
                <strong>mexico</strong>
                <br />
                Saltillo, Coah
                <br />
                Blvd V carranza 1928
                <br />
                <abbr title="Phone">P:</abbr> (844) 2467244
              </address>
              <div className="h6">Cuidado del consumidor</div>
              <hr />
              <IconTelephone /> 01 1800 100 1000
              <br />
              <IconEnvelope /> info@email.com
            </div>
          </div>
        </div>
        <div className="container-fluid bg-secondary text-white text-center">
          <div className="row">
            <div className="col-md-2 py-2">
              <Link to="/" className="text-white text-decoration-none">
                <IconBriefcase className="text-warning" /> Asociaciones
              </Link>
            </div>
            <div className="col-md-2 py-2">
              <Link to="/" className="text-white text-decoration-none">
                <IconBadgeAd className="text-info" /> Advertencia
              </Link>
            </div>
            <div className="col-md-2 py-2">
              <Link to="/" className="text-white text-decoration-none">
                <IconGift className="text-dark" /> Regalos
              </Link>
            </div>
            <div className="col-md-3 py-2">
              © 2009-{new Date().getFullYear()} Prueba E-commerce
            </div>
            <div className="col-md-3 py-2 bg-white">
              <img
                src="../../images/payment/american_express.webp"
                width="32"
                alt="American Express"
                className="me-2"
              />
              <img
                src="../../images/payment/maestro.webp"
                width="32"
                alt="Maestro"
                className="me-2"
              />
              <img
                src="../../images/payment/netbanking.webp"
                width="32"
                alt="Net Banking"
                className="me-2"
              />
              <img
                src="../../images/payment/paypal.webp"
                width="32"
                alt="Paypal"
                className="me-2"
              />
              <img
                src="../../images/payment/rupay.webp"
                width="32"
                alt="Rupay"
                className="me-2"
              />
              <img
                src="../../images/payment/upi.webp"
                width="32"
                alt="UPI"
                className="me-2"
              />
              <img
                src="../../images/payment/visa.webp"
                width="32"
                alt="Visa"
                className="me-2"
              />
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};
export default Footer;
