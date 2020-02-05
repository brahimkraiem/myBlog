import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { EDIT_BLOG } from '../../store/actions';
const uuidv1 = require('uuid/v1');
const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});
const Edit=(props)=> {
    const param=useParams();
    console.log("psss",props.allBlogs);
    const resulBlog=props.allBlogs.find((b)=>{
          console.log(b.id);
          return b.id === param.uuid
     });
     console.log('param',param);
    const[title,setTitle]=useState(resulBlog?resulBlog.title:"");
    const[content,setContent]=useState(resulBlog?resulBlog.content:"");
    const[file,setFile]=useState(resulBlog?resulBlog.file:"");
    console.log("rrrr",resulBlog)
    const  handleFileChange = async (e)=> {
        const file =e.target.files[0];
        console.log(await toBase64(file));
        const res=await toBase64(file);
        setFile(res);
     }
    const handleSubmit=(e)=>{
          e.preventDefault();
          console.log('eee',e);
          props.editBlog({id:param.uuid,title,content,file});
          console.log('new data',{title,content,file}); 
    }
    
   
    
    console.log(param);
    console.log('title',title);
    console.log('content',content);
    return (
        <form className="container" onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Title</label>
    <input type="text" value={title}  className="form-control" placeholder="title" name="title"  onChange={(e)=>setTitle(e.target.value)} />
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Content</label>
    <input type="text" value={content} className="form-control" placeholder="content" name="content"  onChange={(e)=>setContent(e.target.value)} />
  </div>
  <div className="custom-file">
    <input type="file" className="custom-file-input"  id="inputGroupFile01" onChange={handleFileChange} />
    <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
   </div>

  <button type="submit" className="btn btn-primary m-3">Submit</button>
  <button type="reset" className="btn btn-danger">Reset</button>
</form>
       
    );
}
const mapStateToProps=(state)=> ({allBlogs:state.blogs});
const mapDispatchToProps=(dispatch)=>{
    return {
        editBlog:blog=> dispatch({

            type:EDIT_BLOG,payload:blog
        })
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Edit);
