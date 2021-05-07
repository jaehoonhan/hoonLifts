import React, {Component} from 'react';

export default class CreateUsers extends Component {
    constructor(props) {
        super(props);
        // behind 'this' to each change state function
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        // set initial state and properties
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
        // prevent default HTML submit behaviour
        e.preventDefault();

        const user = {
            username: this.state.username,
        };
        // for testing
        console.log(user);

        this.setState({
            // for testing
            username: ''
        })
    }

    render() {
        return (
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