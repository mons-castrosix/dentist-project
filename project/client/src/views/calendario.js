
import {
   
    
    Container,
    
  
  } from "reactstrap";

  import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";

import events from "./events";
import "@fullcalendar/core";
import "@fullcalendar/daygrid";
import "@fullcalendar/timegrid";
  // core components
  import Header2 from "components/Headers/Header2.js";
  
  const Calendario = () => {
    return (
      <>
        <Header2/>
        {/* Page content */}
        <Container classNameName="mt--7" fluid>
    
      <FullCalendar
        defaultView="dayGridMonth"
        // themeSystem="Simplex"
        // header={{
        //   left: "prev,next",
        //   center: "title",
        //   right: "dayGridMonth,timeGridWeek,timeGridDay",
        // }}
        plugins={[dayGridPlugin]}
        events={events}
        displayEventEnd="true"
        eventColor={"#" + Math.floor(Math.random() * 16777215).toString(16)}
      />

        </Container>
      </>
    );
  };
  
  export default Calendario;
  