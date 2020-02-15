import React, { useState, useRef } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { EDIT_BLOG } from '../../store/actions';
import AlertDialogue from '../../components/alertDialogue';
import "../../assets/css/blog.css";
//convert to base64
const toBase64 = file =>
	new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = error => reject(error);
	});

const Edit = props => {
	const param = useParams();
	const history = useHistory();
	const inputRef=useRef(null);
	console.log(inputRef,'input');

	const resulBlog = props.allBlogs.find(b => {
		console.log(b.id);
		return b.id === param.uuid;
	});
	//handleState
	const [title, setTitle] = useState(resulBlog ? resulBlog.title : '');
	const [content, setContent] = useState(resulBlog ? resulBlog.content : '');
	const [file, setFile] = useState(resulBlog ? resulBlog.file : '');
	const [isOpen, setIsOpen] = useState(false);
	const [category, setCategory] = useState('');
	//HandleFile
	const handleFileChange = async e => {
		const file = e.target.files[0];
		console.log(await toBase64(file));
		const res = await toBase64(file);
		setFile(res);
	};
	const onBlockClick=()=>{
		inputRef.current.click();
	}
	//send data
	const handleSubmit = e => {
		e.preventDefault();
		console.log('eee', e);
		props.editBlog({ id: param.uuid, title, content, category, file });
	};
	//handleModal
	const handleModal = () => {
		setIsOpen(true);
		history.push('/');
	};

	return (
		<form className="container" onSubmit={handleSubmit}>
			<div className="form-group">
				<label htmlFor="exampleInputEmail1">Title</label>
				<input
					type="text"
					value={title}
					className="form-control"
					placeholder="title"
					name="title"
					onChange={e => setTitle(e.target.value)}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="exampleInputPassword1">Content</label>
				<input
					type="text"
					value={content}
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
						value={category}
						onChange={e => setCategory(e.target.value)}
					/>
				</div>
			<div className="d-flex flex-row">
				
				
				{file ? (
					<div className="blockImg" onClick={onBlockClick}>
						<input type="file" id="file" ref={inputRef} onChange={handleFileChange} />
						<img className="img-thumbnail" src={file} alt="Red dot" />
					</div>
				) : (
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
				)}
			</div>

			<button type="submit" className="btn btn-primary m-3" onClick={() => setIsOpen(true)}>
				Submit
			</button>
			<button type="reset" className="btn btn-danger">
				Reset
			</button>
			<AlertDialogue
				isOpen={isOpen}
				title="Edit Blog"
				content="Blog deleted"
				setIsOpen={setIsOpen}
				openReset={handleModal}
				handleDismiss={()=>setIsOpen(false)}
				diplayBtn={false}
				/>	
		</form>
	);
};
const mapStateToProps = state => ({ allBlogs: state.blogs });
const mapDispatchToProps = dispatch => {
	return {
		editBlog: blog =>
			dispatch({
				type: EDIT_BLOG,
				payload: blog,
			}),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Edit);
