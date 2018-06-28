import { addWannatags } from "../actions/WannatagsAction";

export const fetchWannatags = dispatch => {
  return fetch(`/wannatags?postDate=${new Date().getTime()}`).then(
    async res => {
      const wannatags = await res.json();
      dispatch(addWannatags(wannatags));
    }
  );
};
