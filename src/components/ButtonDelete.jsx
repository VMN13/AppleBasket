import React from "react";
import Delete from "../img/icons/cross.svg";

const ButtonDelete = ({deleteProduct, id}) => {
  return (
    <button 
      type="button" 
      onClick={() => deleteProduct(id)} 
      style={{borderRadius: "20px", background: "none", border: "none"}}>
        <img 
          className="delete" 
          src={Delete} 
          alt="Delete" 
          style={{width: "64px", height: "64px", cursor: "pointer", transition: "all 0.3s ease-in-out"  }} />
    </button>
  );
};

export default ButtonDelete;