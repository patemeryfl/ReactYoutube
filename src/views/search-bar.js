import React, { Component } from 'react'

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: ''
		};
	}
	render() {
		return(
				<div>
					<nav className="navbar navbar-inverse">
						<div className="container-fluid">
							<div className="navbar-header">
								<a className="navbar-brand" href="">React Youtube</a>
							</div>
							<form className="navbar-form navbar-left">
								<div className="form-group">
										<input
												type="text" className="form-control" placeholder="Search"
												onChange={e => this.setState({ term: e.target.value })} />
								</div>
								<button type="submit" className="btn btn-default">Submit</button>
							</form>
						</div>
					</nav>
				</div>
	);
	}
}

export default SearchBar;