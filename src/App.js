import React from 'react';
import {Link,Route,Switch,BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import ListBlogs from './containers/blog';
import Add from './containers/blog/add';
import Edit from './containers/blog/edit';


function App() {
	return (
		<div className="App">
			<Router>
				<div>
					<nav>
						<ul>
							<li>
								<Link to="/">List</Link>
							</li>
							<li>
								<Link to="/add">Add</Link>
							</li>
						
						</ul>
					</nav>

					<Switch >
						<Route exact path="/" >
							<ListBlogs />
						</Route>
						<Route exact path="/add"  >
							<Add />
						</Route>
						<Route exact path="/edit/:uuid" >
							<Edit />
						</Route>

					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
