import { Button, Card } from "react-bootstrap"

const AsideSecondoComponente=()=>{
    return(
        <div className="bg-white border rounded-3 p-3">
            <div className="ms-3">
                <h5 className="mb-0">Persone che potresti conoscere</h5>
                <p className="text-muted small mb-2">Dalla tua scuola o università</p>
            </div>
            <Card className="border-0 bg-transparent mb-0">
                <Card.Body className="p-0">
                    
                    <Card className="mb-3 border-0 bg-transparent">
                        <Card.Body className="pb-0">
                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <div className="d-flex align-items-center">
                                    <img
                                        src="data:image/png;base64,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"
                                        alt="profilo"
                                        width={32}
                                        height={32}
                                        className="rounded-circle me-2"
                                    />
                                    <div>
                                        <Card.Title className="mb-0">Nome Utente</Card.Title>
                                        <Card.Text className="text-muted small mb-0">Italiano</Card.Text>
                                        <Button variant="light" size="sm"  className="rounded-pill border-dark mt-3 small"><i class="bi bi-person-plus-fill"></i> Aggiungi</Button>
                                    </div>
                                </div>
                                
                            </div>
                            
                        </Card.Body>
                    </Card>
                    
                </Card.Body>
            </Card>
            <hr className="my-2" />
              <Card className="border-0 bg-transparent mb-0">
                <Card.Body className="p-0">
                    
                    <Card className="mb-3 border-0 bg-transparent">
                        <Card.Body className="pb-0">
                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <div className="d-flex align-items-center">
                                    <img
                                        src="data:image/png;base64,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"
                                        alt="profilo"
                                        width={32}
                                        height={32}
                                        className="rounded-circle me-2"
                                    />
                                    <div>
                                        <Card.Title className="mb-0">Nome Utente</Card.Title>
                                        <Card.Text className="text-muted small mb-0">Italiano</Card.Text>
                                        <Button variant="light" size="sm"  className="rounded-pill border-dark mt-3 small"><i class="bi bi-person-plus-fill"></i> Aggiungi</Button>
                                    </div>
                                </div>
                                
                            </div>
                            
                        </Card.Body>
                    </Card>
                    
                </Card.Body>
            </Card>
        </div>
    )
}
export default AsideSecondoComponente