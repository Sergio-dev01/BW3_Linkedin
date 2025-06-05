import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import TopBar from "./components/TopBar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <Container fluid>
      <Row className="justify-content-center">
        {" "}
        <TopBar />
        <Col xs={12} md={10} className="p-0">
          <MainContent className="MainContent" />
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
