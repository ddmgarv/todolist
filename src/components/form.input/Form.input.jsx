import React from 'react';
import './form.input.scss';

export default function FormInput({ ...otherProps }) {
	return <input required={true} className='formInput' type='text' {...otherProps} />;
}
