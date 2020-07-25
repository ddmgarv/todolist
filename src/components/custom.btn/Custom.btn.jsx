import React from 'react';
import './custom.btn.scss';

function CustomBtn({ children, ...otherProps }) {
	return (
		<button type='button' className='customBtn' {...otherProps}>
			{children}
		</button>
	);
}

export default CustomBtn;
