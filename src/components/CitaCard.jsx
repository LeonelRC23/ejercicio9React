import React from "react";
import "../styles/citaCard.css";
import { Button, Form } from "react-bootstrap";

const CitaCard = () => {
  return (
    <div className="col-6 p-0 p-2 card">
      <div className="cardHeader d-flex py-3">
        <div className="imgContainer">
          <img
            src="https://www.animalfiel.com/wp-content/uploads/2019/03/temperamento-del-caniche.jpg"
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="d-flex flex-column justify-content-center mx-3">
          <p className="m-0">Mascota: Roco</p>
          <p className="m-0">Dueño: Leonel</p>
        </div>
      </div>
      <div className="cardBody">
        <Form className="px-3">
          <Form.Group className="d-flex py-3">
            <Form.Label className="cardLabel m-0 text-center">Fecha:</Form.Label>
            <Form.Control type="date" placeholder="dd/mm/yyyy" />
          </Form.Group>
          <Form.Group className="d-flex py-3">
            <Form.Label className="cardLabel m-0 text-center">Hora:</Form.Label>
            <Form.Control type="time" placeholder="Datos cargados" />
          </Form.Group>
          <Form.Group className="d-flex py-3">
            <Form.Label className="cardLabel m-0 text-center">Sintomas:</Form.Label>
            <Form.Control type="text" placeholder="Datos cargados" />
          </Form.Group>
        </Form>
      </div>
      <div className="m-4 d-flex justify-content-end botonContainer">
        <Button>Borrar</Button>
      </div>
    </div>
  );
};

export default CitaCard;
