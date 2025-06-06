import { Col, Container, Row } from "react-bootstrap"
import HomeFirstAsideLeftComponent from "./HomeFirstAsideLeftComponent"
import JobAsideSecond from "./JobsAsideSecond"
import MiniFooter from "./MiniFooter"
import ProfileCard from "./ProfileCard"


const Jobs =()=>{
    return(
       <Container className="main-content my-4">
      <Row className="justify-content-center">
        <Col md={4} className="pe-4">
          <div className=" d-flex flex-column d-sm-none d-md-block ">
            <HomeFirstAsideLeftComponent/>
        <JobAsideSecond/>
        <MiniFooter/>

          </div>
        </Col>
        <Col md={8} className=" p-0">
          <div className="  d-flex flex-column gap-2  ">
            <ProfileCard/>
            
          </div>
        </Col>
      </Row>
    </Container>)
}
export default Jobs



