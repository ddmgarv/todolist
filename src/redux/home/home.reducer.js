import * as homeTypes from './home.types';

const initialState = {
	allLists: [],
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case homeTypes.GET_ALL_LISTS:
			return { ...state, allLists: payload };
		// case homeTypes.GET_ALL_LISTS_FAIL:
		// 	return { ...state, allLists: payload };
		// case homeTypes.GET_ALL_LISTS_SUCCEEDED:
		// 	return { ...state, allLists: payload };
		default:
			return state;
	}
};
