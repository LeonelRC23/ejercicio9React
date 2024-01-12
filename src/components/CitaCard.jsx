import React from "react";
import "../styles/citaCard.css";
import { Button, Form } from "react-bootstrap";

const CitaCard = () => {
  return (
    <div className="col-6">
      <div className="cardHeader d-flex">
        <div className="imgContainer">
          <img
            src="https://www.animalfiel.com/wp-content/uploads/2019/03/temperamento-del-caniche.jpg"
            alt=""
            className="img-fluid"
          />
        </div>
        <div>
          <p>Mascota: Roco</p>
          <p>Dueño: Leonel</p>
        </div>
      </div>
      <div>
        <Form>
          <Form.Group>
            <Form.Label>Fecha:</Form.Label>
            <Form.Control type="date" placeholder="Datos cargados" />
            <Form.Label>Hora:</Form.Label>
            <Form.Control type="time" placeholder="Datos cargados" />
            <Form.Label>Sintomas:</Form.Label>
            <Form.Control type="text" placeholder="Datos cargados" />
          </Form.Group>
        </Form>
      </div>
      <div>
        <Button>Borrar</Button>
      </div>
    </div>
  );
};

export default CitaCard;
