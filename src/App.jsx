import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import TopBar from "./components/TopBar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/profile"
          element={
            <Container fluid>
              <Row className="justify-content-center">
                <TopBar />
                <Col xs={12} md={10} className="p-0">
                  <MainContent className="MainContent" />
                  <Footer />
                </Col>
              </Row>
            </Container>
          }
        />
        <Route
          path="/home"
          element={
            <Container fluid>
              <Row className="justify-content-center">
                <TopBar />
              </Row>
            </Container>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
