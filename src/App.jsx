import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import TopBar from "./components/TopBar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
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
          path="/"
          element={
            <Container fluid>
              <Row className="justify-content-center">
                <TopBar />

                <Col xs={12} md={10} className="p-0">
                  <Home />
                </Col>
              </Row>
            </Container>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
