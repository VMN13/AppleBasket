import React from "react";
import Delete from "../img/icons/cross.svg";

const ButtonDelete = ({deleteProduct, id}) => {
  return (
    <button type="button" onClick={() => deleteProduct(id)} style={{borderRadius: "20px"}}>
      <img src={Delete} alt="Delete" style={{width: "50px", height: "50px"}} />
    </button>
  );
};


export default ButtonDelete;