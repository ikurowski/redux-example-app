import { createStore } from 'redux';

// eslint-disable-next-line default-param-last
function counterReducer(
  // eslint-disable-next-line default-param-last
  state = {
    counter: 1,
  },
  action,
) {
  if (action.type === 'COUNTER') {
    return {
      counter: state.counter + 1,
    };
  }
  return state;
}

const store = createStore(counterReducer);

export default store;
