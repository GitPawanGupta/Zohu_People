import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Box, GlobalStyles } from '@mui/material';

const Calendar = () => { // ✅ Fixed spelling here
  const events = [
    {
      title: 'Absent',
      date: '2025-06-02',
      display: 'block',
      className: 'absent',
    },
    {
      title: 'Absent',
      date: '2025-06-03',
      display: 'block',
      className: 'absent',
    },
    {
      title: 'Present\n10:19 Hrs',
      date: '2025-06-04',
      display: 'block',
      className: 'present',
    },
  ];

  return (
    <>
      {/* ✅ Global CSS-in-JS styling to replace calendar.css */}
      <GlobalStyles styles={{
        '.fc-daygrid-day-number': {
          zIndex: 10,
        },
        '.fc-event.absent': {
          backgroundColor: '#f8d7da !important',
          color: '#721c24 !important',
          border: '1px solid #f5c6cb',
          fontWeight: 'bold',
          fontSize: '12px',
          padding: '2px',
          textAlign: 'center',
        },
        '.fc-event.present': {
          backgroundColor: '#d4edda !important',
          color: '#155724 !important',
          border: '1px solid #c3e6cb',
          fontWeight: 'bold',
          fontSize: '12px',
          padding: '2px',
          textAlign: 'center',
          whiteSpace: 'pre-line',
        }
      }} />

      <Box sx={{ p: 3, position: 'relative', top: '100px', overflowY: 'auto' }}>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: 'title',
            center: '',
            right: 'prev,next today',
          }}
          events={events}
          fixedWeekCount={false}
          dayMaxEventRows={true}
          height="auto"
        />
      </Box>
    </>
  );
};

export default Calendar; // ✅ Fixed spelling here too
