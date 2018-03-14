import React from 'react'
import { Container, Col, Row } from 'reactstrap'
const PostBlurb = ({title, subtitle, meta}) => (

	<Row>
		<Col xs='3'></Col>
		<Col xs='6'>
			<h2 style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: '800', fontSize: '36px'}}>{title}</h2>
			<h3 style={{ fontFamily: 'Open Sans, sans-serif'}}> {subtitle} </h3>
			<p style={{ fontFamily: 'Roboto, sans-serif', fontWeight: '500'}}> {meta} </p>
		</Col>
		<col xs='3'></col>
	</Row>
)

export default PostBlurb