import { Card, Form, Image, Button, Row, Col, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../redux/action";
import { useState } from "react";

const AddPost = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(null); // "text", "video", "photo"
  const [text, setText] = useState("");
  const [media, setMedia] = useState(null);

  const dispatch = useDispatch();
  const profile = useSelector((state) => state.posts.posts);
  const loggedUser = useSelector((state) => state.profile.myProfile);

  if (!loggedUser) {
    return <div>Caricamento profilo...</div>;
  }

  const handleClose = () => {
    setShowModal(false);
    setText("");
    setMedia(null);
    setModalType(null);
  };

  //modale con tipo specifico
  const handleShow = (type) => {
    setModalType(type);
    setShowModal(true);
  };

  const handleFileChange = (e) => setMedia(e.target.files[0]);

  const handlePost = () => {
    const newPost = {
      //Aggiunto URL.createObjectURL(media) per visualizzare file locali
      text,
      media: media ? URL.createObjectURL(media) : null,
      mediaType: modalType === "video" ? "video" : modalType === "photo" ? "image" : null,
      timestamp: new Date().toISOString(),
      user: profile?.username || "Utente",
    };
    dispatch(addPost(newPost));
    handleClose();
  };

  return (
    <>
      <Card className="p-3 mb-0">
        <Row className="align-items-center mb-2">
          <Col xs="auto">
            <Image src={loggedUser.image} roundedCircle width={40} height={40} alt="Avatar" />
          </Col>
          <Col>
            <Form.Control id="searchbar" type="text" placeholder="Crea un post" onClick={() => handleShow("text")} readOnly />
          </Col>
        </Row>

        <div className="d-flex justify-content-around text-center">
          <div className="post-button-wrapper p-2 rounded">
            <Button variant="link" style={{ textDecoration: "none" }} className="text-success p-0" onClick={() => handleShow("video")}>
              <i className="bi bi-camera-video-fill"></i> Video
            </Button>
          </div>
          <div className="post-button-wrapper p-2 rounded">
            <Button variant="link" style={{ textDecoration: "none" }} className="text-primary p-0" onClick={() => handleShow("photo")}>
              <i className="bi bi-image-fill"></i> Foto
            </Button>
          </div>
          <div className="post-button-wrapper p-2 rounded">
            <Button variant="link" style={{ textDecoration: "none" }} className="text-danger p-0" onClick={() => handleShow("text")}>
              <i className="bi bi-file-earmark-text-fill"></i> Articolo
            </Button>
          </div>
        </div>
      </Card>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {modalType === "text" && "Crea un post"}
            {modalType === "video" && "Carica un video"}
            {modalType === "photo" && "Carica una foto"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {(modalType === "text" || modalType === "article") && (
              <Form.Group controlId="postText">
                <Form.Control as="textarea" rows={3} placeholder="Di cosa vuoi parlare?" value={text} onChange={(e) => setText(e.target.value)} />
              </Form.Group>
            )}

            {(modalType === "video" || modalType === "photo") && (
              <Form.Group>
                <Form.Label>{modalType === "video" ? "Seleziona un file video" : "Seleziona una foto"}</Form.Label>
                <Form.Control type="file" accept={modalType === "video" ? "video/*" : "image/*"} onChange={handleFileChange} />
                {media && <div className="mt-2">{media.name}</div>}
              </Form.Group>
            )}

            {/* modale video/foto puoi mettere anche il campo testo sotto */}
            {(modalType === "video" || modalType === "photo") && (
              <Form.Group controlId="postText" className="mt-3">
                <Form.Control as="textarea" rows={2} placeholder="Aggiungi un commento (opzionale)" value={text} onChange={(e) => setText(e.target.value)} />
              </Form.Group>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Annulla
          </Button>
          <Button variant="primary" onClick={handlePost}>
            Pubblica
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddPost;
