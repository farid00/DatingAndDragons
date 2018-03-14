import React from 'react';
// using NavLink for the activeClassName, otherwise, for 
// a plain link, use Link.
import { Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Jumbotron, Container } from 'reactstrap';
import Navigation from './Navigation.jsx'
import PostList from './PostList.jsx'
import PostFormCntr from './forms/postFormCntr.jsx'
import { submitPost } from '../redux/actions/post.jsx'
// Our Pure and clean App component. In the browser, we'll wrap
// this inside a BrowserRouter component and put it in the DOM,
// otherwise on server render, we'll stick this in a StaticRouter
// component and renderToString it.
const Posts = [
	{
		title: 'What is this blog all about?',
	 	subtitle: 'D&D, Dating, and Developing',
	 	meta: 'post date filler'
	}
]

const App = () => (
<div>
 <Jumbotron fluid>
    <Container fluid>
      <h1 className="display-3">Dungeons and Dating</h1>
      <p className="lead">Juggling DM'ing, Dating, and Developing.</p>
    </Container>
  </Jumbotron>
  <Container flui d>
  	<PostList posts={Posts} />
    <PostFormCntr />
  </Container>
</div>
)

export default App