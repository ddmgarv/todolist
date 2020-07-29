import * as mainAppTypes from 'redux/main.app/main.app.types';

const initialState = {
	loading: false,
	idb: null,
	idbError: '',
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case mainAppTypes.SET_LOADING:
			return { ...state, loading: payload };
		case mainAppTypes.SET_IDB_SUCCEEDED:
			return { ...state, idb: payload };
		case mainAppTypes.SET_IDB_FAILED:
			return { ...state, idbError: payload };
		default:
			return state;
	}
};
