/* eslint-disable react/prop-types */
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
