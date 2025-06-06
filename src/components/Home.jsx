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
        <Col md={3} className="p-sm-0">
          <HomeFirstAsideLeftComponent />
          <HomeSecondAsideLeftComponents />
          <HomeThirdAsideComponent />
          <HomeFourthAsideLeftComponent />
        </Col>

        <Col md={6} className=" px-sm-0 px-md-4">
          <HomeCentralComponent />
          <AddPost />
          <h3 className="text-center m-0 py-1">POST DEGLI UTENTI</h3>
          <PostsList />
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
