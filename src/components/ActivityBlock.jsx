import { useState } from 'react';

export default function ActivityBlock({ active, date, month }) {
  const [isActive, setActive] = useState(false);

  const color = active >= 30 ? 4 : active >= 20 ? 3 : active >= 10 ? 2 : active > 0 ? 1 : 0;

  const toggleClass = () => {
    if (isActive !== null) {
      document.querySelectorAll('.activity-block').forEach((el) => el.classList.remove('active'));
    }
    setActive(!isActive);
  };

  return (
    <div className={`activity-block state-${color} ${isActive ? 'active' : null}`} onClick={toggleClass}>
      <div className='activity-block-active'>
        <p className='block-title'>{active ? active : 'No'} contributions</p>
        <p className='block-date'>
          {date.getDate()}, {date.getFullYear()}
        </p>
      </div>
    </div>
  );
}
