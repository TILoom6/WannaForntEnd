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
      console.log(action.value);
      return state;
    }
    case "ADDTASK": {
      console.log(action.value);
      return state;
    }
    case "ENDTASK": {
      console.log(action.value);
      return state;
    }
    case "UPDTASK": {
      console.log(action.value);
      return state;
    }
    case "DELTASK": {
      console.log(action.value);
      return state;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
