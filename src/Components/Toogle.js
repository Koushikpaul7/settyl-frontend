import React, { useState } from "react";

 function Toggle({ children }) {

  // React state to manage visibility
  const [show, setShow] = useState();

  // function to toggle the boolean value
  function toggleShow() {
    setShow(!show);
  }
  var buttonText = show ? "Hide Employee List" : "Show Employee List";

  return (
    <div className="mt-5">
      {show && children}
      <button className="btn btn-secondary flex mx-auto mt-20" onClick={toggleShow}>{buttonText}</button>
    </div>
  );
}
export default Toggle;