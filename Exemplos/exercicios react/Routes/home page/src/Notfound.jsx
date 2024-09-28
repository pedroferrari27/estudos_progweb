import React from "react";
import "./Contato.css";
import { Link } from "react-router-dom";


function Notfound() {
  return (
    <div>
      <h1> Pagina não encontrada</h1>
      <Link to="/">home</Link>
    </div>
  )
}

export default Notfound
