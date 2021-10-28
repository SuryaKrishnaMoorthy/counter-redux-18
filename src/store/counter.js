import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
	name: 'counter', //mandatory
	initialState: initialCounterState,
	reducers: { //all reducers this slice needs 
		increment(state) {
			state.counter++;
		},
		decrement(state) {
			state.counter--;
		},
		increase(state, action) {
			state.counter += action.payload;
		},
		toggle(state) {
			state.showCounter = !state.showCounter;
		}
	},
});

export default counterSlice.reducer;
export const counterActions = counterSlice.actions;

/**
 *  Here 'counterActions' is an object with keys exactly same as our reducer fn names.
   		counterActions = {increment, decrement..} etc
 * calling these keys(counterActions.increase(10)) will return an action object 
   	like this { type: 'Some auto-generated unique identifier, payload: 10 }
 */
