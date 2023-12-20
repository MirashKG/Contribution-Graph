import React, { useEffect, useState } from 'react';
import './App.scss'
import ActivityCalendar from './components/ActivityCalendar';
import ActivityPanel from './components/ActivityPanel';

// Пример использования компонента ActivityCalendar
function App() {
  const [activityData, setActivityData] = useState({});

  useEffect(() => {
    fetch('https://dpg.gg/test/calendar.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Установка полученных данных в состояние
        setActivityData(data);
      })
      .catch((error) => {
        console.error('There was a problem fetching data:', error);
      });
  }, []);

  return (
    <div className='App'>
      <div className='container'>
        <h1 className='title'>Contribution Graph TZ.</h1>
        <ActivityCalendar data={activityData} />
        <ActivityPanel/>
      </div>
    </div>
  );
}

export default App;
