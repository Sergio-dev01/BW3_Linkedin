import { useRef } from "react";
import { Card, Button } from "react-bootstrap";

const MyCarousel = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="position-relative">
      {/* Scroller buttons */}
      <Button
        variant="light"
        className="position-absolute top-50 start-0 translate-middle-y z-1"
        onClick={scrollLeft}
        style={{ borderRadius: "50%", backgroundColor: "rgb(135 135 135 / 42%)" }}
      >
        ‹
      </Button>

      <div
        ref={scrollRef}
        className="d-flex overflow-auto gap-3 "
        style={{
          scrollSnapType: "x mandatory",
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
        }}
      >
        {/* Card 1 */}
        <Card
          className="flex-shrink-0 text-start border border-secondary-subtle"
          style={{ maxWidth: "400px", scrollSnapAlign: "start", fontSize: "0.8rem", borderWidth: "1px" }}
        >
          <Card.Body className="pt-2 pb-0">
            <Card.Title className="mb-1 ">Disponibile a lavorare</Card.Title>
            <Card.Text className="text-muted mb-1">Ruoli di Programmatore e Tecnico informatico</Card.Text>
            <a className="text-decoration-none" href="#dettagli">
              Mostra dettagli
            </a>
          </Card.Body>
        </Card>

        {/* Card 2 */}
        <Card
          className="flex-shrink-0 text-start border border-secondary-subtle"
          style={{ maxWidth: "400px", scrollSnapAlign: "start", fontSize: "0.8rem", borderWidth: "1px" }}
        >
          <Card.Body className="pt-2 pb-0">
            <Card.Title className="mb-1" style={{ fontSize: "0.8rem" }}>
              <strong>Fai sapere che stai facendo selezione</strong>
            </Card.Title>
            <Card.Text className="mb-1 " style={{ fontSize: "0.8rem" }}>
              e attrai candidati qualificati.
            </Card.Text>
            <a className="text-decoration-none" href="#inizia">
              Inizia
            </a>
          </Card.Body>
        </Card>

        {/* Card 3 */}

        <Card
          className="flex-shrink-0 text-start border border-secondary-subtle"
          style={{ maxWidth: "400px", scrollSnapAlign: "start", fontSize: "0.8rem", borderWidth: "1px" }}
        >
          <Card.Body className="pt-2 pb-0">
            <Card.Title className="mb-1 " style={{ fontSize: "0.8rem" }}>
              <strong>Metti in risalto i tuoi servizi</strong>
            </Card.Title>
            <Card.Text className="mb-1 " style={{ fontSize: "0.8rem" }}>
              in un'apposita sezione sul tuo profilo, cosi sarà più facile trovarti.
            </Card.Text>
            <a className="text-decoration-none" href="#inizia">
              Inizia
            </a>
          </Card.Body>
        </Card>
      </div>

      <Button
        variant="light"
        className="position-absolute top-50 end-0 translate-middle-y z-1"
        onClick={scrollRight}
        style={{ borderRadius: "50%", backgroundColor: "rgb(135 135 135 / 42%)" }}
      >
        ›
      </Button>
    </div>
  );
};

export default MyCarousel;
