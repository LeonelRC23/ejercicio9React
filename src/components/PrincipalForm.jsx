import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Formik } from "formik";
import "../styles/principalForm.css";

const PrincipalForm = () => {
  let valuesForm = {
    nombreMascota: "",
    nombreDueño: "",
    fecha: "",
    Hora: "",
    sintomas: "",
  };
  return (
    <div className="principalDiv">
      <div className="p-4 textContainer">
        <p className="m-0">Llenar el formulario para crear una cita.</p>
      </div>
      <div>
        <Formik
          initialValues={valuesForm}
          validate={(values) => {
            let errors = {};
            if (values.nombreMascota.trim() === "") {
              errors.nombreMascota = "Campo requerido.";
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.nombreMascota)) {
              errors.nombreMascota = "Ingrese nombre valido.";
            }
            if (values.nombreDueño.trim() === "") {
              errors.nombreDueño = "Campo requerido.";
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.nombreDueño)) {
              errors.nombreDueño = "Ingrese un nombre valido.";
            }
            if (values.fecha === "") {
              errors.fecha = "Campo requerido.";
            }
            if (values.Hora === "") {
              errors.Hora = "Campo requerido.";
            }
            return errors;
          }}
        >
          <Form>
            <div className="formContainer p-4">
              <Form.Group className="d-flex py-3">
                <Form.Label className="m-0 labelLarge">
                  Nombre de la mascota:{" "}
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nombre de la mascota"
                  className="p-0 px-3 inputLarge"
                />
              </Form.Group>
              <Form.Group className="d-flex py-3">
                <Form.Label className="m-0 labelLarge">
                  Nombre del dueño:
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nombre del dueño"
                  className="p-0 px-3"
                />
              </Form.Group>
              <Form.Group className="d-flex py-3">
                <Form.Label className="m-0 labelSmall">Fecha:</Form.Label>
                <Form.Control type="date" placeholder="dd/mm/yyyy" />
                <Form.Label className="m-0 labelSmall text-center">
                  Hora:
                </Form.Label>
                <Form.Control type="time" placeholder="hh:mm" />
              </Form.Group>
              <Form.Group className="d-flex py-3">
                <Form.Label className="m-0 labelLarge">Sintomas: </Form.Label>
                <Form.Control
                  className="inputLarge"
                  type="text"
                  placeholder="Describir sintomas"
                />
              </Form.Group>
            </div>
            <div className="formButton p-4 text-center">
              <Button className="boton">
                <p className="my-1 mx-4">Agregar nueva cita</p>
              </Button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default PrincipalForm;
