import React from "react";

const CartFooter = ({ total }) => {
  const { count, price } = total;
  return (
    <>
      <section className='sectionAll'>
        <div id="one">
          1
        </div>
        <div id="one">
          2
        </div>
        <div id="one">
          3
        </div>
        <div id="">
          {count} count
        </div>
        <div id="">
          {price} USD
        </div>
        <div id="one">
          3
        </div>
      </section>
    </>
  );
};

export default CartFooter;