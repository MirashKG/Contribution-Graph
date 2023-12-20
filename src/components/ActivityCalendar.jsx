import React, { useEffect, useState } from 'react';
import ActivityBlock from './ActivityBlock';

export default function ActivityCalendar({ data }) {
  const [months, setMonths] = useState([]);
  const [weekDays, setWeekDays] = useState([]);
  const [activityMatrix, setActivityMatrix] = useState([]);
  useEffect(() => {
    const monthLabels = Array.from(new Array(12)).map((_, index) => {
      const date = new Date(2023, index, 1);
      return <div key={index}>{date.toLocaleString('default', { month: 'short' })}</div>;
    });
    setMonths(monthLabels);
	
    const dayLabels = ['Пн','Ср','Пт'].map((day, index) => <div key={index}>{day}</div>);
    setWeekDays(dayLabels);

    const activityMatrix = [];

    for (let month = 0; month < 12; month++) {
      const monthActivities = [];
      for (let day = 0; day < 31; day++) {
        const date = new Date(2023, month, day + 1);
        const dateString = date.toISOString().split('T')[0];

        const isActive = data[dateString]

        monthActivities.push(<ActivityBlock key={day} active={isActive} date={date} month={month}/>);
      }
      activityMatrix.unshift(monthActivities);
    }
    setActivityMatrix(activityMatrix);
  }, [data]);

  return (
    <div className='activity-calendar'>
      <div className='weekdays'>{weekDays}</div>
      <div>
        <div className='activity-matrix'>
          {activityMatrix.map((monthActivities, index) => (
            <div key={index} className='month-activities'>
              <div className='months'>{months[index]}</div>
              {monthActivities}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
