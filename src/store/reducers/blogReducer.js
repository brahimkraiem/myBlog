const INITIAL_STATE = { blogs: localStorage.getItem('blogs') ? JSON.parse(localStorage.getItem('blogs')) : [] };
export const blogReducer = (state = INITIAL_STATE, action) => {
	let newBlogs = [];
	switch (action.type) {
		case 'ADD_BLOG':
			newBlogs = [...state.blogs, action.payload];

			localStorage.setItem('blogs', JSON.stringify(newBlogs));
			return { blogs: newBlogs };

		case 'EDIT_BLOG':
			newBlogs = state.blogs.map(b => {
				if (b.id === action.payload.id) return action.payload;
				else return b;
			});
			localStorage.setItem('blogs', JSON.stringify(newBlogs));
			return { blogs: newBlogs };
		case 'DELETE_BLOG':
			newBlogs = state.blogs.filter(b => {
				return b.id !== action.payload;
			});
			localStorage.setItem('blogs', JSON.stringify(newBlogs));
			return { blogs: newBlogs };

		default:
			return state;
	}
};
