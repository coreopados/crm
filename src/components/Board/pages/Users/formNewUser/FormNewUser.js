import React from 'react';

import '../../../../../App.css';
import '../../../../Login/login.css';
import Input from "./Input";
import Select from "./Select";
import { addUser } from '../../../../../state/dataTest';
import state from '../../../../../state/dataTest';

class FormNewUser extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            newUser: {
                login: '',
                name: '',
            },
            role: ["role", "role-2", "role-3"],
            team: ["Front-end", "Back-end", "Design"],
            error_login: "",
            error_name: "",
            error_role: "",
            error_team: "",
            // today: ""
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }


    handleInput(e) {
        let value = e.target.value;
        let name = e.target.name;

        let error_login = "";
        let error_name = "";


        this.setState({ error_login, error_name })

        this.setState(
            prevState => ({
                newUser: {
                    ...prevState.newUser,
                    [name]: value
                }
            }),
        );


    }

    validation() {

        let error_login = this.state.error_login = '';
        let error_name = this.state.error_name = '';


        // this.getToday()

        if (this.state.newUser.login === '') {
            error_login = 'enter login'
        }
        if (this.state.newUser.name === '') {
            error_name = 'enter name'
        }



        if (error_login !== '' || error_name !== '') {

            this.setState({ error_login, error_name })

            return false
        }
        return true
    }

    handleFormSubmit(e) {
        e.preventDefault();

        let userData2 = this.state.newUser;
        let idRow = (state.Users.length + 1).toString();
        let numberRow = (state.Users.length + 1).toString();
        userData2.number = numberRow;
        userData2.id = idRow;

        const isValid = this.validation();

        if (isValid) {

            addUser(userData2);
            this.props.onClose(false);
            this.setState({
                newUser: {
                    login: '',
                    name: '',
                    role: "role",
                    team: "Front-end"
                },

                error_login: "",
                error_name: "",
            })
        }
    }


    render() {
        // this.getToday()
        let Modal = (
            <div className="modalOverlay">
                <div className="login-form new-order-form" >
                    <button className="close-modal" onClick={(this.props.onClose)}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 329.26933 329" width="20px"><path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0" /></svg>
                    </button>

                    <h4>Add new user</h4>

                    <form onSubmit={this.handleFormSubmit}>


                        <label>
                            <p>Login</p>
                            <Input className={this.state.error_login && 'error-field'} value={this.state.newUser.login || ''} onChange={this.handleInput} type={'text'} name={"login"} />
                            <p className='new-order-error'>{this.state.error_login}</p>
                        </label>
                        <label>
                            <p>Name</p>
                            <Input className={this.state.error_name && 'error-field'} value={this.state.newUser.name || ''} onChange={this.handleInput} type={'text'} name={"name"} />
                            <p className='new-order-error'>{this.state.error_name}</p>
                        </label>
                        <label>
                            <p>Role</p>
                            <Select type={'text'} name={'role'} options={this.state.role} value={this.state.newUser.role || ''} handleChange={this.handleInput} />
                        </label>
                        <label>
                            <p>Team</p>
                            <Select type={'text'} name={'team'} options={this.state.team} value={this.state.newUser.team || ''} handleChange={this.handleInput} />
                        </label>

                        <label >
                            <p></p>
                            <input className="login-button" type="submit" value='Add client' />
                        </label>

                    </form>
                </div>
            </div>
        )
        if (!this.props.isOpen) {
            Modal = null
        }
        return (
            <div className="wrap_popup">

                {Modal}

            </div>
        )
    }
}



export default FormNewUser;
