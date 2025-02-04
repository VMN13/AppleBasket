import Up from "../img/icons/up.svg";
import Down from "../img/icons/down.svg";

const Count = ({ count, decrease, increase, id, changeValue}) => {
  console.log(increase)
  return (
    <>
      <section className='сount'>
        <div className="count_box">
          <input
            onChange={(e) => changeValue(id, +e.target.value)}
            type="number" 
            min={1} 
            max={100} 
            value={count} />
        </div>
        <div className="">
          <button type="" className="count_up" onClick={() => {increase(id)}}>
            <img src={Up} alt="Increase" style={{width: "20px", height: "20px"}} />
          </button>
          <button type="" className="count_down" onClick={() => {decrease(id)}}>
            <img src={Down} alt="Decrease" style={{width: "20px", height: "20px"}} />
          </button>
          </div>        

      </section>
    </>
  )
};

export default Count;