const { createStore, combineReducers } = require("redux");
// console.log("Hello world");

// {
//     incNumber: {number: 1},
//     mulDivNumber: {number: 1} // actions MUL, DIV
// }

// incReducer :: currState -> action -> newState
function incReducer(currState = { number: 0 }, action) {
  switch (action.type) {
    case "INC":
      return { ...currState, number: currState.number + 1 };
    case "DEC":
      return { ...currState, number: currState.number - 1 };
    default:
      return currState;
  }
}

function mulDivReducer(currState = { number: 1 }, action) {
  switch (action.type) {
    case "MUL":
      return { ...currState, number: currState.number * action.multiplier };
    case "DIV":
      return { ...currState, number: currState.number / action.divider };
    case "INC":
      return { ...currState, number: currState.number + 1 };
    default:
      return currState;
  }
}

const appReducer = combineReducers({
  incNumber: incReducer,
  mulDivNumber: mulDivReducer,
});

// function add(a = 5, b) {
//   return a + b;
// }

// console.log("add :: ", add(undefined, 4));

const store = createStore(appReducer);

console.log("store ::: currState :: ", store.getState());

store.subscribe((e) => {
  console.log("newState ::: ", store.getState());
});

function divAction(divider) {
  return { type: "DIV", divider };
}

store.dispatch({ type: "INC" });
store.dispatch({ type: "DEC" });
store.dispatch({ type: "MUL", multiplier: 5 });
store.dispatch(divAction(5));
// store.dispatch({ type: "INC" });
