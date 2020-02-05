import React from 'react';
import Blog from '../../components/blog';
import { connect } from 'react-redux';

const ListBlogs=(props)=>{
    
       if(!props.allBlogs) return(<div>tttttttt</div>)
        return (
            <div>
              {props.allBlogs.map((blog)=><Blog key={blog.id} id={blog.id} image={blog.file} title={blog.title}   />) }
            </div>
        );
    
}

const mapStateToProps=(state)=> ({allBlogs:state.blogs});
export default connect(mapStateToProps,null)(ListBlogs);