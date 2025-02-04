import Iphone from "../../img/iphonePro.png";
import Count from "../count";
import ButtonDelete from "../ButtonDelete";

const Product = ({product, deleteProduct, increase, decrease, changeValue}) => {
  const {img, title, count, priceTotal, id} = product;

  const priceFormator = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

  return (
    <>
      <section className='sectionItemOne'>
        <img 
          src={Iphone} 
          alt={title} 
          style={{width: "100px", height: "100px"}} />
          <div>
            {title}
          </div>
          <Count 
            count={count} 
            increase={increase} 
            id={id} 
            decrease={decrease} 
            changeValue={changeValue} />
              <div>
                {priceFormator.format(priceTotal)}
                
              </div>
                <ButtonDelete 
                  deleteProduct={deleteProduct} 
                  id={id} />
      </section>
    
    </>
  )
};

export default Product;