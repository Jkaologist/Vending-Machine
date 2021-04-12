import React, { useState } from "react";
import { Link } from "react-router-dom";

function Chips() {
  const [bags, setBags] = useState(0);

  function handleClick() {
    setBags(bags => (bags + 1));
  }

  return (
    <div>
      <div className="chips">
        <p>bags eaten: {bags}</p>
        <button onClick={handleClick}>nom nom nom</button>
        <p></p>
        <Link to="/">go back</Link>
      </div>
    </div>
  )
}

export default Chips;