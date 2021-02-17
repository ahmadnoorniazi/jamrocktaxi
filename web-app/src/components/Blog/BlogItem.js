import React from 'react';
import BlogInfoImg from '../../assets/blog/blog-info.png';
import { useHistory } from 'react-router-dom';

const BlogItem = ({ data }) => {
	const history = useHistory();

	return (
		<div className="blog-card">
			<img src={data.img} alt="blog item" />
			<div className="blog-card-content">
				<p className="blog-card-tag">{data.tag}</p>
				<h3 className="blog-card-title">{data.title}</h3>
				<div className="blog-card-info">
					<div>
						<img src={BlogInfoImg} alt="" />
						<span>{data.infoLabel}</span>
					</div>
					<span className="blog-card-date">{data.date}</span>
				</div>
				<p className="blog-card-text text-clamp">{data.desc}</p>
				<span className="blog-card-btn" onClick={() => history.push(`/blog-details/${data.id}`)}>
					Continue Reading
				</span>
			</div>
		</div>
	);
};

export default BlogItem;
