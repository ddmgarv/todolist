import * as homeTypes from 'redux/home/home.types';

const initialState = {
	allLists: [],
	errorMessage: '',
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case homeTypes.GET_ALL_LISTS_SUCCEEDED:
			return { ...state, allLists: payload };
		case homeTypes.GET_ALL_LISTS_FAILED:
			return { ...state, errorMessage: payload };
		default:
			return state;
	}
};
