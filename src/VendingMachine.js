import React from "react";
import { Link } from "react-router-dom"

function VendingMachine() {
  return (
    <div>
      <h1>HELLO I AM A VENDING MACHINE. WHAT WOULD YOU LIKE TO EAT?</h1>
      <Link to="/soda">Soda</Link>
      <p></p>
      <Link to="/chips">Chips</Link>
      <p></p>
      <Link to="/sardines">Sardines</Link>
    </div>
  )
};

export default VendingMachine;