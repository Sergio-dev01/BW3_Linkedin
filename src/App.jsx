import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import TopBar from "./components/TopBar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <Container fluid>
      <Row>
        <TopBar />
        <Col md={1} ></Col>
       
        <Col xs={12} md={10} >
          
          <MainContent />
          
        </Col>
        <Footer />
        <Col md={1} ></Col>
      </Row>
    </Container>
  );
}

export default App;
