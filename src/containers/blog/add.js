import React, { useState } from 'react';
import { connect } from 'react-redux';
import { ADD_BLOG } from '../../store/actions';
// import   "../../assets/styles/form.css";
const uuidv1 = require('uuid/v1');
const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});


const Add=(props)=> {
    
    const[title,setTitle]=useState("");
    const[content,setContent]=useState("");
    const[file,setFile]=useState("");
    const  handleFileChange = async (e)=> {
        const file =e.target.files[0];
        console.log(await toBase64(file));
        const res=await toBase64(file);
        setFile(res);
     }
    const handleSubmit=(e)=>{
          e.preventDefault();
          console.log('eee',e);
           props.addBlog({id:uuidv1(),title,content,file});
    }
    return (
        <form className="container" onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Title</label>
    <input type="text"  className="form-control" placeholder="title" name="title"  onChange={(e)=>setTitle(e.target.value)} />
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Content</label>
    <input type="text" className="form-control" placeholder="content" name="content"  onChange={(e)=>setContent(e.target.value)} />
  </div>
  <div className="custom-file">
    <input type="file" className="custom-file-input" id="inputGroupFile01" onChange={handleFileChange} />
    <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
   </div>

  <button type="submit" className="btn btn-primary m-3">Submit</button>
  <button type="reset" className="btn btn-danger">Reset</button>
</form>
        // <div>
        //     <form onSubmit={handleSubmit}>
        //     <div class="form-group">
        //         <input type="text" placeholder="title" name="title"  onChange={(e)=>setTitle(e.target.value)} />
        //         <input type="text" placeholder="content" name="content"  onChange={(e)=>setContent(e.target.value)} />
        //         <input type="file" name="file" className="fileStyle"   onChange={(e)=>{setFile(e.target.files[0].name)}} />
        //         <button type="submit" >Submit</button>
        //         <button type="reset">Reset</button>
        //     </div>    
        //     </form>
        // </div>
    );
}
const mapDispatchToProps=(dispatch)=>{
    return {
        addBlog:blog=> dispatch({
            type:ADD_BLOG,payload:blog
        })
    }
}
export default connect(null,mapDispatchToProps)(Add);