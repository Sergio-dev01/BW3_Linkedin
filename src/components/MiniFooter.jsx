import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Dropdown, Row, Col, DropdownButton, Form, Container } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

const MiniFooter = () => {
  return (
    <>
      <Row className="justify-content-center">
        <Col sm={11} className="p-0">
          <Row className="justify-content-center ">
            <Col sm={6} className="p-0">
              <div id="mini-footer-item" className=" mb-1 fluid text-end">
                <a a id="mini-footer-text" className="p-0 pe-1 text-decoration-none ">
                  Informazioni
                </a>
              </div>
            </Col>
            <Col sm={6} className="p-0">
              <div id="mini-footer-item" className=" mb-1  text-start p-0">
                <a>Accessibilità</a>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center">
            <Col sm={6} className="p-0">
              <div id="mini-footer-item" className="p-1 mb-1 me-2 text-end">
                <a id="mini-footer-text" className="pe-1 text-decoration-none">
                  Centro assistenza
                </a>
              </div>
            </Col>
            <Col sm={6} className="p-0 ">
              <div id="mini-footer-item" className="p-1 mb-1 me-2 text-start">
                <DropdownButton className=" drop-custom" drop="down" id="dropdown-basic-button" title="Privacy e condizioni ">
                  <Dropdown.Item id="first-drop" href="#/action-1">
                    Informativa sulla privacy
                  </Dropdown.Item>
                  <Dropdown.Item id="first-drop" href="#/action-2">
                    Contratto di licenza
                  </Dropdown.Item>
                  <Dropdown.Item id="first-drop" href="#/action-3">
                    Termini e condizioni delle pagine
                  </Dropdown.Item>
                  <Dropdown.Item id="first-drop" href="#/action-3">
                    Informativa sui cookie
                  </Dropdown.Item>
                  <Dropdown.Item id="first-drop" href="#/action-3">
                    Informativa sul copyright
                  </Dropdown.Item>
                  <Dropdown.Item id="first-drop" href="#/action-3">
                    Opzioni relative all'informativa sulla privacy (Stato della California)
                  </Dropdown.Item>
                </DropdownButton>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center">
            <Col sm={12} className="p-0">
              <div id="mini-footer-item" className="p-1  text-center">
                <a id="mini-footer-text" className="pe-1 text-decoration-none">
                  Opzioni per gli annunci pubblicitari
                </a>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center">
            <Col sm={6} className="p-0">
              <div id="mini-footer-item" className="p-1 mb-1 me-2  text-end">
                <a id="mini-footer-text" className="pe-1 text-decoration-none ">
                  {" "}
                  Pubblicità
                </a>
              </div>
            </Col>
            <Col sm={6} className="p-0 ">
              <div id="mini-footer-item" className="p-1 mb-1 me-2 text-start">
                <DropdownButton className="mini-footer-text drop-custom" drop="down" id="dropdown-basic-button" title="Servizi alle aziende">
                  <Dropdown.Item id="first-drop" className="p-0 ps-0" href="#/action-1">
                    <div id="drop-div" className="p-0 m-0">
                      <h5 className="mb-0 ">Assumi su Linkedln</h5>
                      <p className="mb-1 fw-normal text-secondary">Trova, attrai e assumi</p>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item id="first-drop" className="p-0 ps-3" href="#/action-1">
                    <div id="drop-div" className="p-0 m-0">
                      <h5 className="mb-0 ">Vendi con Linkedln</h5>
                      <p className="mb-1 fw-normal text-secondary">Sblocca nuove opportunità di vendita</p>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item id="first-drop" className="p-0 ps-3" href="#/action-1">
                    <div id="drop-div" className="p-0 m-0">
                      <h5 className="mb-0 ">Offerta di lavoro gratuita</h5>
                      <p className="mb-1 fw-normal text-secondary">Ottieni rapidamente candidati qualificati</p>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item id="first-drop" className="p-0 ps-3" href="#/action-1">
                    <div id="drop-div" className="p-0 m-0">
                      <h5 className="mb-0 ">Fai pubblicità su Linkedln</h5>
                      <p className="mb-1 fw-normal text-secondary">Acquisisci clienti e fai crescere la tua azienda</p>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item id="first-drop" className="p-0 ps-3" href="#/action-1">
                    <div id="drop-div" className="p-0 m-0">
                      <h5 className="mb-0 ">Inizia con Premium</h5>
                      <p className="mb-1 fw-normal text-secondary">Amplia e sfrutta la tua rete</p>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item id="first-drop" className="p-0 ps-3" href="#/action-1">
                    <div id="drop-div" className="p-0 m-0">
                      <h5 className="mb-0 ">Impara con Linkedln</h5>
                      <p className="mb-1 fw-normal text-secondary">Corsi per formare i tuoi dipendenti</p>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item id="first-drop" className="p-0 ps-3" href="#/action-1">
                    <div id="drop-div" className="p-0 m-0">
                      <h5 className="mb-0 ">Centro per amministratori</h5>
                      <p className="mb-1 fw-normal text-secondary">Gestisci i dettagli di fatturazione e account</p>
                    </div>
                  </Dropdown.Item>

                  <Dropdown.Item id="first-drop" className="p-0 " href="#/action-1">
                    <div id="drop-div" className="p-0 m-0 border-top">
                      <h5 className="mb-0 ps-3 mt-2 mb-2">
                        Assumi su Linkedln <i className="bi bi-plus-lg "></i>{" "}
                      </h5>
                    </div>
                  </Dropdown.Item>
                </DropdownButton>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center">
            <Col sm={6} className="p-0">
              <div id="mini-footer-item" className="p-0 mb-1 me-0  text-end">
                <a id="mini-footer-text" className="pe-1 text-decoration-none">
                  Scarica l'app Linkedln
                </a>
              </div>
            </Col>
            <Col sm={6} className="p-0">
              <div id="mini-footer-item">
                <a id="mini-footer-text" className="ps-0">
                  Altro
                </a>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      <div className="text-center">
        <svg
          role="img"
          aria-hidden="false"
          aria-label="LinkedIn"
          className="global-footer-compact__linkedin-logo"
          xmlns="http://www.w3.org/2000/svg"
          width="56"
          height="14"
          viewBox="0 0 56 14"
          data-supported-dps="56x14"
          data-test-icon="linkedin-logo-blue-xxsmall"
        >
          <image href="https://static.licdn.com/aero-v1/sc/h/aahlc8ivbnmk0t3eyz8as5gvr" x="0" y="0" width="56" height="14"></image>
        </svg>
        <span className="ps-1">LinkedIn Corporation © 2025</span>
      </div>
    </>
  );
};

export default MiniFooter;
