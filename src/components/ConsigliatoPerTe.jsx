import { Button, Card, Row, Col } from "react-bootstrap";

const ConsigliatoPerTe = () => {
  return (
    <Card>
      <Card.Body>
        <div className="mb-3">
          <h5 className="mb-1">Consigliato per te</h5>
          <div className="text-muted small">
            <i className="bi bi-eye-fill pe-1"></i>Solo per te
          </div>
        </div>
        <Row>
          <Col xs={12} md={6}>
            <Card className="h-100">
              <Card.Body>
                <div className="d-flex align-items-center">
                  <img src="https://static.licdn.com/aero-v1/sc/h/7180r6w1mkjskxrgnbta6aeu1" alt="generic" />
                  <h6 className="mb-0 ms-2">In quale settore lavori?</h6>
                </div>
                <article>
                  Gli utenti che aggiungono un settore ricevono fino a 2,5 volte più visualizzazioni del profilo
                </article>
                <Button variant="light" className="rounded-pill border-dark mt-3">
                  Aggiungi settore
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card className="h-100">
              <Card.Body>
                <div className="d-flex align-items-center">
                  <img src="https://static.licdn.com/aero-v1/sc/h/db05fgvyq7n2ng4fiexgf4hcq" alt="generic" />
                  <h6 className="mb-0 ms-2">In quale settore lavori?</h6>
                </div>
                <article>
                  Gli utenti che includono un riepilogo ricevono fino a 3,9 volte più visualizzazioni del profilo.
                </article>
                <Button variant="light" className="rounded-pill border-dark mt-3">
                  Aggiungi riepilogo
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
export default ConsigliatoPerTe;