// 初期State
const initialState = {
  WannaList: [],
  text: "ddd",
  index: 1
};
// Reducer処理
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SETINDEX": {
      console.log(action.value);
      return state;
    }
    case "ADDWANNA": {
      state.WannaList.push({ index: action.value });
      return state;
    }
    case "SETTEXT": {
      return console.log(action.value);
    }
    case "ADDTASK": {
      return console.log(action.value);
    }
    case "ENDTASK": {
      return console.log(action.value);
    }
    case "UPDTASK": {
      return console.log(action.value);
    }
    case "DELTASK": {
      return console.log(action.value);
    }
    default: {
      return state;
    }
  }
};

export default reducer;
