import { Col, Row, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function AsideCard() {
  return (
    <Row className="justify-content-center">
      <Col sm={3} className="px-3">
        <Card>
          <Card.Body className="p-0">
            <Card.Title className=" my-3 px-3 d-flex align-items-center justify-content-between ">
              <h3>Linkedln Notizie</h3>
              <i class="bi bi-info-square-fill"></i>
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted fs-4 ps-3">Storie principali</Card.Subtitle>
            <ListGroup>
              <ListGroup.Item id="aside-list-item">
                <h5 className="mb-0">Credem cerca nuovi bancari</h5>
                <p className="mb-0 fw-normal text-secondary"> 7 ore fa • 334 lettori</p>
              </ListGroup.Item>
              <ListGroup.Item id="aside-list-item">
                <h5 className="mb-0">Voci del pride month</h5>
                <p className="mb-0 fw-normal text-secondary"> 1 giorno fa • 251 lettori</p>
              </ListGroup.Item>
              <ListGroup.Item id="aside-list-item">
                <h5 className="mb-0">È la Giornata mondiale dell'ambiente</h5>
                <p className="mb-0 fw-normal text-secondary"> 4 ore fa • 233 lettori</p>
              </ListGroup.Item>
              <ListGroup.Item id="aside-list-item">
                <h5 className="mb-0">Revolut si fa i suoi Atm</h5>
                <p className="mb-0 fw-normal text-secondary"> 4 ore fa</p>
              </ListGroup.Item>
              <ListGroup.Item id="aside-list-item">
                <h5 className="mb-0">Prada investe in Rino Mastrotto</h5>
                <p className="mb-0 fw-normal text-secondary"> 2 ore fa</p>
              </ListGroup.Item>
              <ListGroup.Item id="aside-list-item">
                <Button className="p-0 mb-0 text-dark bg-transparent border-0">
                  <p className="p-0 m-0 fs-5">Mostra Altro </p>
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default AsideCard;
