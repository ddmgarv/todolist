import React from 'react';
import './formInput.scss';

export default function FormInput({ ...otherProps }) {
	return <input required={true} className='formInput' type='text' {...otherProps} />;
}
