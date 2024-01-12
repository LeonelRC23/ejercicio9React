import { useState } from "react";
import "./App.css";
import PrincipalForm from "./components/PrincipalForm";

function App() {
  return (
    <>
      <div className="container">
        <h1 className="text-center">
          Administrador de pacientes de veterinaria
        </h1>
        <PrincipalForm />
      </div>
    </>
  );
}

export default App;
