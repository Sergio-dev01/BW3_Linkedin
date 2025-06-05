import { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProfiles } from "../redux/action";

const AsideSecondoComponente = () => {
  const dispatch = useDispatch();

  const { profiles } = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(fetchAllProfiles());
  }, [dispatch]);
  if (!profiles || profiles.length === 0) {
    return <p>Caricamento profili...</p>;
  }
  return (
    <div className="bg-white border rounded-3 p-3 mt-3">
      <div className="ms-3">
        <h5 className="mb-0">Persone che potresti conoscere</h5>
        <p className="text-muted small mb-2">Dalla tua scuola o università</p>
      </div>
      {profiles.slice(0, 5).map((profile) => (
        <Card key={profile.id} className="border-0 bg-transparent mb-0">
          <Card.Body className="p-0">
            <Card className="mb-3 border-0 bg-transparent">
              <Card.Body className="pb-0">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div className="d-flex align-items-center">
                    <img src={profile.image} alt="profilo" width={32} height={32} className="rounded-circle me-2" />
                    <div>
                      <Card.Title className="mb-0">
                        {profile.name} {profile.surname}
                      </Card.Title>
                      <Card.Text className="text-muted small mb-0">{profile.bio}</Card.Text>
                      <Button variant="light" size="sm" className="rounded-pill border-dark mt-3 small">
                        <i className="bi bi-person-plus-fill"></i> Collegati
                      </Button>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Card.Body>
          <hr className="my-2" />
        </Card>
      ))}
    </div>
  );
};
export default AsideSecondoComponente;
