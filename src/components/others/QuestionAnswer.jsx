import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

const QuestionAnswer = (props) => {
  return (
    <div className="border-bottom mb-3">
      <dt>Q: Habrá algun cambio en los precios este mes?</dt>
      <dd>
        <p>
          <strong>A:</strong> Esperamos cambios en diciembre.
        </p>
        <div className="text-muted mb-2">Emiliano Ramos, Noviembre 2022</div>
        <div className="mb-2">
          <i>Fue de ayuda la respuesta?</i>
          <button className="btn btn-sm btn-outline-success me-2 ms-2">
            <FontAwesomeIcon icon={faThumbsUp} />
          </button>
          <button className="btn btn-sm btn-outline-danger me-2">
            <FontAwesomeIcon icon={faThumbsDown} />
          </button>
        </div>
      </dd>
    </div>
  );
};

export default QuestionAnswer;