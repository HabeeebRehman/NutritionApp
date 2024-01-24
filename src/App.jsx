import './App.css'
import Foodbox from './component/Foodbox/Foodbox'
import FoodData from './resources/FoodData'
import { useState } from "react";

function App() {
  const [searchItem, setSearchItem] = useState("");

  const handelSearch = (e) => {
    setSearchItem(e.target.value);
  };

  const filteredData = FoodData.filter((el) => {
    return el.name.toLowerCase().includes(searchItem.toLowerCase());
  });

  return (
    <>
    <div className='main'>
      <h1>Pro Nutrition</h1>
      <div className='search-section'>
      <h2>Search</h2>
      <input type="text" placeholder='Search an item.' onChange={handelSearch} />
      </div>
      {filteredData.map((el, i) => (
        <Foodbox data={el} index={i} key={i} />
      ))}
    </div>
    </>
  );
}


export default App;
