import { Card } from "react-bootstrap";

const HomeFourthAsideLeftComponent = () => {
  return (
    <Card>
      <Card.Body>
        <div className="d-flex justify-content-between align-items-start">
          <div className="d-flex flex-column">
            <Card.Link href="#" className="text-decoration-none text-black">
              {" "}
              <i className="bi bi-bookmark-fill me-1"></i> Elementi Salvati
            </Card.Link>
            <Card.Link href="#" className="text-decoration-none ms-0 text-black ">
              {" "}
              <i className="bi bi-people-fill me-1"></i> Gruppi
            </Card.Link>
            <Card.Link href="#" className="text-decoration-none text-black ms-0">
              {" "}
              <i className="bi bi-newspaper me-1"></i> Newsletter
            </Card.Link>
            <Card.Link href="#" className="text-decoration-none ms-0  text-black  ">
              {" "}
              <i className="bi bi-calendar-event me-1"></i> Eventi
            </Card.Link>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};
export default HomeFourthAsideLeftComponent;
