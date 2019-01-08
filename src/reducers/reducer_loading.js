import { SET_LOADING } from '../actions/index'

export default function (state = false, action) {
  switch (action.type) {
    case SET_LOADING:
      return action.payload
    default:
      return state
  }
}
