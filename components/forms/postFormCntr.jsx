import React from 'react'
import { connect } from 'react-redux'
import PostForm from './postForm.jsx'
import { submitPost } from '../../redux/actions/post.jsx'

const mapDispatchToProps = dispatch => ({
	onSubmit: values => {
		dispatch(submitPost(values))
	}
})

export default connect(
	null,
	mapDispatchToProps
)(PostForm)