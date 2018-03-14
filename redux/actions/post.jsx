/*
 * action types
 */
 
export const POST_FETCH_REQUESTED = 'POST_FETCH_REQUESTED'
export const POST_FETCH_SUCCEEDED = 'POST_FETCH_SUCCEEDED'
export const POST_FETCH_FAILED = 'POST_FETCH_FAILED'
export const SUBMIT_POST = 'SUBMIT_POST'
 
/*
 * action creators
 */
export function fetchPost() {
	return { type: POST_FETCH_REQUESTED }
}

export function submitPost(post) {
	return { type: SUBMIT_POST, post }
}

export function fetchPostSuccess(posts) {
	return { type: POST_FETCH_SUCCEEDED, posts }
}

export function fetchPostFailure(message) {
	return { type: POST_FETCH_FAILED, message }
}
export function addTodo(post) {
  return { type: ADD_TODO, post }
}

