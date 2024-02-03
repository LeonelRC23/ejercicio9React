import React, { useEffect, useState } from "react";
import "../styles/citaCard.css";
import { Button, Form } from "react-bootstrap";

const CitaCard = ({citaDatos, indice, deleteCard}) => {
  console.log(citaDatos);
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
          <p className="m-0">Mascota: {citaDatos.nombreMascota}</p>
          <p className="m-0">Dueño: {citaDatos.nombreDueño}</p>
        </div>
      </div>
      <div className="cardBody">
        <Form className="px-3">
          <Form.Group className="d-flex py-3">
            <Form.Label className="cardLabel m-0 text-center">Fecha:</Form.Label>
            <Form.Control type="date" defaultValue={citaDatos.fecha} disabled/>
          </Form.Group>
          <Form.Group className="d-flex py-3">
            <Form.Label className="cardLabel m-0 text-center">Hora:</Form.Label>
            <Form.Control type="time" defaultValue={citaDatos.Hora} disabled/>
          </Form.Group>
          <Form.Group className="d-flex py-3">
            <Form.Label className="cardLabel m-0 text-center">Sintomas:</Form.Label>
            <Form.Control type="text" defaultValue={citaDatos.sintomas} disabled />
          </Form.Group>
        </Form>
      </div>
      <div className="m-4 d-flex justify-content-end botonContainer">
        <Button type="submit" onClick={() => deleteCard(citaDatos.id)}>Borrar</Button>
      </div>
    </div>
  );
};

export default CitaCard;
