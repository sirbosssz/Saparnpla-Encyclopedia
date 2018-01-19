import { state, SEARCH_TEXT, FISH } from './redux.actions'

const initialState = {
  search_text: state.search_text,
  fish: state.fish,
}

const mainReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case SEARCH_TEXT:
      return state = {
        ...state,
        search_text: action.payload,
      }
      case FISH:
        return state = {
          ...state,
          fish: action.payload,
        }
    default:
      return state
  }
}

export default mainReducer
