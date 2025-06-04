import { Button, Card } from "react-bootstrap"

const CompetenzeComponent =()=>{
    return(
            <Card id="ext-card">
                <Card.Body id="card-dashed" >
                    <div className="d-flex align-items-center justify-content-between mb-2 ">
                    <Card.Title className="mb-0">Competenze</Card.Title>
                    <div> <i className="bi bi-x-lg"></i> </div>
                    </div>
                    <Card.Text className="text-muted">
                       Fai capire se hai un profilo adatto per le nuove opportunità: il 50% dei recruiter usa i dati sulle competenze per coprire le posizioni aperte
                    </Card.Text>
                    <p className="text-muted mb-0">Soft skill</p>
                    <hr className="text-muted my-0"/>
                    <p className="text-muted">Competenze tecniche</p>
                    
                    <Button variant="outline-primary" size="sm"  className="btn rounded-pill mt-2">
                        Aggiungi competenza
                    </Button>
                </Card.Body>
            </Card>



    )
}
export default CompetenzeComponent