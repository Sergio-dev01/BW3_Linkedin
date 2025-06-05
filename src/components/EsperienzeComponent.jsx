import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import ExperienceModal from "./ExperienceModal";
import { useDispatch, useSelector } from "react-redux";
import { deleteExperience, fetchExperiences, fetchMyProfile } from "../redux/action";

const EsperienzeComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const myProfile = useSelector((state) => state.profile.myProfile);
  const experiences = useSelector((state) => state.profile.experiences || []);

  useEffect(() => {
    dispatch(fetchMyProfile());
  }, [dispatch]);

  useEffect(() => {
    if (myProfile && myProfile._id) {
      dispatch(fetchExperiences(myProfile._id));
    }
  }, [myProfile, dispatch]);

  return (
    <>
      <Card id="ext-card">
        <Card.Body id="card-dashed">
          <div className="d-flex align-items-center justify-content-between mb-2">
            <Card.Title className="mb-0">Esperienze</Card.Title>
            <div>
              {" "}
              <i className="bi bi-x-lg"></i>{" "}
            </div>
          </div>
          <Card.Text>Metti in risalto i risultati raggiunti e ottieni fino a 2 volte più visualizzazioni del profilo e collegamenti</Card.Text>
          {experiences && experiences.length > 0 ? (
            experiences.map((exp, idx) => (
              <div key={idx} className="d-flex align-items-center justify-content-between mt-3">
                <div className="d-flex align-items-center">
                  <i className="bi bi-bag-dash fs-4 me-3 text-muted"></i>
                  <p className="mb-0 text-muted">
                    {exp.role} <br />
                    {exp.company} <br />
                    {new Date(exp.startDate).getFullYear()} - {exp.endDate ? new Date(exp.endDate).getFullYear() : "Presente"}
                  </p>
                </div>
                <Button variant="outline-danger" size="sm" onClick={() => dispatch(deleteExperience(myProfile._id, exp._id))}>
                  Elimina
                </Button>
              </div>
            ))
          ) : (
            <div className="d-flex align-items-center">
              <i className="bi bi-bag-dash fs-4 me-3 text-muted"></i>
              <p className="mb-0 text-muted">
                Qualifica
                <br />
                Organizzazione
                <br />
                2023 - Presente
              </p>
            </div>
          )}
          <Button variant="outline-primary" size="sm" className="btn rounded-pill mt-2" onClick={() => setShowModal(true)}>
            Aggiungi esperienza
          </Button>
        </Card.Body>
      </Card>
      <ExperienceModal show={showModal} handleClose={() => setShowModal(false)} />
    </>
  );
};
export default EsperienzeComponent;
