import React, { useEffect, useRef, useState } from 'react';
import CitasContainer from './CitasContainer';
import { Button, Form } from 'react-bootstrap';
import { Formik } from 'formik';
import '../styles/principalForm.css';

const PrincipalForm = () => {
  let generarId = () => {
    let a = Date.now().toString(30);
    let b = Math.random().toString(30).substring(2);
    2;
    return a + b;
  };
  const [almacenamientoState, setAlmacenamientoState] = useState([]);
  let valuesForm = {
    id: '',
    nombreMascota: '',
    nombreDueño: '',
    fecha: '',
    Hora: '',
    sintomas: '',
  };
  useEffect(() => {
    setAlmacenamientoState(JSON.parse(localStorage.getItem('consulta')) || []);
  }, []);
  return (
    <div className='principalDiv'>
      <div className='p-4 textContainer'>
        <p className='m-0'>Llenar el formulario para crear una cita.</p>
      </div>
      <div>
        <Formik
          initialValues={valuesForm}
          validate={(values) => {
            let errores = {};
            if (values.nombreMascota.trim() === '') {
              errores.nombreMascota = 'Campo requerido.';
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.nombreMascota)) {
              errores.nombreMascota = 'Ingrese nombre valido.';
            }
            if (values.nombreDueño.trim() === '') {
              errores.nombreDueño = 'Campo requerido.';
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.nombreDueño)) {
              errores.nombreDueño = 'Ingrese un nombre valido.';
            }
            if (values.sintomas.trim() === '') {
              errores.sintomas = 'Campo requerido.';
            }
            if (values.fecha === '') {
              errores.fecha = 'Campo requerido.';
            }
            if (values.Hora === '') {
              errores.Hora = 'Campo requerido.';
            }
            return errores;
          }}
          onSubmit={(valores, { resetForm }) => {
            resetForm();
            valores.id = generarId();
            const almacenamiento =
              JSON.parse(localStorage.getItem('consulta')) || [];
            if (almacenamiento.length == 0) {
              localStorage.setItem('consulta', JSON.stringify([valores]));
            } else {
              almacenamiento.push(valores);
              localStorage.setItem('consulta', JSON.stringify(almacenamiento));
            }
            window.location.reload(); //mala practica
          }}
        >
          {({
            handleBlur,
            handleChange,
            handleReset,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <Form onSubmit={handleSubmit}>
              <div className='formContainer p-4'>
                <Form.Group className='d-flex py-3'>
                  <Form.Label className='m-0 labelLarge'>
                    Nombre de la mascota:{' '}
                  </Form.Label>
                  <div className='w-100'>
                    <Form.Control
                      type='text'
                      id='nombreMascota'
                      name='nombreMascota'
                      placeholder='Nombre de la mascota'
                      className='p-0 px-3 inputLarge'
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    {/* Como hacer que el div ocupe e tamaño del texto de error asi no este cambiando de tamaño el contenedor */}
                    {touched.nombreMascota && errors.nombreMascota && (
                      <div className='px-3 text-danger'>
                        {errors.nombreMascota}
                      </div>
                    )}
                  </div>
                </Form.Group>
                <Form.Group className='d-flex py-3'>
                  <Form.Label className='m-0 labelLarge'>
                    Nombre del dueño:
                  </Form.Label>
                  <div className='w-100'>
                    <Form.Control
                      type='text'
                      id='nombreDueño'
                      name='nombreDueño'
                      placeholder='Nombre del dueño'
                      className='p-0 px-3 inputLarge'
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    {touched.nombreDueño && errors.nombreDueño && (
                      <div className='px-3 text-danger'>
                        {errors.nombreDueño}
                      </div>
                    )}
                  </div>
                </Form.Group>
                <Form.Group className='d-flex py-3'>
                  <Form.Label className='m-0 labelSmall'>Fecha:</Form.Label>
                  <div className='w-100'>
                    <Form.Control
                      type='date'
                      id='fecha'
                      name='fecha'
                      placeholder='dd/mm/yyyy'
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    {touched.fecha && errors.fecha && (
                      <div className='px-3 text-danger'>{errors.fecha}</div>
                    )}
                  </div>
                  <Form.Label className='m-0 labelSmall text-center'>
                    Hora:
                  </Form.Label>
                  <div className='w-100'>
                    <Form.Control
                      type='time'
                      id='Hora'
                      name='Hora'
                      placeholder='hh:mm'
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    {touched.Hora && errors.Hora && (
                      <div className='px-3 text-danger'>{errors.Hora}</div>
                    )}
                  </div>
                </Form.Group>
                <Form.Group className='d-flex py-3'>
                  <Form.Label className='m-0 labelLarge'>Sintomas: </Form.Label>
                  <div className='w-100'>
                    <Form.Control
                      className='inputLarge'
                      type='text'
                      id='sintomas'
                      name='sintomas'
                      placeholder='Describir sintomas'
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    {touched.sintomas && errors.sintomas && (
                      <div className='px-3 text-danger'>{errors.sintomas}</div>
                    )}
                  </div>
                </Form.Group>
              </div>
              <div className='formButton p-4 text-center'>
                <Button className='boton' type='submit'>
                  <p className='my-1 mx-4'>Agregar nueva cita</p>
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default PrincipalForm;
