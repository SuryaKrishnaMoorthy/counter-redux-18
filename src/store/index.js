// import { createStore, combineReducers } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
	name: 'counter', //mandatory
	initialState,
	reducer: { //all reducers this slice needs 
		increment(state) {
			state.counter++;
		},
		decrement(state) {
			state.counter--;
		},
		increase(state, action) {
			state.counter += action.payload.amount;
		},
		toggle(state) {
			state.showCounter = !state.showCounter;
		}
	},
});

const store = configureStore({
	reducer: counterSlice.reducer
});


/* OR const store = createStore(counterSlice.reducer); OR use combineReducers from 'redux' to merge reducers
But here we can use 'configureStore' from '@reduxjs/toolkit' and ditch 'redux'. */


export default store;

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

