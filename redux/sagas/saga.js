import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects'
import { Api } from '../../api/post.jsx'

/*// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchPost(action) {
   try {
      const post = yield call(Api.fetchPost, action.payload.userId);
      yield put({type: "POST_FETCH_SUCCEEDED", post: post});
   } catch (e) {
      yield put({type: "POST_FETCH_FAILED", message: e.message});
   }
}*/

function* submitPost(action) {
   try {
      const post = yield call(Api.submitPost, action.post)
      yield put({type: "POST_FETCH_SUCCEEDED"});
   } catch (e) {
      yield put({type: "POST_FETCH_FAILED", message: e.message});
   }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
/*function* postFetch() {
  yield takeLatest("POST_FETCH_REQUESTED", submitPost);
}*/

function* postSubmit() {
  yield takeLatest("SUBMIT_POST", submitPost)
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export default function* mySaga() {
  yield all([
    postSubmit(),
  ])
}