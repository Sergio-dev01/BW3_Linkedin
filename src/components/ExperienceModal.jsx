import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createExperience, fetchMyProfile, uploadExperienceImage } from "../redux/action";
import { Button, Form, Modal } from "react-bootstrap";

const ExperienceModal = ({ show, handleClose }) => {
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);

  const [expData, setExpData] = useState({
    role: "",
    company: "",
    area: "",
    description: "",
    startDate: "",
    endDate: "",
  });
  const [selectedFile, setSelectedFile] = useState(null);

  const myProfile = useSelector((state) => state.profile.myProfile);

  const handleChange = (e) => {
    setExpData({ ...expData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    console.log("Submit premuto");
    if (!myProfile?._id) {
      console.error("ID profilo mancante");
      return;
    }

    console.log("Dati da inviare:", expData); // <-- VERIFICA I DATI

    const createdExp = await createExperience(myProfile._id, expData)(dispatch);
    console.log("Esperienza creata:", createdExp); // <-- RISULTATO DISPATCH

    if (createdExp && selectedFile) {
      await uploadExperienceImage(myProfile._id, createdExp._id, selectedFile)(dispatch);
    }

    await dispatch(fetchMyProfile());

    handleClose();
    setExpData({
      role: "",
      company: "",
      area: "",
      description: "",
      startDate: "",
      endDate: "",
    });
    setSelectedFile(null);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Nuova Esperienza</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formRole" className="mb-2">
            <Form.Label>Ruolo</Form.Label>
            <Form.Control name="role" value={expData.role} onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="formCompany" className="mb-2">
            <Form.Label>Organizzazione</Form.Label>
            <Form.Control name="company" value={expData.company} onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="formArea" className="mb-2">
            <Form.Label>Luogo</Form.Label>
            <Form.Control name="area" value={expData.area} onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="formDescription" className="mb-2">
            <Form.Label>Descrizione</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              value={expData.description}
              onChange={handleChange}
              placeholder="Scrivi una breve descrizione dell'esperienza"
            />
          </Form.Group>
          <Form.Group controlId="formStartDate" className="mb-2">
            <Form.Label>Data Inizio</Form.Label>
            <Form.Control type="date" name="startDate" value={expData.startDate} onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="formEndDate" className="mb-2">
            <Form.Label>Data Fine</Form.Label>
            <Form.Control type="date" name="endDate" value={expData.endDate} onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-2">
            <Form.Label>Immagine</Form.Label>
            <Form.Control type="file" ref={fileInputRef} onChange={(e) => setSelectedFile(e.target.files[0])} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Chiudi
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Salva Esperienza
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ExperienceModal;
