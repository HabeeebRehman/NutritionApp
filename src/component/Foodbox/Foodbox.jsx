import {useState} from "react";
import './Foodbox.css'

const Foodbox = (props) => {
    const {data, index} = props;

    const [amount , setAmount] = useState(0);
    const [qty , setQty] = useState(0);

    const handelAmount = (e) => {
        if (e.target.value < 0) {
            setAmount(0);
        } else {
            setAmount(e.target.value);
        }
    };

    const handelCheck = () => {
        setQty(amount * data.cal);
    };

    const handelReset = () => {
        setAmount(0);
        setQty(0);
    };

  return (
    <>
   <div className="main-container">
            <div className="left-section">
                <div className="image-container">
                    <img src={data.img} style={{ width: "200px" }} />
                </div>
                <div className="food-detail">
                    <h3>{data.name}</h3>
                    <p>{data.cal}</p>
                </div>
                <div className="input-section">
                    <input
                        type="number"
                        placeholder="Enter a number"
                        value={amount}
                        onChange={handelAmount}
                    />
                    <button className="addBtn" onClick={handelCheck}>+</button>
                </div>
            </div>
            <div className="right-section">
                <p>
                    {amount} {data.name} = {qty} Calories
                </p>
                <button className="reset-btn" onClick={handelReset}>
                    Reset
                </button>
            </div>
        </div>
    </>
  );
}
export default Foodbox;