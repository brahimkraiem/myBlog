import React from 'react';
import Blog from '../../components/blog';
import { connect } from 'react-redux';

const ListBlogs = props => {
  console.log('allB', props.allBlogs);
  
	if (!props.allBlogs) return <div>tttttttt</div>;
	return (
		<div>
			<div class="form-group">
				<select  class="custom-select">
					<option selected>Select a category</option>
					{props.allBlogs.map(item => {
						return <option>{item.category}</option>;
					})}
				</select>
			</div>
			{props.allBlogs.map(blog => (
				<Blog key={blog.id} id={blog.id} image={blog.file} title={blog.title} category={blog.category} />
			))}
		</div>
	);
};

const mapStateToProps = state => ({ allBlogs: state.blogs });
export default connect(mapStateToProps, null)(ListBlogs);
