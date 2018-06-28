import { ADD_WANNATAGS } from "../actionTypes/WannatagActoinType";

export const addWannatags = wannatags => {
  return {
    type: ADD_WANNATAGS,
    payload: {
      wannatags
    }
  };
};
