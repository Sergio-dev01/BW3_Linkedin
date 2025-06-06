import { Button, Card, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomeCarousel = () => {
  return (
    <Carousel interval={null} controls indicators={null} className="border-0">
      <Carousel.Item>
        <Card>
          <Card.Title className="p-2">Preparati per la tua ricerca di lavoro</Card.Title>
          <Card.Img variant="top" src="https://media.licdn.com/media/AAYQAgSuAAgAAQAAAAAAACwog6StkzhzSlK17m4iY5d_Xg.png" />
          <Card.Body>
            <Card.Text>Aggiungi la tua esperienza lavorativa e le tue competenze per mostrare i tuoi punti di forza ai recruiter</Card.Text>
            <Link to="/profile">
              <Button id="btn-aggiorna" variant="primary" className=" btn rounded-pill">
                Aggiorna profilo
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </Carousel.Item>
      <Carousel.Item>
        <Card>
          <Card.Title>Preparati per la tua ricerca di lavoro</Card.Title>
          <Card.Img variant="top" src="  https://media.licdn.com/media/AAYQAgSuAAgAAQAAAAAAACnZ-D2hlcNzRqqPRb5a8tlJcA.png   " />
          <Card.Body>
            <Card.Text>Seguile aziende per cui vuoi lavorare per farti notare dai recruiter.</Card.Text>
            <Link to="/profile">
              <Button variant="primary" className=" btn rounded-pill">
                Segui aziende
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </Carousel.Item>
      <Carousel.Item>
        <Card>
          <Card.Title>Preparati per la tua ricerca di lavoro</Card.Title>
          <Card.Img variant="top" src=" https://media.licdn.com/media/AAYQAgSuAAgAAQAAAAAAACo7WHxKUCLyR-mziznrNA3hZA.png  " />
          <Card.Body>
            <Card.Text>Collegati con ex colleghi o amici e chiedi di segnalarti per offerte di lavoro.</Card.Text>
            <Link to="/profile">
              <Button variant="primary" className=" btn rounded-pill ">
                Aggiungi collegamenti
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </Carousel.Item>
    </Carousel>
  );
};
export default HomeCarousel;
