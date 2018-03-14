import { request } from 'superagent';

const submitPost = (post) => (
	request
	.post('/post')
	.send(post)
)

const Api = {}
Api.submitPost = submitPost

export {Api}