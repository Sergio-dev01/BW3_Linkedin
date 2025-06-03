import { Card } from "react-bootstrap"

const AsidePrimoComponente=()=>{
    return(
      <Card>
        <Card.Body>
         
          <Card className="mb-3 border-0">
            <Card.Body>
              <div className="d-flex align-items-center justify-content-between mb-4">
                <Card.Title className="mb-0">Lingua del profilo</Card.Title>
                <div className="d-flex align-items-center">
                  <i className="bi bi-pencil ms-2"></i>
                </div>
              </div>
              <Card.Text>
                Italiano
              </Card.Text>
            </Card.Body>
          </Card>
         
          <hr className="my-2" />
          
          <Card className="border-0">
            <Card.Body>
              <div className="d-flex align-items-center justify-content-between mb-4">
                <Card.Title className="mb-0">Lingua del profilo</Card.Title>
                <div className="d-flex align-items-center">
                  <i className="bi bi-pencil ms-2"></i>
                </div>
              </div>
              <Card.Text>
                Italiano
              </Card.Text>
            </Card.Body>
          </Card>
        </Card.Body>
      </Card>
    )
}
export default AsidePrimoComponente