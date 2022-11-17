/* eslint-disable jsx-a11y/anchor-is-valid */
import { ReactComponent as IconBootstrapFill } from "bootstrap-icons/icons/bootstrap-fill.svg";
import { ReactComponent as IconPrinter } from "bootstrap-icons/icons/printer.svg";
import { ReactComponent as IconDownload } from "bootstrap-icons/icons/download.svg";

const Invoice = () => {
  return (
    <div className="container-fluid bg-secondary p-3">
      <div className="bg-white p-5">
        <div>
          <div className="row g-3 mb-3 pb-3 border-bottom">
            <div className="col-6">
              <IconBootstrapFill width={64} height={64} />
            </div>
            <div className="col-6 d-flex justify-content-end">
              <span className="display-4">Factura</span>
            </div>
          </div>
          <div className="row mb-3 pb-3 border-bottom">
            <div className="col-6">
              <b className="me-1">Factura fecha:</b>{" "}
              {new Date(Date.now()).toLocaleDateString()}
            </div>
            <div className="col-6 d-flex justify-content-end">
              <b className="me-1">Factura No:</b> {`#1234567890`}
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-6">
              <b className="border-bottom d-block">De</b>
              <address>
                <strong>Twitter, Inc.</strong>
                <br />
                1355 Market St, Suite 900
                <br />
                San Francisco, CA 94103
                <br />
                <abbr title="Phone">P:</abbr> (123) 456-7890
              </address>
            </div>
            <div className="col-6 text-sm-end">
              <b className="border-bottom d-block">Dirigida a: </b>
              <address>
                <strong>Twitter, Inc.</strong>
                <br />
                1355 Market St, Suite 900
                <br />
                San Francisco, CA 94103
                <br />
                <abbr title="Phone">P:</abbr> (123) 456-7890
              </address>
            </div>
          </div>
          <div className="card">
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table mb-0">
                  <thead className="card-header">
                    <tr>
                      <td className="col-3">
                        <strong>Producto</strong>
                      </td>
                      <td className="col-4">
                        <strong>Descripcion</strong>
                      </td>
                      <td className="col-2 text-center">
                        <strong>Calificacion</strong>
                      </td>
                      <td className="col-1 text-center">
                        <strong>Cantidad</strong>
                      </td>
                      <td className="col-2 text-end">
                        <strong>Volumen</strong>
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="col-3">Playeras</td>
                      <td className="col-4 text-1">
                        Maecenas suscipit volutpat gravida. Nulla hendrerit nisi
                        a lectus blandit aliquam. Integer enim magna, consequat
                        sed justo nec, auctor sagittis urna.
                      </td>
                      <td className="col-2 text-center">$5000.00</td>
                      <td className="col-1 text-center">10</td>
                      <td className="col-2 text-end">$500000.00</td>
                    </tr>
                    <tr>
                      <td>Sweater</td>
                      <td className="text-1">
                        Nulla sodales sit amet orci eu vehicula.
                      </td>
                      <td className="text-center">$1200.00</td>
                      <td className="text-center">10</td>
                      <td className="text-end">$12000.00</td>
                    </tr>
                    <tr>
                      <td>Pantalones</td>
                      <td className="text-1">Par de pantalones</td>
                      <td className="text-center">$450.00</td>
                      <td className="text-center">1</td>
                      <td className="text-end">$450.00</td>
                    </tr>
                  </tbody>
                  <tfoot className="card-footer">
                    <tr>
                      <td colSpan="4" className="text-end">
                        <strong>Subtotal:</strong>
                      </td>
                      <td className="text-end">$9000.00</td>
                    </tr>
                    <tr>
                      <td colSpan="4" className="text-end">
                        <strong>Impuestos:</strong>
                      </td>
                      <td className="text-end">$215.00</td>
                    </tr>
                    <tr>
                      <td colSpan="4" className="text-end border-bottom-0">
                        <strong>Total:</strong>
                      </td>
                      <td className="text-end border-bottom-0">$9215.00</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-1">
              <strong>Nota :</strong> Este es un recibo autogenerado por computadora
            </p>
            <div className="btn-group btn-group-sm d-print-none">
              <a
                // eslint-disable-next-line no-script-url
                href="javascript:window.print()"
                className="btn btn-light border text-black-50 shadow-none"
              >
                <IconPrinter /> Imprimir
              </a>
              <a
                href="!#"
                className="btn btn-light border text-black-50 shadow-none"
              >
                <IconDownload /> Descargar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Invoice;
