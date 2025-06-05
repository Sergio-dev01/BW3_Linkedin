import { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProfiles } from "../redux/action";

const ConsigliatiPerTe = () => {
  const dispatch = useDispatch();

  const { profiles } = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(fetchAllProfiles());
  }, [dispatch]);
  if (!profiles || profiles.length === 0) {
    return <p>Caricamento profili...</p>;
  }
  return (
    <div className="bg-white border rounded p-3">
      <h5>Consigliati per te</h5>
      {profiles.slice(0, 5).map((profile) => (
        <Card key={profile.id} className="border-0 bg-white border-bottom">
          <Card.Body className="pb-0">
            <div className="d-flex align-items-start mb-4">
              <img src={profile.image} alt="profilo" width={32} height={32} className="rounded-circle me-2" />
              <div className="d-flex justify-content-between flex-grow-1">
                <div>
                  <Card.Title className="mb-1">
                    {profile.name} {profile.surname}
                  </Card.Title>
                  <Card.Text className="text-muted small mb-0">{profile.title}</Card.Text>
                </div>
                <div className="ms-3 d-flex align-items-center">
                  <Button variant="outline-primary" size="sm" className="rounded-pill  small">
                    <i className="bi bi-plus-lg "></i> Segui
                  </Button>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};
export default ConsigliatiPerTe;
