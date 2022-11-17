import React from "react";
import { Link } from "react-router-dom";
const Breadcrumb = () => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb rounded-0">
        <li className="breadcrumb-item">
          <Link to="/" title="Home">
            Inicio
          </Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/" title="Men">
            Hombre
          </Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Playeras
        </li>
      </ol>
    </nav>
  );
};
export default Breadcrumb;
