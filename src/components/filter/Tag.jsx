import React from "react";
import { Link } from "react-router-dom";

const FilterTag = (props) => {
  return (
    <div className="card mb-3">
      <div
        className="card-header fw-bold text-uppercase accordion-icon-button"
        data-bs-toggle="collapse"
        data-bs-target="#filterTag"
        aria-expanded="true"
        aria-controls="filterTag"
      >
        Etiquetas de productos
      </div>
      <div className="card-body show" id="filterTag">
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
          Hot
        </Link>
        <Link to="/" className="btn btn-sm btn-outline-dark me-2 mb-2">
          Chaquetas
        </Link>
        <Link to="/" className="btn btn-sm btn-outline-primary me-2 mb-2">
          Hombre
        </Link>
        <Link to="/" className="btn btn-sm btn-outline-warning me-2 mb-2">
          Lujo
        </Link>
      </div>
    </div>
  );
};

export default FilterTag;
