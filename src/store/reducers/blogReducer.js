

export const blogReducer=(state={blogs:[]},action)=>{
    
    switch(action.type){
        
        case "ADD_BLOG":
            return {blogs:[...state.blogs,action.payload]}
            
            case "EDIT_BLOG":
                const newBlogs=state.blogs.map(b=>{
                    console.log("b.id",b.id, "action.pay",action.payload);
                  if(b.id=== action.payload.id) return action.payload;
                    else  return b;
                })
                return {blogs:newBlogs}
          case "DELETE_BLOG":
            return state.blogs.filter(b=>{
                console.log("b.id:",b.id);
                console.log("action.payload2222",action.payload.id);
               return b.id !== action.payload.id});
            
             
             
            default: 
            return state;

    }
    
}