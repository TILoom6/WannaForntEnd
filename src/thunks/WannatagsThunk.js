import { addWannatags } from "../actions/WannatagsAction";

export const fetchWannatags = (dispatch, postDate) => {
  return fetch(`/wannatags?postDate=${postDate}`).then(async res => {
    const wannatags = await res.json();
    dispatch(addWannatags(wannatags));
  });
};
