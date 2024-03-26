import { event } from "../event";
import "./Eventdetail.css";

function Eventdetails(prop) {
  console.log(prop);
  return (
    <div>
      {event.map(function (e) {
        if (e.title === prop.eventName) {
          return (
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className="eventdetails"
            >
              <div className="event-top">
                <img src={e.image} alt=""></img>
              </div>
              <div className="event-center">
                <p className="tit">{e.title}</p>
                <p className="dat">{e.heading}</p>
              </div>
              <div className="event-end">
                <p>{e.content}</p>
                <p>{e.content2}</p>
                <p>{e.content3}</p>
              </div>
            </div>
          );
        }
        // If the condition is not met, return null
        return null;
      })}
    </div>
  );
}

export default Eventdetails;
