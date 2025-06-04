import React, { useEffect, useState } from "react";
import { Card, Button, Image } from "react-bootstrap";
import MyCarousel from "./Carousel";
import { Pencil } from "react-bootstrap-icons";

const ProfileCard = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
          headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODNlYmIzMWIxMGJmMDAwMTVjZjIyYWEiLCJpYXQiOjE3NDkwMjU5OTIsImV4cCI6MTc1MDIzNTU5Mn0.JR1aaAyTBJHaYpKakhUvOyg7XKosAJMDAONedUKgTZM"

          },
        });
        if (response.ok) {
          const data = await response.json();
          setProfile(data);
        }
      } catch (error) {
        console.error("Errore nel fetch del profilo:", error);
      }
    };
    fetchProfile();
  }, []);

  if (!profile) return <div>Caricamento...</div>;

  return (
    <Card className="mb-3">
      <div style={{ backgroundColor: "#dfeae7", height: "150px" }} />
      <Card.Body className="text-start position-relative" style={{ marginTop: "-100px" }}>
        <Image
          src={profile.image}
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
            <Card.Title className="mt-2">{profile.name} {profile.surname}</Card.Title>
            <p className="mb-0">{profile.title}</p>
            <Card.Subtitle className="mb-2 text-muted">
              <div className="d-flex">
                <p className="me-3">{profile.area}</p>
                <a className="text-decoration-none" href="#">
                  <span>Informazioni di contatto</span>
                </a>
              </div>
            </Card.Subtitle>
            <a className="text-decoration-none" href="#">
              <p className="mb-0">{profile.email}</p>
            </a>
          </div>
        </div>

        <div className="d-flex justify-content-start mb-3 gap-2">
          <div>
            <Button className="btn rounded-pill btn-font" variant="primary" size="sm"  >
              Disponibile per
            </Button>
          </div>
          <div>
            <Button className="btn rounded-pill btn-font" variant="outline-primary" >
              Primary Aggiungi sezione del profilo
            </Button>
          </div>
          <div>
            <Button className="btn rounded-pill btn-font" variant="outline-primary" >
              Primary Migliora profilo
            </Button>
          </div>
          <div>
            <Button className="btn rounded-pill btn-font" variant="outline-dark" >
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
