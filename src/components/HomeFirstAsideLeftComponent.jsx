import React, { useEffect } from "react";
import { Card, Button, Image, Form, Modal } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { fetchMyProfile } from "../redux/action";

const HomeFirstAsideLeftComponent = () => {
  const dispatch = useDispatch();
  const { myProfile } = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(fetchMyProfile());
  }, [dispatch]);

  if (!myProfile) {
    return <p>Caricamento profilo...</p>;
  }

  return (
    <>
      <Card className="mb-2">
        <div style={{ backgroundColor: "#dfeae7", height: "75px" }} />
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
          <Card.Text>{myProfile.email}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default HomeFirstAsideLeftComponent;
