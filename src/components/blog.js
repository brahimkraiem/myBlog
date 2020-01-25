import React from 'react';

const blog = props => {
    const handleClick=()=>{
        
    }
	return (
		<div onClick={handleClick}>
			<img src={props.image} alt={props.title} />
			<h2>{props.title}</h2>
            <button>Edit</button>
            
		</div>
	);
};

export default blog;
