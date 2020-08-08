import React from 'react';

function TaskItems({ list, ...otherProps }) {
	return (
		<>
			{list.map(function (item, index) {
				return (
					<div className='toDo__container--item' key={index} {...otherProps}>
						<ul>
							<li>Title: {item.title}</li>
							<li>Description: {item.description}</li>
							<li>Start date: {item.startDate}</li>
							<li>Finish date: {item.finishDate}</li>
						</ul>
					</div>
				);
			})}
		</>
	);
}

export default TaskItems;
