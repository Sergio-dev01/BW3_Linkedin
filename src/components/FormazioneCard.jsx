import { Card } from "react-bootstrap"

const FormazioneCard=()=>{
    return(
<Card>
  <Card.Body>
    <div className="d-flex align-items-center justify-content-between mb-4">
      <Card.Title className="mb-0">Formazione</Card.Title>
      <div className="d-flex align-items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
        </svg>
        <i className="bi bi-pencil ms-2"></i>
      </div>
    </div>
    <div className="d-flex align-items-center">
      <img
        width="48"
        height="48"
        src="https://media.licdn.com/dms/image/v2/C4E0BAQHYgix-Ynux1A/company-logo_100_100/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1754524800&amp;v=beta&amp;t=XJxgItOMPOUX4iTRarWMEsUjkKVd_7eYwBYaJq2kjUc"
        loading="lazy"
        alt="Logo di EPICODE Institute of Technology"
        className="me-3"
      />
      <div>
        <h6 className="mb-1">EPICODE Institute of Technology</h6>
        <Card.Subtitle className="mb-0 text-muted small">
          2025-2026
        </Card.Subtitle>
      </div>
    </div>
  </Card.Body>
</Card>
    )
}
export default FormazioneCard