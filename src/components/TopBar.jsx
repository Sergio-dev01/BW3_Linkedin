import { useEffect } from "react";
import { Button, Col, Container, Dropdown, Form, Image, InputGroup, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchMyProfile } from "../redux/action";
import { Bullseye, CaretDownFill, CompassFill, Easel2Fill, FileEarmarkBarGraphFill, Linkedin, PatchCheckFill, PeopleFill, Search, Youtube } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
const TopBar = function () {
  const dispatch = useDispatch();

  const { myProfile } = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(fetchMyProfile());
  }, [dispatch]);
  if (!myProfile) return <p>Nessun profilo disponibile</p>;
  console.log(myProfile.image);
  return (
    <Container fluid className="navbar-container">
      <Row className="justify-content-center">
        <Col lg={10} md={11} className="p-0">
          <Navbar expand="lg" className="navbar navbar-expand-lg py-0 ">
            <div className="d-flex w-100 align-items-center left-navbar ">
              <Row className="w-100 align-items-center">
                <Col xs={12} md={6} className="d-flex align-items-center mb-2 mb-md-0 gap-5">
                  <Navbar.Brand href="#" className="me-2">
                   <Link to="/" style={{ textDecoration: "none" }}>  <Image className="img-fluid" style={{ width: "35px" }} src="LinkedIn_logo_initials.png" alt="logo" /> </Link>
                  </Navbar.Brand>
                  <div>
                    <Form className="d-flex flex-grow-1 ">
                      <Row className="w-100  d-xxl-block d-sm-none">
                        <Col xs={12}>
                          <InputGroup className="navbar-form border-0">
                            <InputGroup.Text className="border-end-0 pe-1 bg-transparent border-0">
                              <Search className="text-muted" />
                            </InputGroup.Text>
                            <Form.Control type="text" placeholder="Cerca" className="bg-transparent border-0 shadow-none" />
                          </InputGroup>
                        </Col>
                      </Row>
                      <Search className="d-sm-block d-xxl-none fs-3" />
                    </Form>
                  </div>
                </Col>

                <Col xs={12} md={6} className="d-flex justify-content-md-end justify-content-center align-items-center">
                  <Navbar.Collapse id="navbarSupportedContent">
                    <Nav className="me-auto mb-2 mb-lg-0 d-flex flex-row flex-md-nowrap justify-content-center justify-content-md-end w-100">
                      <Nav.Link className="text-dark fs-custom pb-0 navbar-icons active" href="#">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                          <Link to="/" style={{ textDecoration: "none" }}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="#666666"
                              width="24"
                              height="24"
                              className="mercado-match"
                              focusable="false"
                            >
                              <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z" />
                            </svg>
                          </Link>
                          <p>Home</p>
                        </div>
                      </Nav.Link>
                      <Nav.Link className="text-dark fs-custom pb-0 navbar-icons" href="#">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            data-supported-dps="24x24"
                            fill="#666666"
                            className="mercado-match"
                            width="24"
                            height="24"
                            focusable="false"
                          >
                            <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
                          </svg>{" "}
                          <p>Rete</p>
                        </div>
                      </Nav.Link>
                         <Nav.Link className="text-dark fs-custom pb-0 navbar-icons" href="">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                          <Link to="/jobs" style={{ textDecoration: "none" }}>   <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            data-supported-dps="24x24"
                            fill="#666666"
                            className="mercado-match"
                            width="24"
                            height="24"
                            focusable="false"
                          >
                            <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
                          </svg></Link> 
                          <p>Lavoro</p>
                        </div>
                      </Nav.Link>
                      
                      <Nav.Link className="text-dark fs-custom pb-0 navbar-icons" href="#">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            data-supported-dps="24x24"
                            fill="#666666"
                            className="mercado-match"
                            width="24"
                            height="24"
                            focusable="false"
                          >
                            <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
                          </svg>{" "}
                          <p>Messaggistica</p>
                        </div>
                      </Nav.Link>
                      <Nav.Link className="text-dark fs-custom pb-0 navbar-icons" href="#">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            data-supported-dps="24x24"
                            fill="#666666"
                            className="mercado-match"
                            width="24"
                            height="24"
                            focusable="false"
                          >
                            <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
                          </svg>
                          <p>Notifiche</p>
                        </div>
                      </Nav.Link>
                      <Dropdown align="end">
                        <Dropdown.Toggle
                          variant="link"
                          id="dropdown-user"
                          className="d-flex align-items-center gap-2 text-decoration-none navbar-icons"
                          style={{ color: "black" }}
                        >
                          <div className="d-flex flex-column justify-content-center align-items-center">
                            <img className="img-fluid" style={{ width: "25px", height: "25px", borderRadius: "50%" }} src={myProfile.image} alt="profileImg" />
                            <div className="d-flex align-items-center gap-1">
                              <p className="mb-0">Tu</p>
                              <CaretDownFill size={12} />
                            </div>
                          </div>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <div className="px-3 py-2">
                            <strong>
                              {myProfile.name} {myProfile.surname}
                            </strong>
                            <div className="text-muted small">{myProfile.title ? myProfile.title : "--"}</div>
                            <div className="d-flex gap-2 mt-2">
                              <Link to="/profile" style={{ textDecoration: "none" }}>     <Button variant="outline-primary" size="sm">
                                Visualizza profilo
                              </Button> </Link>
                              <Button variant="primary" size="sm">
                                Verifica
                              </Button>
                            </div>
                          </div>
                          <Dropdown.Divider />
                          <Dropdown.Header className="text-black fs-6 fw-bold">Account</Dropdown.Header>
                          <Dropdown.Item className="text-secondary">🎁 Prova 1 mese di Premium per 0 EUR</Dropdown.Item>
                          <Dropdown.Item className="text-secondary">Impostazioni e privacy</Dropdown.Item>
                          <Dropdown.Item className="text-secondary">Guida</Dropdown.Item>
                          <Dropdown.Item className="text-secondary">Lingua</Dropdown.Item>
                          <Dropdown.Divider />
                          <Dropdown.Header className="text-black fs-6 fw-bold">Gestisci</Dropdown.Header>
                          <Dropdown.Item className="text-secondary">Post e attività</Dropdown.Item>
                          <Dropdown.Item className="text-secondary">Account per la pubblicazione di offerte</Dropdown.Item>
                          <Dropdown.Divider />
                          <Dropdown.Item className="text-secondary">Esci</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Nav>
                  </Navbar.Collapse>
                </Col>
              </Row>
            </div>
            <div className="d-flex align-items-center gap-4" style={{ width: "400px" }}>
              <Dropdown align="end">
                <Dropdown.Toggle
                  variant="link"
                  id="dropdown-user"
                  className="d-flex flex-row align-items-center text-decoration-none navbar-icons"
                  style={{ color: "black" }}
                >
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      data-supported-dps="24x24"
                      fill="#666666"
                      className="mercado-match"
                      width="24"
                      height="24"
                      focusable="false"
                    >
                      <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>
                    </svg>
                    <div className="d-flex align-items-center gap-1 ms-2">
                      <p className="mb-0 text-dark">Per le aziende</p>
                      <CaretDownFill size={12} />
                    </div>
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <div className="dropdownArea d-flex justify-content-center align-items-center">
                    <div className="d-flex justify-content-center align-items-center dropdownArea2">
                      <div className="d-flex flex-column justify-content-center dropdownArea3">
                        <Dropdown.Header className="text-black fs-4 fw-bold my-4">Le mie app</Dropdown.Header>
                        <div className="ms-4">
                          <div className="d-flex align-items-center gap-2 mb-3">
                            <CompassFill className="mb-3 custom-icon" />
                            <p className="fw-bold">Trova nuovi clienti</p>
                          </div>
                          <div className="d-flex align-items-center gap-2 mb-3">
                            <PeopleFill className="mb-3 custom-icon" />
                            <p className="fw-bold">Gruppi</p>
                          </div>
                          <h1 className="text-secondary fs-6 mb-3">Talent</h1>
                          <div className="d-flex align-items-center gap-2 mb-3">
                            <FileEarmarkBarGraphFill className="mb-3 custom-icon" />
                            <p className="fw-bold">Talent Insights</p>
                          </div>
                          <div className="d-flex align-items-center gap-2 mb-3">
                            <Easel2Fill className="mb-3 custom-icon" />
                            <p className="fw-bold">Pubblica un offerta di lavoro</p>
                          </div>
                          <h1 className="text-secondary fs-6 mb-3">Vendite</h1>
                          <div className="d-flex align-items-center gap-2 mb-3">
                            <PatchCheckFill className="mb-3 custom-icon" />
                            <p className="fw-bold">Trova i migliori freelancer</p>
                          </div>
                          <h1 className="text-secondary fs-6 mb-3">Marketing</h1>
                          <div className="d-flex align-items-center gap-2 mb-3">
                            <Bullseye className="mb-3 custom-icon" />
                            <p className="fw-bold">Pubblicizza</p>
                          </div>
                          <h1 className="text-secondary fs-6 mb-3">Learning</h1>
                          <div className="d-flex align-items-center gap-2 mb-3">
                            <Youtube className="mb-3 custom-icon" />
                            <p className="fw-bold">Learning</p>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex flex-column justify-content-center ms-5 dropdownArea4">
                        <Dropdown.Header className="text-black fs-4 fw-bold mb-4 ps-0">Scopri altro per il business</Dropdown.Header>
                        <div className="d-flex flex-column mb-3">
                          <h1 className="fw-bold fs-6">Assumi su Linkedln</h1>
                          <p className="text-secondary fs-6">Trova, attrai e assumi</p>
                        </div>
                        <div className="d-flex flex-column mb-3">
                          <h1 className="fw-bold fs-6">Vendi con LinkedIn</h1>
                          <p className="text-secondary fs-6">Sblocca nuove opportunità di vendita</p>
                        </div>
                        <div className="d-flex flex-column mb-3">
                          <h1 className="fw-bold fs-6">Offerta di lavoro gratuita</h1>
                          <p className="text-secondary fs-6">Ottieni rapidamente candidati qualificati</p>
                        </div>
                        <div className="d-flex flex-column mb-3">
                          <h1 className="fw-bold fs-6">Fai pubblicità su Linkedin</h1>
                          <p className="text-secondary fs-6">Acquisisci clienti e fai crescere la tua azienda</p>
                        </div>
                        <div className="d-flex flex-column mb-3">
                          <h1 className="fw-bold fs-6">Inizia con Premium</h1>
                          <p className="text-secondary fs-6">Amplia e sfrutta la tua rete</p>
                        </div>
                        <div className="d-flex flex-column mb-3">
                          <h1 className="fw-bold fs-6">Impara con LinkedIn</h1>
                          <p className="text-secondary fs-6">Corsi per formare i tuoi dipendenti</p>
                        </div>
                        <div className="d-flex flex-column mb-3">
                          <h1 className="fw-bold fs-6">Centro per amministratori</h1>
                          <p className="text-secondary fs-6">Gestisci i dettagli di fatturazione e account</p>
                        </div>

                        <h1 className="fw-bold fs-6">Crea una pagina iniziale +</h1>
                      </div>
                    </div>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
              <Nav.Link className="d-md-none d-lg-block">
                <p className="business text-center p-3 pb-0" style={{ width: "10rem" }}>
                  Prova Premium per 0 <br /> EUR
                </p>
              </Nav.Link>
            </div>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
};

export default TopBar;
