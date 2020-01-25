import React from 'react';
import Blog from '../../components/blog';

const ListBlogs=()=>{
    const allBlogs=[];
        return (
            <div>
              {allBlogs.map(blog=><Blog image={blog.image} title={blog.title}  />)  }
            </div>
        );
    
}

export default ListBlogs;