import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "../styles/principalForm.css";

const PrincipalForm = () => {
  return (
    <div>
      <div className="p-4 textContainer">
        <p className="m-0">Llenar el formulario para crear una cita.</p>
      </div>
      <div className="p-4 formContainer">
        <Form>
          <Form.Group className="d-flex py-3">
            <Form.Label className="m-0 labelLarge">Nombre de la mascota: </Form.Label>
            <Form.Control type="text" placeholder="Nombre de la mascota" className="p-0 px-3 inputLarge"/>
          </Form.Group>
          <Form.Group className="d-flex py-3">
            <Form.Label className="m-0 labelLarge">Nombre del dueño: </Form.Label>
            <Form.Control type="text" placeholder="Nombre del dueño" className="p-0 px-3"/>
          </Form.Group>
          <Form.Group className="d-flex py-3">
            <Form.Label className="m-0 labelSmall">Fecha: </Form.Label>
            <Form.Control type="date" placeholder="dd/mm/yyyy" />
            <Form.Label className="m-0 labelSmall text-center">Hora: </Form.Label>
            <Form.Control type="time" placeholder="hh:mm" />
          </Form.Group>
          <Form.Group className="d-flex py-3">
            <Form.Label className="m-0 labelLarge">Sintomas: </Form.Label>
            <Form.Control className="inputLarge" type="text" placeholder="Describir sintomas" />
          </Form.Group>
        </Form>
      </div>
      <div className="formButton p-4 text-center">
        <Button>
            Agregar nueva cita
        </Button>
      </div>
    </div>
  );
};

export default PrincipalForm;
