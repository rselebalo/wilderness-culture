import React from 'react';

const Img = props =>
	<li>
		<a href={props.link}>
			<img src={props.url} alt="Pixabay Image here" />
		</a>
		<p>
			Photo by
			<a href={props.user}>{props.name}</a>
			<a href={props.link}> See on Pixabay</a>
		</p>
	</li>;

export default Img;