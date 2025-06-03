import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Dropdown, Row, Col, DropdownButton, Form } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

const Footer = () => {
  return (
    <Row className="justify-content-center">
      <Col xs={3}>
        <Row>
          <Col xs={4}>
            <ListGroup.Item id="footer-item">Informazioni</ListGroup.Item>
          </Col>
          <Col xs={4}>
            <ListGroup.Item id="footer-item">Accessibilità</ListGroup.Item>
          </Col>
          <Col xs={4}>
            <ListGroup.Item id="footer-item">Talent Solutions</ListGroup.Item>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <ListGroup.Item id="footer-item">Informativa sulla community professionale</ListGroup.Item>
          </Col>
          <Col xs={4}>
            <ListGroup.Item id="footer-item">Carriera</ListGroup.Item>
          </Col>
          <Col xs={4}>
            <ListGroup.Item id="footer-item">Soluzioni di marketing</ListGroup.Item>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <ListGroup.Item id="footer-item">
              <DropdownButton drop="up" id="dropdown-basic-button" title="Privacy e condizioni ">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>
            </ListGroup.Item>
          </Col>
          <Col xs={4}>
            <ListGroup.Item id="footer-item">Opzioni per gli annunci pubblicitari</ListGroup.Item>
          </Col>
          <Col xs={4}>
            <ListGroup.Item id="footer-item">Pubblicità</ListGroup.Item>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <ListGroup.Item id="footer-item">Sales Solutions</ListGroup.Item>
          </Col>
          <Col xs={4}>
            <ListGroup.Item id="footer-item">Mobile</ListGroup.Item>
          </Col>
          <Col xs={4}>
            <ListGroup.Item id="footer-item">Piccole imprese</ListGroup.Item>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <ListGroup.Item id="footer-item">Centro sicurezza</ListGroup.Item>
          </Col>
        </Row>
        <p className=" text-muted small fw-light ">LinkedIn Corporation © 2025</p>
      </Col>
      <Col xs={3}>
        <Row>
          <Col xs={6}>
            <ListGroup.Item id="footer-item">
              <Row className="g-4">
                <Col xs={1}>
                  <i className="bi bi-question-circle-fill text-dark fs-5 "></i>
                </Col>
                <Col xs={10}>
                  <span>Domande?</span>
                  <p>Visita il nostro Centro assistenza.</p>
                </Col>
              </Row>
            </ListGroup.Item>
          </Col>
          <Col xs={6}>
            <ListGroup.Item id="footer-item">
              <Form.Group>
                <Form.Label>Seleziona lingua</Form.Label>
                <Form.Select>
                  <option>Italiano (Italiano)</option>
                  <option>English (Inglese)</option>
                  <option>Deutsch (Tedesco)</option>
                  <option>Español (Spagnolo)</option>
                  <option>Français (Francese)</option>
                </Form.Select>
              </Form.Group>
            </ListGroup.Item>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <ListGroup.Item id="footer-item">
              <Row className="g-4">
                <Col xs={1}>
                  <i className="bi bi-gear-fill text-dark fs-5 "></i>
                </Col>
                <Col xs={10}>
                  <span>Gestisci il tuo account e la tua privacy</span>
                  <p>Vai alle impostazioni</p>
                </Col>
              </Row>
            </ListGroup.Item>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <ListGroup.Item id="footer-item">
              <Row className="g-4">
                <Col xs={1}>
                  <i className="bi bi-shield-shaded text-dark fs-5 "></i>
                </Col>
                <Col xs={10}>
                  <span>Trasparenza sui contenuti consigliati</span>
                  <p>Scopri di più sui contenuti consigliati.</p>
                </Col>
              </Row>
            </ListGroup.Item>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Footer;
