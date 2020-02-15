import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { ADD_BLOG } from '../../store/actions';
import AlertDialogue from '../../components/alertDialogue';
import '../../assets/css/blog.css';

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
	const [isOpen, setIsOpen] = useState(false);
	

	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [file, setFile] = useState('');
	const [category, setCategory] = useState('');
	const [titleError, setTitleError] = useState('');
	const [contentError, setContentError] = useState('');
	const [isValid, setIsValid] = useState(false);
	const inputFile = useRef(null);
	console.log('inputref', inputFile);

	console.log('fileAAA', file);
	const handleFileChange = async e => {
		const file = e.target.files[0];
		console.log('file', file);
		console.log(await toBase64(file));
		const res = await toBase64(file);
		setFile(res);
	};
	const onBlockClick = () => {
		// `current` points to the mounted file input element
		inputFile.current.click();
	};
	console.log('file', file);
	const validateForm=(value,name)=>{
	    if(title ===""){
			setTitleError("Title is required ");

			setIsValid(false);
			return ;
			
		}
		if(content ===""){
			setTitleError("Content is required ");
			setIsValid(false);
			return ;
		}
		
		
	}
	console.log("isValid",isValid);
	console.log("title",title);
	console.log("content",content);
	const handleSubmit = e => {
		
		e.preventDefault();
		if(isValid === true){
			console.log('eee', e);
			props.addBlog({ id: uuidv1(), title, content, category, file });
		}
		
	};
   
	const handleModal = () => {
		
		setIsOpen(false);
		console.log("isOPen",isOpen);
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
						onChange={e => {validateForm(e.target.value,"title")}}
					/>
					{isValid?<div  className="errorMessage">
						{titleError}
					</div>:""}
				</div>
				<div className="form-group">
					<label htmlFor="exampleInputContent">Content</label>
					<input
						type="text"
						className="form-control"
						placeholder="content"
						name="content"
						onChange={e => {validateForm(e.target.value,"content")}}
					/>
					<div className="errorMessage">
						{contentError}
					</div>
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
						<div className="blockImg" onClick={onBlockClick}>
							<input type="file" id="file" ref={inputFile} onChange={handleFileChange} />
							<img className="img-thumbnail" src={file} alt="Blog not selected" />
						</div>
					)}
				</div>

				
				<button type="submit" className="btn btn-primary m-3" onClick={()=>setIsOpen(true)}>Submit</button>
					<button type="reset" className="btn btn-danger">
						Reset
					</button>
				
			</form>
			
			<AlertDialogue
				isOpen={isOpen}
				title="Add Blog"
				content="Blog a été ajouté avec succès"
				setIsOpen={setIsOpen}
				openReset={handleModal}
				handleDismiss={()=>setIsOpen(false)}
				diplayBtn={false}
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
