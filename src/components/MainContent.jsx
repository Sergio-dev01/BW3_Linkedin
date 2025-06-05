import { Button, Card, Col, Container, Row } from "react-bootstrap";
import ProfileCard from "./ProfileCard";
import ConsigliatoPerTe from "./ConsigliatoPerTe";
import SecondCard from "./SecondCard";
import FormazioneCard from "./FormazioneCard";
import AsidePrimoComponente from "./AsidePrimoComponente";
import AsideSecondoComponente from "./AsideSecondoComponente";
import EsperienzeComponent from "./EsperienzeComponent";
import CompetenzeComponent from "./CompetenzeComponent";
import AddPost from "./AddPost";
import PostsList from "./PostList";

const MainContent = () => {
  return (
    <Container className="main-content my-4">
      <Row className="justify-content-center">
        <Col md={8} className="p-0">
          <div className="d-flex flex-column gap-2 ">
            <ProfileCard />
            <ConsigliatoPerTe />
            <SecondCard />
            <FormazioneCard />
            <EsperienzeComponent />
            <CompetenzeComponent />
          </div>
        </Col>
        <Col md={4} className="ps-4 ">
          <div className="d-flex flex-column d-sm-none d-md-block">
            <AsidePrimoComponente />
            <AsideSecondoComponente />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MainContent;
