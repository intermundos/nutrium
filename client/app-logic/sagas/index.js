import  { fork }   from      'redux-saga/effects'
import  test   from      './testSaga'
import search from './searchSaga'

export default function* rootSaga() {
  yield [
    // fork(test),
    fork(search)
  ]
}
