import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { DELETE_BLOG } from '../store/actions';
import AlertDialogue from './alertDialogue';

const Blog = props => {
	//history
	const history = useHistory();
	//handle state
	const [show, setShow] = useState(false);
	const [deleteBlog] = useState(true);
	//handle close
	const handleClose = () => {
		setShow(false);
	};
	//handle show
	const handleShow = () => {
		setShow(true);
	};

	// handle click
	const handleClick = () => {};
	// handle edit
	const handleEdit = () => {
		history.push('/edit/' + props.id);
	};
	//handle delete
	const handleDelete = () => {
		props.deleteBlog(props.id);
		setShow(false);
	};
	// format date now
	const dateNow = new Date();

	const dd = dateNow.getDate();
	console.log('dd', dd);
	const mm = dateNow.getMonth() + 1;
	console.log('mm', mm);
	const yyyy = dateNow.getFullYear();

	return (
		<>
			<div className="card flex-md-row mb-4 box-shadow h-md-250" onClick={handleClick}>
				<button type="submit" className="btn btn-primary m-3" onClick={handleEdit}>
					Edit
				</button>
				<button type="submit" className="btn btn-primary m-3" onClick={handleShow}>
					Delete
				</button>
				<div className="card-body d-flex flex-column align-items-start">
					<strong className="d-inline-block mb-2 text-primary">{props.category}</strong>
					<h3 className="mb-0">
						<a className="text-dark" href="#">
							{props.title}
						</a>
					</h3>
					<div className="mb-1 text-muted">{dd + '-' + mm + '-' + yyyy}</div>
					<p className="card-text mb-auto">{props.content}</p>
					<h4>Continue reading</h4>
				</div>
				<img
					className="card-img-right flex-auto d-none d-md-block"
					style={{ width: 200, height: 250 }}
					src={props.image}
					alt={props.title}
				/>
			</div>
			<AlertDialogue
				deleteBlog={deleteBlog}
				show={show}
				confirmMessage={'Confimer'}
				closeMessage={'Cancel'}
				closeModal={handleClose}
				showModal={handleDelete}
				header={'Confirm Delete'}
				body={'Are you sure  you want to delete this blog?'}
			/>
		</>
	);
};
const mapStateToProps = state => ({ allBlogs: state.blogs });
const mapDispatchToProps = dispatch => {
	return {
		deleteBlog: id =>
			dispatch({
				type: DELETE_BLOG,
				payload: id,
			}),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Blog);
