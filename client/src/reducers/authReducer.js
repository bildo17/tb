import { FETCH_USER } from "../actions/types";

export default (state = null, action) => {
  // eslint-disable-next-line
  // console.log(action);
  switch (action.type) {
    case FETCH_USER:
      return action.payload._id || false;
    default:
      return state;
  }
};
