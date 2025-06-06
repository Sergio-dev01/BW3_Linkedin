import React, { useEffect, useState } from "react";
import { Card, Button, Image, Form, Modal } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { fetchMyProfile } from "../redux/action";

const HomeFirstAsideLeftComponent = () => {
  const dispatch = useDispatch();
  const { myProfile } = useSelector((state) => state.profile);

  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  useEffect(() => {
    dispatch(fetchMyProfile());
  }, [dispatch]);

  if (!myProfile) {
    return <p>Caricamento profilo...</p>;
  }

  return (
    <>
      <Card className="mb-2">
        <div id="background-img" style={{ height: "75px" }} />
        <Card.Body className="text-start position-relative" style={{ marginTop: "-50px" }}>
          <Image
            src={myProfile.image}
            roundedCircle
            className="border border-3"
            style={{
              width: "75px",
              height: "75px",
              objectFit: "cover",
            }}
          />

          <Button
            variant="light"
            className="position-absolute"
            style={{
              top: "110px",
              right: "10px",
              border: "none",
              backgroundColor: "transparent",
            }}
          ></Button>

          <div className="d-flex align-items-center mt-2 mb-3">
            <div className="flex-grow-1">
              <Card.Title className="mt-2">
                {myProfile.name} {myProfile.surname}
              </Card.Title>
              <p className="mb-0">{myProfile.title}</p>
              <Card.Subtitle className="mb-2 text-muted">
                <div className="d-flex">
                  <p className="me-3">{myProfile.area}</p>
                  <a className="text-decoration-none" href="#"></a>
                </div>
              </Card.Subtitle>
            </div>
          </div>

          <Form.Control
            size="sm"
            style={{
              backgroundColor: "#DFDEDA",
              cursor: "pointer",
            }}
            placeholder="+ esperienza"
            onClick={handleOpen}
            readOnly
          />
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Aggiungi Esperienza</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Ruolo</Form.Label>
              <Form.Control type="text" placeholder="Es. Sviluppatore Web" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Descrizione</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Località</Form.Label>
              <Form.Control type="text" placeholder="Es. Milano" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Annulla
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Salva
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default HomeFirstAsideLeftComponent;
