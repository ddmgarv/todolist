import { SET_LOADING } from './main.app.types';

const initialState = {
	loading: false,
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_LOADING:
			return { ...state, loading: payload };

		default:
			return state;
	}
};
