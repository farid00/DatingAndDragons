import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

let PostForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">Title</label>
        <Field name="title" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="lastName">Subtitle</label>
        <Field name="subtitle" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="meta">Meta</label>
        <Field name="meta" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="content">Content</label>
        <Field name="content" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

PostForm = reduxForm({
  // a unique name for the form
  form: 'contact'
})(PostForm)

export default connect()(PostForm)
