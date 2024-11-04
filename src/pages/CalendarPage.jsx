import React from "react";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";

const CalendarPage = () => {
  const localizer = momentLocalizer(moment);
  const myEventsList = [
    {
      start: moment("2024-11-04T10:00:00").toDate(),
      end: moment("2024-11-04T11:00:00").toDate(),
      title: "Test",
    },
  ];
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default CalendarPage;
