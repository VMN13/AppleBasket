const CartHeader = () => {
  return (
    <>
      <section className='sectionHeader'>
        <h1 className='korzina'>
          Basket
        </h1>
      </section>
      <section className='sectionName'>
        <div id="one">
          2
        </div>
        <div>
          <h1>
            Product
          </h1>
        </div>
        <div>
          <h1>
            Quantity
          </h1>
        </div>
        <div>
          <h1>
            Cost
          </h1>
        </div>
        <div id="one">
          none
        </div>
      </section>
    </>
  );
};

export default CartHeader;