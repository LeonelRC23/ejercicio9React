import React, { useEffect, useState } from "react";
import "../styles/citasContainer.css";
import CitaCard from "./CitaCard";
import PrincipalForm from "./PrincipalForm";

const CitasContainer = (almacenamientoState) => {
  return (
    <div className="my-5 citasContainer">
      <div className="stateCitasContainer">
        <p className="text-center m-0 p-4 citasText">No hay citas</p>
      </div>
      <div className="contentContainer row m-0">
        {
          almacenamientoState.map(() => <CitaCard/>)
        }
      </div>
    </div>
  );
};

export default CitasContainer;
