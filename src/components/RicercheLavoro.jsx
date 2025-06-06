import { Card } from "react-bootstrap";

const RicercheLavoro = () => {
  return (
    <Card className="mb-2 ">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <Card.Title className="mb-1">Ricerche di offerte di lavoro recenti</Card.Title>
          <div>
            <p>Cancella</p>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row gap-2">
          <div>
            <div className="d-flex align-items-center ">
              <p className="mb-0 fw-p mt-2">
                Programmatore <span className="fw-small">· 11 nuove</span>
              </p>
            </div>
            <div className="d-flex align-items-center">
              <p className="mb-0 fw-small">Avviso attivo · Bari, Puglia, Italia · In sede · Da remoto e 1 altro </p>
            </div>
          </div>
        </div>
        <hr></hr>
        <div>
          <div className="d-flex align-items-center ">
            <p className="mb-0 fw-p mt-2">
              Programmatore <span className="fw-small">· 12 nuove</span>
            </p>
          </div>
          <div className="d-flex align-items-center">
            <p className="mb-0 fw-small">Bari, Puglia, Italia</p>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};
export default RicercheLavoro;
