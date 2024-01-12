import React from "react";
import "../styles/citasContainer.css";
import CitaCard from "./CitaCard";

const CitasContainer = () => {
  return (
    <div className="my-5 citasContainer">
      <div className="stateCitasContainer">
        <p className="text-center m-0 p-4 citasText">No hay citas</p>
      </div>
      <div className="contentContainer row m-0">
        <CitaCard/>
        <CitaCard/>
        <CitaCard/>
        <CitaCard/>
      </div>
    </div>
  );
};

export default CitasContainer;
