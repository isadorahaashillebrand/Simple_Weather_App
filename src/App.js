import React, { useState, useEffect } from "react";
import "./App.css";
import Info from "./Components/Info/Info";
import Country from "./Components/Country/Country";

const App = () => {
  let [tempSymbol, setTempSymbol] = useState("C");
  const [cities, setCities] = useState([]);
  let key = "8dfc07466d233800b655f7c54878e145";

  useEffect(() => {
    (async function fetchData() {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/group?id=5368361,524901&units=imperial&appid=${key}`
      );
      const data = await response.json();
      console.log(data);
      setCities(data.list);
    })();
  }, [key]);

  return (
    <main>
      <Info
        tempSymbol={tempSymbol}
        setTempSymbol={() => setTempSymbol(tempSymbol === "F" ? "C" : "F")}
      />
      <Country cities={cities[0]} tempSymbol={tempSymbol} />
      <Country cities={cities[1]} tempSymbol={tempSymbol} />
    </main>
  );
};

export default App;
