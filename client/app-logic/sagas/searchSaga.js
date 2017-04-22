import { takeEvery }       from 'redux-saga/effects'
import { take, put, call, fork }       from 'redux-saga/effects'
import { SEARCH_INITIATED, SEARCH_REQUEST_SUCCESS, SEARCH_REQUEST_FAILURE } from '../reducers/nutrients'
import data from '../api/mockData'
const nutrients = data.nutrients


// Worker saga
export function* searchProcess() {
  console.log('saga/SEARCH_PROCESS_ON')
  try {
    // response = yield call(API CALL, argument) - backend
    let response = yield nutrients
    console.log('response is', response)
    response.forEach((nutrient) => {
      nutrient.isSelected = false
    })
    yield put({ type: SEARCH_REQUEST_SUCCESS, payload: response })
  } catch (err) {
    console.log('error fetching', err)
    yield put({ type: SEARCH_REQUEST_FAILURE, payload: { error: err }})
  }
}

// Watcher saga
export function* searchInitiated() {
  console.log('saga/SEARCH_DAEMON_ON')
  yield takeEvery(SEARCH_INITIATED, searchProcess)
}

export default function* search() {
  yield fork(searchInitiated)
}