import React from "react";
import "./Country.css";

const Country = props => {
  let currentTemp = 0;

  if (props.cities) {
    let fahrenheit = parseInt(props.cities.main.temp);
    let celsius = parseInt((fahrenheit - 32) * (5 / 9));
    if (props.tempSymbol === "F") {
      currentTemp = fahrenheit;
    } else {
      currentTemp = celsius;
    }
  }

  return (
    <section>
      <div className="floater">
        <div className="icon-temp">
          {props.cities && props.cities.name === "Los Angeles" ? (
            <img src="https://i.imgur.com/DOdGtZy.png" alt="Sun" />
          ) : (
            <img src="https://i.imgur.com/9UI150D.png" alt="Snow" />
          )}
          <p id="temp">{props.cities ? currentTemp : ""}°</p>
        </div>
        <p>{props.cities ? props.cities.weather[0].main.toUpperCase() : ""}</p>
      </div>
      {props.cities && props.cities.name === "Los Angeles" ? (
        <img src='https://i.imgur.com/Q3b1w2F.jpg' alt="Los Angeles" id="country-img" />
      ) : (
        <img src='https://i.imgur.com/vOjru6H.jpg' alt="Moscow" id="country-img" />
      )}
      <div className="country">
        {props.cities && props.cities.name === "Los Angeles" ? (
          <div>
            <p>Los Angeles</p>
            <p>California</p>
          </div>
        ) : (
          <div>
            <p>Moscow</p>
            <p>Russia</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Country;
