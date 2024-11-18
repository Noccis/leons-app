import React, { useState } from "react";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";

const CalendarContainer = () => {
  const localizer = momentLocalizer(moment);

  const myEventsList = [
    {
      start: moment("2024-11-04T10:00:00").toDate(),
      end: moment("2024-11-04T11:00:00").toDate(),
      title: "Test",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  function addEvent(){

  };

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
      <button onClick={handleModal}>Ny händelse</button>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Här ska det vara en input form</h2>
            <button onClick={handleModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarContainer;

const InputForm = () => {
  const [event, setEvent] = useState({ title: "", date: null });
  
  return (
    <div>

    </div>
  )
}
