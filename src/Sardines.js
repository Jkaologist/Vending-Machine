import React from "react";
import { Link } from "react-router-dom";

function Sardines() {
  return (
    <div>
      <div className="Sardines">
        <p>you don't eat the sardines, they eat you!</p>
        <Link to="/">go back</Link>
      </div>
    </div>
  )
}

export default Sardines;