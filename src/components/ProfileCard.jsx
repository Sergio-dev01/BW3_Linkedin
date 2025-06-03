import React from "react";
import { Card, Button, Badge, Image, Carousel } from "react-bootstrap";
import MyCarousel from "./Carousel";
import { Pencil } from "react-bootstrap-icons";

const ProfileCard = () => {
  return (
    <Card className="mb-3">
      <div style={{ backgroundColor: "#dfeae7", height: "150px" }} />
      <Card.Body className="text-start position-relative" style={{ marginTop: "-100px" }}>
        <Image
          src="https://plus.unsplash.com/premium_photo-1673967859849-c8a37fa85aeb?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          roundedCircle
          className="border border-3"
          style={{ width: "150px", height: "150px", objectFit: "cover" }}
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
            <Card.Title className="mt-2">Sergio Francesco Maselli</Card.Title>
            <p className="mb-0">--</p>
            <Card.Subtitle className="mb-2 text-muted">
              <div className="d-flex">
                <p className="me-3">Bari, Puglia, Italia</p>
                <a className="text-decoration-none" href="#">
                  <span>Informazioni di contatto</span>
                </a>
              </div>
            </Card.Subtitle>
            <a className="text-decoration-none" href="#">
              <p className="mb-0">2 collegamenti</p>
            </a>
          </div>
          <div>
            <ul className="list-unstyled">
              <li>
                <button className="d-flex align-items-center border-0 bg-transparent mb-2">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1673967859849-c8a37fa85aeb?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="img"
                    style={{ width: "2rem", height: "2rem", marginRight: "0.5rem" }}
                  />
                  <span>Nessuno</span>
                </button>
              </li>
              <li>
                <button className="d-flex align-items-center border-0 bg-transparent mb-2">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1673967859849-c8a37fa85aeb?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="img"
                    style={{ width: "2rem", height: "2rem", marginRight: "0.5rem" }}
                  />
                  <span>Nessuno</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="d-flex justify-content-start mb-3 gap-2">
          <div>
            <Button className="btn rounded-pill fs-6" variant="primary" style={{ fontWeight: "bold" }}>
              Disponibile per
            </Button>
          </div>
          <div>
            <Button className="btn rounded-pill" variant="outline-primary" style={{ fontWeight: "500" }}>
              Primary Aggiungi sezione del profilo
            </Button>
          </div>
          <div>
            <Button className="btn rounded-pill" variant="outline-primary" style={{ fontWeight: "500" }}>
              Primary Migliora profilo
            </Button>
          </div>
          <div>
            <Button className="btn rounded-pill" variant="outline-dark" style={{ fontWeight: "500" }}>
              Primary Risorse
            </Button>
          </div>
        </div>
        <MyCarousel />
      </Card.Body>
    </Card>
  );
};

export default ProfileCard;
