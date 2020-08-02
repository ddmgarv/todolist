import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import './modal.scss';

function Modal({ unsetModal, children, title }) {
	return (
		<div className='modalWrapper'>
			<div className='modal'>
				<div className='modal__header'>
					<h3 className='modal__header--title'>{title}</h3>
					{unsetModal && <FontAwesomeIcon onClick={unsetModal} className='modal__header--icon' icon={faTimesCircle} />}
				</div>
				<div className='modal__body'>{children}</div>
			</div>
		</div>
	);
}

export default Modal;
