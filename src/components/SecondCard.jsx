import { Card } from "react-bootstrap"

const SecondCard=()=>{
    return(
        <>
            <Card>
                <Card.Body>
                    <Card.Title className="mb-1">Analisi</Card.Title>
                    <Card.Subtitle className="mb-3 text-muted small">
                        <i className="bi bi-eye-fill pe-1"></i>Solo per te
                    </Card.Subtitle>
                    <div className="d-flex flex-column flex-md-row gap-2">
                        <div>
                            <div className="d-flex align-items-center ">
                                <span style={{width: 24, display: "inline-block"}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                                        <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
                                    </svg>
                                </span>
                                <p className="mb-0 ms-2 fw-bold">3 visualizzazioni del profilo</p>
                            </div>
                            <div className="d-flex align-items-center">
                                <span style={{width: 24, display: "inline-block"}}></span>
                                <p className="mb-0 ms-2" style={{paddingRight: "8px"}}>Aggiorna il tuo profilo per attrarre visitatori.</p>
                            </div>
                        </div>
                        <div>
                            <div className="d-flex align-items-center ">
                                <span style={{width: 24, display: "inline-block"}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                                        <path d="M23 20v1H1v-1zM8 9H2v10h6zm7-6H9v16h6zm7 11h-6v5h6z"></path>
                                    </svg>
                                </span>
                                <p className="mb-0 ms-2 fw-bold">2 impressioni del post</p>
                            </div>
                            <div className="d-flex align-items-center">
                                <span style={{width: 24, display: "inline-block"}}></span>
                                <p className="mb-0 ms-2" style={{paddingRight: "8px"}}>Crea un post per aumentare l'interesse.</p>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
            <div className="text-center py-2 bg-white border rounded-bottom">
                <span className="fw-bold" style={{cursor: "pointer"}}>Mostra tutte le analisi <i class="bi bi-arrow-right"></i></span>
            </div>
        </>
    )
}
export default SecondCard