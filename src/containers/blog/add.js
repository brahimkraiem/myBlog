import React from 'react';

const Add=()=> {
    debugger
    const handleSubmit=()=>{
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="title" name="title" />
                <input type="text" placeholder="content" name="content" />
                <input type="file" name="file" />
                <button type="submit" >Submit</button>
                <button type="reset">Reset</button>
            </form>
        </div>
    );
}

export default Add;