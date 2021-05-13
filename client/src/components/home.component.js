import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';


export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            email: '',
            password: ''
            //date: Date.now
        }
         //bind changes
        this.changeUsername = this.changeUsername.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    changeUsername(event) {
        this.setState({
            username:event.target.value
        })
    }
    changeEmail(event) {
        this.setState({
            email:event.target.value
        })
    }
    changePassword(event) {
        this.setState({
            password:event.target.value
        })
    }

    onSubmit(event) {
        event.preventDefault();

        const registeredUser = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        };
       
        axios.post('http://localhost:5000/users/add', registeredUser)
            .then(res => {
                console.log(res.data)
                console.log('Posted to users/add')
            });

        // change the location back to exercises
        //window.location = '/exercises';
    }
    
    render() {
        return (
            <div>
                <div className='container'>
                    <div className="form-div">
                        <form onSubmit={this.onSubmit}>
                            <input
                                type="text"
                                onChange={this.changeUsername}
                                value={this.state.username}
                                className="form-control form-group"
                            />
                            <input 
                                type ="text"
                                placeholder = "Email"
                                onChange ={this.changeEmail}
                                value = {this.state.email}
                                className = "form-control form-group"
                            />
                            <input 
                                type="password"
                                placeholder = "Password"
                                onChange = {this.changePassword}
                                value = {this.state.password}
                                className = "form-control form-group"
                            />
                            <input 
                                type="submit"
                                className="btn btn-primary btn-block"
                                value="Submit"
                            />

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}