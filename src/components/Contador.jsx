import React from "react";
import '../stylesheets/Contador.css'

function Contador({nroClicks}){
  return (
    <div className="contador">
      {nroClicks}
    </div>
  )
}

export default Contador;