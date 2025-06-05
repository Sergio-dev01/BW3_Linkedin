import { Card } from "react-bootstrap";

const HomeSecondAsideLeftComponents = () => {
  return (
    <Card className="mb-2">
      <Card.Body>
        <Card.Title>Visualizza tutte le analisi</Card.Title>

        <div className="d-flex justify-content-between align-items-start">
          <div className="d-flex flex-column">
            <Card.Link href="#" className="text-decoration-none text-black">
              Collegamenti
            </Card.Link>
            <Card.Link href="#" className="text-muted text-decoration-none ms-0">
              Espandi la tua rete
            </Card.Link>
          </div>

          <i className="bi bi-person-plus-fill"></i>
        </div>
      </Card.Body>
    </Card>
  );
};
export default HomeSecondAsideLeftComponents;
