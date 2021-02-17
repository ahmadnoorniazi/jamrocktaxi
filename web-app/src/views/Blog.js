import React from 'react';
import BlogItem from '../components/Blog/BlogItem';
import Navbar from '../components/Home/Navbar';

// styles
import '../styles/Blog.scss';

// fakeData
import BlogFakeData from '../data/blog';

const Blog = () => {
	return (
		<div>
			<Navbar />
			<div className="blog-container">
				<h4>Jamaica Travel Tips</h4>
				<div className="container">
					<div className="row mx-0">
						<div className="col-12 col-sm-6 col-md-6 col-lg-4 my-2 p-0">
							<BlogItem data={BlogFakeData[0]} />
						</div>
						<div className="col-12 col-sm-6 col-md-6 col-lg-4 my-2 p-0">
							<BlogItem data={BlogFakeData[1]} />
						</div>
						<div className="col-12 col-sm-6 col-md-6 col-lg-4 my-2 p-0">
							<BlogItem data={BlogFakeData[2]} />
						</div>
						<div className="col-12 col-sm-6 col-md-6 col-lg-4 my-2 p-0">
							<BlogItem data={BlogFakeData[3]} />
						</div>
						<div className="col-12 col-sm-6 col-md-6 col-lg-4 my-2 p-0">
							<BlogItem data={BlogFakeData[4]} />
						</div>
						<div className="col-12 col-sm-6 col-md-6 col-lg-4 my-2 p-0">
							<BlogItem data={BlogFakeData[5]} />
						</div>
						<div className="col-12 col-sm-6 col-md-6 col-lg-4 my-2 p-0">
							<BlogItem data={BlogFakeData[6]} />
						</div>
						<div className="col-12 col-sm-6 col-md-6 col-lg-4 my-2 p-0">
							<BlogItem data={BlogFakeData[7]} />
						</div>
						<div className="col-12 col-sm-6 col-md-6 col-lg-4 my-2 p-0">
							<BlogItem data={BlogFakeData[8]} />
						</div>
						<div className="col-12 col-sm-6 col-md-6 col-lg-4 my-2 p-0">
							<BlogItem data={BlogFakeData[9]} />
						</div>
						<div className="col-12 col-sm-6 col-md-6 col-lg-4 my-2 p-0">
							<BlogItem data={BlogFakeData[10]} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;
