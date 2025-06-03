import { Button, Card, Col, Container, Row } from "react-bootstrap";
import ProfileCard from "./ProfileCard";

const MainContent = () => {
  return (
    <Container className="main-content my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <ProfileCard />
        </Col>
        <Col md={4}>{/* <ProfileCard /> */}</Col>
      </Row>
    </Container>
  );
};

export default MainContent;
