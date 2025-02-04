import React from "react";

const CartFooter = ({ total }) => {
  const { count, price } = total;
  return (
    <>
      <section className='sectionAll'>
        <div id='one'>
          1
        </div>
        <div>
          {count} count
        </div>
        <div>
          {price} USD
        </div>
      </section>
    </>
  );
};


export default CartFooter;