import React from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import ListBlogs from './containers/blog';
import Add from './containers/blog/add';
import Edit from './containers/blog/edit';

function App() {
	return (
		<div className="App">
			<Router>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<a className="navbar-brand" href="#">
					Blog
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
						  <Link class="nav-link" to="/">List</Link>
						</li>
						<li className="nav-item">
						<Link class="nav-link" to="/add">Add</Link>
						</li>
					</ul>
					<form className="form-inline my-2 my-lg-0">
						<input
							className="form-control mr-sm-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
							onChange={e=>e.target.value}
						/>
						<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
							Search
						</button>
					</form>
				</div>
			</nav>
			<Switch>
						<Route exact path="/">
							<ListBlogs  />
						</Route>
						<Route exact path="/add">
							<Add />
						</Route>
						<Route exact path="/edit/:uuid">
							<Edit />
						</Route>
					</Switch>
            </Router>
			
		</div>
	);
}

export default App;
