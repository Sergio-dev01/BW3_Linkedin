import { Card } from "react-bootstrap";

const JobAsideSecond = () => {
  return (
    <Card className="mb-2">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-start">
          <div className="d-flex flex-column">
            <Card.Link href="#" className="text-decoration-none ms-0 text-black ">
              {" "}
              <i className="bi bi-list-task"></i> Preferenze
            </Card.Link>
            <Card.Link href="#" className="text-decoration-none text-black ms-0">
              <i className="bi bi-bookmark-fill me-1"></i> Le mie offerte di lavoro
            </Card.Link>

            <Card.Link href="#" className="text-decoration-none ms-0  text-black ">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADgCAMAAAAt85rTAAAAZlBMVEX/ZyP/////6OD/YAv/pob/YRT/nnf/9vL/Yxr/WgD/XwD/ZR//8u3/aCD//Pr/9vH/zr3/wK3/tJz/iVz/hlf/x7P/3tL/VwD/ayf/bzD/jWD/qov/2cz/vKP/0sL/f0z/7OT/5NtNWgryAAACNElEQVR4nO3V0VLCMBRFUWrAJmkLVKiKIOL//6Ty5EuKaR0n5zJ7f8FZk+ntorrzFqUH/HcArQfQegCtB9B6AK0H0HoArfcbcL2ppdus/wJcb/unpXhP/fam8QbwvAvRuZV4zsWw284AXvbRL4zk48fnVODWDu+aD8M04BCa0pun1YwJ08Dnl9KDp/fynA/cvBp7v2vN6yYbuHSl187JLXOBbSy9dV6xzQT2VoF9JnBn6g/xk9/lAeuDwRNzrTnUWcC2swrsEh9hAvhg8oZecw8AAUoHEKB4AAGKBxCgeAABigcQoHgAAYoHEKB4AAGKBxCgeAABigcQoHgAAYoHEKB4AAGKBxCgeAABigcQoHgAAYoHEKB4AAGKBxCgeAABigcQoHgAAYoHEKB4AAGKBxCgeAABigcQoHgAAYoHEKB4AAGKBxCgeAABigcQoHgAAYoHEKB4AAGKBxCgeAABigcQoHgAAYoHEKB4AAGKBxCgeAABigcQoHgAAYoHEKB4AAGKBxCgeAABipcJvNgFXrKAbdeUXjqvpmuzgPXBKvBQZwGrN1966rz8WwKTAg6x9NR5xSET2FoFJj7BJLA6mryj7piyJIEm72jyho4Aq1OwJwynJCUNrHprwib0ackIsDp1q9Kbp+Rd+v3GgdVlH7yRV2x8+Pgcc4wCq+q876Jbyeditz+PK24Av6/p8H58FO/4PiSvZxbwHgJoPYDWA2g9gNYDaD2A1gNoPYDWA2i9uwd+Af/dW0kAeOc2AAAAAElFTkSuQmCC"
                alt="premium"
                width="16"
                height="16"
                className="me-1"
              ></img>{" "}
              Le mie informazioni sulla mia carriera
            </Card.Link>
          </div>
        </div>
        <hr />
        <Card.Link className="text-decoration-none " style={{ cursor: "pointer" }}>
          <i className="bi bi-pencil-square"></i> Pubblica offerta gratuita
        </Card.Link>
      </Card.Body>
    </Card>
  );
};
export default JobAsideSecond;
