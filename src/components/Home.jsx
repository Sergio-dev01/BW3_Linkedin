import { Col, Container, Row } from "react-bootstrap";
import HomeFirstAsideLeftComponent from "./HomeFirstAsideLeftComponent";
import HomeSecondAsideLeftComponents from "./HomeSecondAsideLeftComponents";
import HomeThirdAsideComponent from "./HomeThirdAsideComponent";
import HomeFourthAsideLeftComponent from "./HomeFourthAsideLeftComponent";
import HomeCentralComponent from "./HomeCentralComponent";
import ConsigliatiPerTe from "./ConsigliatiPerTe";
import AsideCard from "./AsideCard";
import MiniFooter from "./MiniFooter";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col md={3}>
          <HomeFirstAsideLeftComponent />
          <HomeSecondAsideLeftComponents />
          <HomeThirdAsideComponent />
          <HomeFourthAsideLeftComponent />
        </Col>

        <Col md={6}>
          <HomeCentralComponent />
          <ConsigliatiPerTe />
        </Col>
        <Col md={3} className="p-0">
          <AsideCard />
          <MiniFooter />
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
