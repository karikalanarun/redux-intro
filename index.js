const { createStore } = require("redux");
// console.log("Hello world");

// incReducer :: currState -> action -> newState
function incReducer(currState = { number1: 0, number2: 0 }, action) {
  switch (action.type) {
    case "INC":
      return { ...currState, number: currState.number + 1 };
    case "DEC":
      return { ...currState, number: currState.number - 1 };
    default:
      return currState;
  }
}

// function add(a = 5, b) {
//   return a + b;
// }

// console.log("add :: ", add(undefined, 4));

const store = createStore(incReducer);

console.log("store ::: currState :: ", store.getState());

store.subscribe((e) => {
  console.log("newState ::: ", store.getState());
});

store.dispatch({ type: "INC" });
store.dispatch({ type: "DEC" });
// store.dispatch({ type: "INC" });
