import { Col, Container, Row } from "react-bootstrap";
import HomeFirstAsideLeftComponent from "./HomeFirstAsideLeftComponent";
import HomeSecondAsideLeftComponents from "./HomeSecondAsideLeftComponents";
import HomeThirdAsideComponent from "./HomeThirdAsideComponent";
import HomeFourthAsideLeftComponent from "./HomeFourthAsideLeftComponent";
import HomeCentralComponent from "./HomeCentralComponent";
import ConsigliatiPerTe from "./ConsigliatiPerTe";
import AsideCard from "./AsideCard";
import MiniFooter from "./MiniFooter";
import AddPost from "./AddPost";
import PostsList from "./PostList";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col md={3} className="pe-0">
          <HomeFirstAsideLeftComponent />
          <HomeSecondAsideLeftComponents />
          <HomeThirdAsideComponent />
          <HomeFourthAsideLeftComponent />
        </Col>

        <Col md={6} className="px-4">
          <HomeCentralComponent />
          <AddPost />
          <PostsList />
          <ConsigliatiPerTe />
        </Col>
        <Col md={3} className="p-4">
          <AsideCard />
          <MiniFooter />
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
