import { Button, Card } from "react-bootstrap";


const EsperienzeComponent = () => {
    return (
        
            <Card id="ext-card">
                <Card.Body id="card-dashed" >
                    <div className="d-flex align-items-center justify-content-between mb-2">
                    <Card.Title className="mb-0">Esperienze</Card.Title>
                    <div> <i className="bi bi-x-lg"></i> </div>
                    </div>
                    <Card.Text>
                        Metti in risalto i risultati raggiunti e ottieni fino a 2 volte più visualizzazioni del profilo e collegamenti
                    </Card.Text>
                    <div className="d-flex align-items-center">
                        <i className="bi bi-bag-dash fs-4 me-3 text-muted"></i>
                        <p className="mb-0 text-muted">
                            Qualifica<br />
                            Organizzazione<br />
                            2023 - Presente
                        </p>
                    </div>
                    <Button variant="outline-primary"  size="sm"  className="btn rounded-pill mt-2">
                        Aggiungi esperienza
                    </Button>
                </Card.Body>
            </Card>
        
    );
};
export default EsperienzeComponent;