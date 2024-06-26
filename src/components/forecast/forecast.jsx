/* eslint-disable react/prop-types */
import "./forecast.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./forecast.css";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );
  console.log(forecastDays);

  return (
    <div className="forecast-container">
      <h2 className="forecast-title">Weekly Forecast</h2>
      <Accordion allowZeroExpanded>
        {data &&
          data.list &&
          data.list.splice(0, 7).map((item, idx) => (
            <AccordionItem key={idx}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="forecast-item">
                    <img
                      src={`icons/${item.weather[0].icon}.png`}
                      className="icon-small"
                      alt="weather"
                    />
                    <div className="weather-info">
                      <p className="day">{forecastDays[idx]}</p>
                      <p className="description">
                        {item.weather[0].description}
                      </p>
                      <p className="min-max">
                        Min: {Math.round(item.main.temp_min)}°C / Max:{" "}
                        {Math.round(item.main.temp_max)}°C
                      </p>
                    </div>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
            </AccordionItem>
          ))}
      </Accordion>
    </div>
  );
};

export default Forecast;
