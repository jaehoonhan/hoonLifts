import React, {Component} from 'react';
import axios from 'axios';

export default class CreateUsers extends Component {
    constructor(props) {
        super(props);
        // Bind 'this' to each change state function
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        // Set initial state and properties
        this.state = {
            //for testing
            username: '',
        }
    }
    
    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }
    
    onSubmit(e) {
        // Prevent default HTML submit behaviour
        e.preventDefault();

        const user = {
            username: this.state.username,
        };
        // for testing
        console.log(user);
        // Make a post request to the server with the new user
        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data));
             

        this.setState({
            // for testing
            username: ''
        })
    }

    render() {
        return (
        // submit form
        <div>
            <h3>Create New User</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group"> 
                <label>Username: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    />
              </div>
              <div className="form-group">
                <input type="submit" value="Create User" className="btn btn-primary" />
              </div>
            </form>
        </div>
        )
    }
}