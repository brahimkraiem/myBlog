import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { ADD_BLOG } from '../../store/actions';
import AlertDialogue from '../../components/alertDialogue';

const uuidv1 = require('uuid/v1');
const toBase64 = file =>
	new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = error => reject(error);
	});

const Add = props => {
	const history = useHistory();
	const [show, setShow] = useState(false);

	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [file, setFile] = useState('');
	const [category, setCategory] = useState('');


	console.log('fileAAA', file);
	const handleFileChange = async e => {
		const file = e.target.files[0];
		console.log('file', file);
		console.log(await toBase64(file));
		const res = await toBase64(file);
		setFile(res);
	};

	console.log("file",file);
	const handleSubmit = e => {
		e.preventDefault();
		console.log('eee', e);
		props.addBlog({ id: uuidv1(), title, content, category, file });
	};
	const handleModal = () => {
		setShow(false);
		history.push('/');
	};
	return (
		<>
			<form className="container" onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="exampleInputTitle">Title</label>
					<input
						type="text"
						className="form-control"
						placeholder="title"
						name="title"
						onChange={e => setTitle(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="exampleInputContent">Content</label>
					<input
						type="text"
						className="form-control"
						placeholder="content"
						name="content"
						onChange={e => setContent(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="exampleInputCategory">Category</label>
					<input
						type="text"
						className="form-control"
						placeholder="category"
						name="category"
						onChange={e => setCategory(e.target.value)}
					/>
				</div>
				<div className="d-flex flex-row">
					{!file ? (
						<div className=" custom-file">
							<input
								type="file"
								className="custom-file-input"
								id="inputGroupFile01"
								onChange={handleFileChange}
							/>
							<label className="custom-file-label" htmlFor="inputGroupFile01">
								Choose file
							</label>
						</div>
					) : (
						<div>
							<img className="img-thumbnail" src={file} alt="Blog not selected" />
						</div>
					)}
				</div>

				<div className="form-group">
					<button type="submit" className="btn btn-primary m-3" onClick={() => setShow(true)}>
						Submit
					</button>
					<button type="reset" className="btn btn-danger">
						Reset
					</button>
				</div>
			</form>
			<AlertDialogue
				show={show}
				closeModal={handleModal}
				header={'Add Blog'}
				body={'Blog a été ajouté avec succès'}
			/>
		</>
	);
};
const mapDispatchToProps = dispatch => {
	return {
		addBlog: blog =>
			dispatch({
				type: ADD_BLOG,
				payload: blog,
			}),
	};
};
export default connect(null, mapDispatchToProps)(Add);
