import { ADD_WANNATAGS } from "../actionTypes/WannatagActoinType";

const initialState = {
  wannatags: []
};

const wannatagsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WANNATAGS:
      return Object.assign({}, state, {
        wannatags: [...state.wannatags, ...action.payload.wannatags]
      });
    default:
      return state;
  }
};
export default wannatagsReducer;
