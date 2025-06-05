import { useDispatch, useSelector } from "react-redux";
import { updateProfile, uploadProfilePicture } from "../redux/action";
import { useRef, useState } from "react";
import { Button, Modal } from "react-bootstrap";

const ProfileImageModal = ({ show, onHide }) => {
  const dispatch = useDispatch();
  const { myProfile } = useSelector((state) => state.profile);
  const fileInputRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const handleModify = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLoading(true);
      dispatch(uploadProfilePicture(file)).finally(() => setLoading(false));
    }
  };

  const handleDelete = () => {
    const updatedProfile = { ...myProfile, image: "blank-profile.webp" };
    dispatch(updateProfile(updatedProfile));
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Immagine del profilo</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        <img src={myProfile.image} alt="Profile" className="img-fluid rounded-circle mb-3" style={{ width: "150px", height: "150px", objectFit: "cover" }} />
        <div className="d-flex justify-content-center gap-3">
          <Button variant="primary" onClick={handleModify} disabled={loading}>
            Modifica
          </Button>
          <Button variant="danger" onClick={handleDelete} disabled={loading}>
            Elimina
          </Button>
        </div>
        <input type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} className="d-none" />
      </Modal.Body>
    </Modal>
  );
};

export default ProfileImageModal;
