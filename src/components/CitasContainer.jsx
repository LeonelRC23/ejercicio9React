import React, { useEffect, useState } from 'react';
import '../styles/citasContainer.css';
import CitaCard from './CitaCard';
import PrincipalForm from './PrincipalForm';

const CitasContainer = () => {
  const [almacenamientoCitas, setAlmacenamientoCitas] = useState([]);
  useEffect(() => {
    // almacenamientoCitas = JSON.parse(localStorage.getItem('consulta'));
    setAlmacenamientoCitas(JSON.parse(localStorage.getItem('consulta')) || []);
  }, []);
  let deleteCard = (indice) => {
    // console.log(almacenamientoCitas);
    const citasFilter = almacenamientoCitas.filter((cita) => cita !== indice); //generar un id para poder eliminar las citas
    // setAlmacenamientoCitas(citasFilter);
    console.log(citasFilter);
  };
  return (
    <div className='my-5 citasContainer'>
      <div className='stateCitasContainer'>
        <p className='text-center m-0 p-4 citasText'>Citas pendientes</p>
      </div>
      <div className='contentContainer row m-0'>
        {almacenamientoCitas.map((objeto, indice) => (
          <CitaCard
            key={indice}
            citaDatos={objeto}
            indice={indice}
            deleteCard={deleteCard}
          />
        ))}
      </div>
    </div>
  );
};

export default CitasContainer;
