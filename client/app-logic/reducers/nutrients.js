export const SEARCH_INITIATED       = 'search/SEARCH_INITIATED'
export const SEARCH_REQUEST_SUCCESS = 'search/SEARCH_REQUEST_SUCCESS'
export const SEARCH_REQUEST_FAILURE = 'search/SEARCH_REQUEST_FAILURE'

export const fetchDataOnFocus = () => ({ type: SEARCH_INITIATED })


const initialState = {
  nutrients: [],
  isFetched: false
}
export default (state = initialState, action) => {
  switch (action.type) {

    case SEARCH_REQUEST_SUCCESS :
      return {
        nutrients: [ ...action.payload ],
        isFetched: true
      }

    default :
      return state
  }
}
