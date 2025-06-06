import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Spinner, Alert } from "react-bootstrap";
import { fetchJobs } from "../redux/action/index";

const RicercheLavoro = () => {
  const dispatch = useDispatch();

  const { jobs, loading, error } = useSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  return (
    <Card className="mb-2">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <Card.Title className="mb-1">Ricerche di offerte di lavoro recenti</Card.Title>
          <div>
            <p style={{ cursor: "pointer" }}>Cancella</p>
          </div>
        </div>

        {loading && <Spinner animation="border" />}
        {error && <Alert variant="danger">Errore: {error}</Alert>}
        {!loading && !error && jobs.length === 0 && <p>Nessun lavoro trovato.</p>}

        {jobs.slice(0, 3).map((lavoro, index) => (
          <div key={lavoro._id || index}>
            {index !== 0 && <hr />}

            <div className="d-flex align-items-center">
              <p className="mb-0 fw-p mt-2">
                {lavoro.title} <span className="fw-small">· {Math.floor(Math.random() * 10 + 1)} nuove</span>
              </p>
            </div>
            <div className="d-flex align-items-center">
              <p className="mb-0 fw-small">{lavoro.candidate_required_location}</p>
            </div>
          </div>
        ))}
      </Card.Body>
    </Card>
  );
};

export default RicercheLavoro;
