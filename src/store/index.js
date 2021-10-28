// import { createStore, combineReducers } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';
import counterSlice from './counter';
import authSlice from './auth';

const store = configureStore({
	reducer: {
		counter: counterSlice.reducer,
		auth: authSlice.reducer
	}
});

/* OR const store = createStore(counterSlice.reducer); OR use combineReducers from 'redux' to merge reducers
But here we can use 'configureStore' from '@reduxjs/toolkit' and ditch 'redux'. */

export default store;


//------------------------------Using just redux----------------------------------------------------------
// const counterReducer = (state=initialState, action) => {
// 	switch(action.type) {
// 		case 'increment':
// 			return { counter: state.counter + 1, showCounter: state.showCounter };
// 		case 'increase':
// 			return { counter: state.counter + action.payload.amount, showCounter: state.showCounter };
// 		case 'decrement':
// 			return { counter: state.counter - 1, showCounter: state.showCounter };
// 		case 'toggle':
// 			return { showCounter: !state.showCounter, counter: state.counter };
// 		default:
// 			return state;
// 	}
// };

// const store = createStore(counterReducer);

// export default store;

