import Iphone from "../../img/iphonePro.png";
import Count from "../count";
import ButtonDelete from "../ButtonDelete";

const Product = ({product, deleteProduct, increase, decrease, changeValue}) => {
  const {img, title, count, priceTotal, id} = product;

  const priceFormator = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

  return (
    <>
      <section className='sectionItemOne'>
        <div>
        <img 
          className="img"
          src={Iphone} 
          alt={title} 
           />
          </div>
          <div>
            {title}
          </div>
          
          <div>
          <Count
            className="count" 
            count={count} 
            increase={increase} 
            id={id} 
            decrease={decrease} 
            changeValue={changeValue} />
            </div>
              <div className="price">
                {priceFormator.format(priceTotal)}
              </div>
              <div>
                <ButtonDelete 
                  deleteProduct={deleteProduct} 
                  id={id} />
                  </div>
      </section>
    </>
  )
};

export default Product;