import { createStore } from 'redux';

const counterReducer = (state={ counter: 0, showCounter: true }, action) => {
	switch(action.type) {
		case 'increment':
			return { counter: state.counter + 1, showCounter: state.showCounter };
		case 'increase':
			return { counter: state.counter + action.payload.amount, showCounter: state.showCounter };
		case 'decrement':
			return { counter: state.counter - 1, showCounter: state.showCounter };
		case 'toggle':
			return { showCounter: !state.showCounter, counter: state.counter };
		default:
			return state;
	}
};

const store = createStore(counterReducer);

export default store;

