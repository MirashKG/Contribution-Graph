import React from 'react';

const panelInfo = [
	{
		contributions:'No contributions' 
	},
	{
		contributions:'1-9 contributions' 
	},
	{
		contributions:'10-19 contributions' 
	},
	{
		contributions:'20-29 contributions' 
	},
	{
		contributions:'30+ contributions' 
	}
]

export default function ActivityPanel() {
  return (
    <div className='panel'>
      <p className='panel-title'>Меньше</p>
      <div className='panel-wrapper'>
        {panelInfo.map((elem, index) => (
			<div key={index} className={`panel-item state-${index}`} >
			<div className='panel-active'>{elem.contributions}</div>
			</div>
		))}
      </div>
      <p className='panel-title'>Больше</p>
    </div>
  );
}
