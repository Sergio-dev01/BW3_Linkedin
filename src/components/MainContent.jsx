import { Button, Card, Col, Container, Row } from "react-bootstrap";
import ProfileCard from "./ProfileCard";
import ConsigliatoPerTe from "./ConsigliatoPerTe";
import SecondCard from "./SecondCard";
import FormazioneCard from "./FormazioneCard";
import AsidePrimoComponente from "./AsidePrimoComponente";
import AsideSecondoComponente from "./AsideSecondoComponente";

const MainContent = () => {
  return (
    <Container className="main-content my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <ProfileCard />
          <ConsigliatoPerTe/>
          <SecondCard/>
          <FormazioneCard/>
        </Col>
        <Col md={4}>
        <AsidePrimoComponente/>
        <AsideSecondoComponente/>
        </Col>
      </Row>
    </Container>
  );
};

export default MainContent;
