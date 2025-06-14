import React, { useEffect, useState } from "react";
import { Card, Button, Image, Row, Col } from "react-bootstrap";
import MyCarousel from "./Carousel";
import { Pencil } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchMyProfile } from "../redux/action";
import ProfileImageModal from "./ProfileImageModal";

const ProfileCard = () => {
  const dispatch = useDispatch();

  const { myProfile } = useSelector((state) => state.profile);

  const [showImageModal, setShowImageModal] = useState(false);

  useEffect(() => {
    dispatch(fetchMyProfile());
  }, [dispatch]);
  if (!myProfile) {
    return <p>Caricamento profilo...</p>;
  }

  return (
    <>
      <Card className="overflow-hidden">
        <div id="background-img" />
        <Card.Body className="text-start position-relative" style={{ marginTop: "-100px" }}>
          <Image
            src={myProfile.image}
            roundedCircle
            className="border border-3"
            style={{
              width: "150px",
              height: "150px",
              objectFit: "cover",
              cursor: "pointer",
            }}
            onClick={() => setShowImageModal(true)}
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
          >
            <Pencil />
          </Button>

          <div className="d-flex align-items-center mt-2 mb-3">
            <div className="flex-grow-1">
              <Card.Title className="mt-2">
                {myProfile.name} {myProfile.surname}
              </Card.Title>
              <Card.Subtitle className="mb-3 mt-2 text-muted d-flex justify-content-between">
                <div>
                  <p className="mb-0">
                    {myProfile.title}, {myProfile.area}
                  </p>
                </div>

                <div className="d-flex">
                  <a className="text-decoration-none" href="#">
                    <span>Informazioni di contatto</span>
                  </a>
                </div>
              </Card.Subtitle>
              <a className="text-decoration-none" href="#">
                <p className="mb-0">{myProfile.email}</p>
              </a>
            </div>
          </div>

          <div className="d-flex flex-wrap gap-2 mb-3 ">
            <Button className="btn rounded-pill btn-font" variant="primary">
              Disponibile per
            </Button>

            <Button className="btn rounded-pill btn-font" variant="outline-primary">
              Aggiungi sezione del profilo
            </Button>

            <Button className="btn rounded-pill btn-font" variant="outline-primary">
              Migliora profilo
            </Button>

            <Button className="btn rounded-pill btn-font" variant="outline-dark">
              Risorse
            </Button>
          </div>
          <MyCarousel />
        </Card.Body>
      </Card>

      <ProfileImageModal show={showImageModal} onHide={() => setShowImageModal(false)} />
    </>
  );
};

export default ProfileCard;
