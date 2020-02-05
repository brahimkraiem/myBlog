import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { DELETE_BLOG } from '../store/actions';




const Blog = props => {
  const history=useHistory();
  const [blogs,setBlogs]=useState([]);
  console.log('id', props);
	console.log('hhhh',history);
	console.log('allBlogs',);
    const handleClick=()=>{
        
	}

	const handleEdit=()=>{
		history.push("/edit/"+props.id);
  }
  const handleDelete=()=>{
   
    
  props.deleteBlog({id:props.id})
  }
    
	console.log(props);
	return (
    
		<div className="card flex-md-row mb-4 box-shadow h-md-250"  onClick={handleClick}>
			<button type="submit" className="btn btn-primary m-3" onClick={handleEdit}>Edit</button>
			<button type="submit" className="btn btn-primary m-3" onClick={handleDelete}>Delete</button>
            <div className="card-body d-flex flex-column align-items-start">
              <strong className="d-inline-block mb-2 text-primary">World</strong>
              <h3 className="mb-0">
                <a className="text-dark" href="#">{props.title}</a>
              </h3>
              <div className="mb-1 text-muted">Nov 12</div>
              <p className="card-text mb-auto">{props.content}</p>
              <h4>Continue reading</h4>
            </div>
            <img className="card-img-right flex-auto d-none d-md-block"   style={{width: 200, height: 250}} src={props.image} alt={props.title} />
        </div>
		
	);
}
const mapStateToProps=(state)=> (
  {allBlogs:state.blogs});
  const mapDispatchToProps=(dispatch)=>{
    return {
        deleteBlog:id=> dispatch({

            type:DELETE_BLOG,payload:id
        })
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Blog);
