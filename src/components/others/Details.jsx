import React from "react";

const Details = (props) => {
  return (
    <React.Fragment>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <details>
        <summary>Mas detalles</summary>
        <p>Aqui se incluyen mas detalles esto solo sirve como ejemplo</p>
      </details>
      <details>
        <summary>Mas detalles</summary>
        <p>Aqui se incluyen mas detalles esto solo sirve como ejemplo</p>
      </details>
      <hr />
      <dl>
        <dt>Descripcion</dt>
        <dd>Descripcion a continuacion.</dd>
        <dt>Euismod</dt>
        <dd>
          Vestibulum id ligula porta felis euismod semper eget lacinia odio sem.
        </dd>
        <dd>Donec id elit non mi porta gravida at eget metus.</dd>
        <dt>Malesuada porta</dt>
        <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
      </dl>
    </React.Fragment>
  );
};

export default Details;
