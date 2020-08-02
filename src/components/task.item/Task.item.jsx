import React from 'react';

function TaskItems({ list, ...otherProps }) {
	return (
		<>
			{list.map(function (item, index) {
				return (
					<div className='toDo__container--item' key={index} {...otherProps}>
						{item}
					</div>
				);
			})}
		</>
	);
}

export default TaskItems;
