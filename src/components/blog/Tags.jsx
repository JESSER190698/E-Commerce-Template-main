import React, { lazy } from "react";
import { Link } from "react-router-dom";
const Line = lazy(() => import("../others/Line"));

const Tags = (props) => {
  return (
    <div className={`mb-4 px-4 ${props.className ? props.className : ""}`}>
      <h4 className="fst-italic">{props.title}</h4>
      <Line className="mb-2" />
      <Link to="/" className="btn btn-sm btn-outline-info me-2 mb-2">
        Verano
      </Link>
      <Link to="/" className="btn btn-sm btn-outline-secondary me-2 mb-2">
        Ropa
      </Link>
      <Link to="/" className="btn btn-sm btn-outline-success me-2 mb-2">
        Mujer
      </Link>
      <Link to="/" className="btn btn-sm btn-outline-danger me-2 mb-2">
        En oferta
      </Link>
      <Link to="/" className="btn btn-sm btn-outline-dark me-2 mb-2">
        Chaquetas
      </Link>
      <Link to="/" className="btn btn-sm btn-outline-primary me-2 mb-2">
        Hombre
      </Link>
      <Link to="/" className="btn btn-sm btn-outline-warning me-2 mb-2">
        Joyeria
      </Link>
    </div>
  );
};
export default Tags;
