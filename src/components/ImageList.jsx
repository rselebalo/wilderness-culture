    
import React from 'react';
import Image from './Image';
import NoImages from './NoImgs';

const ImgList = props => {
	const results = props.data;
	let imgs;
	if (results.hits && results.hits.length > 0) {
		imgs = results.hits.map(img =>
			<Image
				url={img.largeImageURL}
				user={img.user}
				name={img.user}
				link={img.webformatURL}
				key={img.id}
			/>
		);
	} else {
		imgs = <NoImages />;
	}
	return (
		<ul className="img-list">
			{imgs}
		</ul>
	);
};

export default ImgList;