import React from 'react';


function App() {
  return (
    <button
      type="button"
      onClick={() => {
        store.dispatch({
          type: 'COUNTER',
        });
        console.log(store.getState().counter);
      }}
    >
      +1
    </button>
  );
}

export default App;
