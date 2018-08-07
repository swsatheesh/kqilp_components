import { UPDATE_USERNAME } from '../actions/metadata_actions';

export default function metadataReducer(state = {}, action) {
  let newState = state;
  const { type, payload } = action;

  switch (type) {
    case UPDATE_USERNAME: {
        newState = { ...state, username: payload.username };
        break;
    }
    default:
          break;
  }
  return newState;
}