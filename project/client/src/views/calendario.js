
import {Container,} from "reactstrap";

// import timeGridPlugin from "@fullcalendar/timegrid";

//import "./styles.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useState } from "react";
  // core components
  import Header2 from "components/Headers/Header2.js";
  
  const Calendario = () => {
    const [events, setEvents] = useState([]);
    return (
      <>
        <Header2/>
        {/* Page content */}
        <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin]}
      headerToolbar={{
        left: "prev,next today myCustomButton",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay"
      }}
      events={events}
      customButtons={{
        myCustomButton: {
          text: "Add event",
          click: () => {
            setEvents([
              ...events,
              {
                title: "event",
                date: new Date().toISOString().substr(0, 10)
              }
            ]);
          }
        }
      }}
    />
        
      </>
    );
  };
  
  export default Calendario;
  