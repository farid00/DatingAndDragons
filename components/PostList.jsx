import React from 'react'
import PostBlurb from './PostBlurb.jsx'
const PostList = ({posts}) => (
	posts.map(function(post) {
		return <PostBlurb {...post} />
	})
)

export default PostList