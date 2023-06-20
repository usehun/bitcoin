import { useEffect, useState } from "react";
import CalBox from "./CalBox";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [select, setSelect] = useState(0);
  // const [price, setPrice] = useState();

  const onChange = (event) => {
    // console.log(event.target.value);
    setSelect(event.target.value);
    console.log(select);
    console.log(coins);
  };

  // const onChangePrice = (event) => {
  //   setPrice(event.target.value);
  // };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>The Coins {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>loading</strong> : null}
      <select onChange={onChange}>
        {coins.map(({ name, id }, index) => (
          <option value={index} key={id}>
            {name}
          </option>
        ))}
      </select>

      <CalBox label="USD" />

      {/* <CalBox value={coins[0]} label={coins[0]} /> */}
    </div>
  );
}
export default App;
