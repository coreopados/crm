import React from 'react';

import '../../../../../App.css';
import '../../../../Login/login.css';
import Input from "./Input";
import Select from "./Select";
import { addClient } from '../../../../../state/dataTest';
import state from '../../../../../state/dataTest';

class FormNewClient extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            newClient: {
                name: '',
                company: '',
                mail: '',
                skype: '',
                telegram: '',
                whatsapp: '',
                phone: '',
            },

            error_name: "",
            error_company: "",
            error_mail: "",
            error_skype: "",
            error_telegram: "",
            error_whatsapp: "",
            error_phone: "",
            // today: ""
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }


    handleInput(e) {
        let value = e.target.value;
        let name = e.target.name;

        let error_name = "";
        let error_company = "";
        let error_skype = "";
        let error_mail = "";
        let error_telegram = "";
        let error_whatsapp = "";
        let error_phone = "";

        this.setState({ error_name, error_company, error_skype, error_mail, error_telegram, error_whatsapp, error_phone })

        this.setState(
            prevState => ({
                newClient: {
                    ...prevState.newClient,
                    [name]: value
                }
            }),
        );


    }

    validation() {
        let error_name = this.state.error_name = '';
        let error_company = this.state.error_company = '';
        let error_skype = this.state.error_skype = '';
        let error_mail = this.state.error_mail = '';
        let error_telegram = this.state.error_telegram = '';
        let error_whatsapp = this.state.error_whatsapp = '';
        let error_phone = this.state.error_phone = '';

        // this.getToday()

        if (this.state.newClient.name === '') {
            error_name = 'enter name project'
        }
        if (this.state.newClient.company === '') {
            error_company = 'enter company'
        }
        if (this.state.newClient.skype === '') {
            error_skype = 'enter skype'
        }
        if (this.state.newClient.mail === '') {
            error_mail = 'enter mail'
        }
        if (this.state.newClient.telegram === '') {
            error_telegram = 'enter telegram'
        }
        if (this.state.newClient.whatsapp === '') {
            error_whatsapp = 'enter whatsapp'
        }
        if (this.state.newClient.phone === '') {
            error_phone = 'enter phone'
        }

        if (error_name !== '' || error_company !== '' || error_skype !== '' || error_mail !== '' || error_telegram !== '' || error_whatsapp !== '' || error_phone !== '') {

            this.setState({ error_name, error_company, error_skype, error_mail, error_telegram, error_whatsapp, error_phone })

            return false
        }
        return true
    }

    handleFormSubmit(e) {
        e.preventDefault();

        let userData2 = this.state.newClient;
        let idRow = (state.Clients.length + 1).toString();
        let numberRow = (state.Clients.length + 1).toString();
        userData2.number = numberRow;
        userData2.id = idRow;

        const isValid = this.validation();

        if (isValid) {

            addClient(userData2);
            this.props.onClose(false);
            this.setState({
                newClient: {
                    name: '',
                    company: '',
                    skype: '',
                    mail: '',
                    telegram: '',
                    whatsapp: '',
                    phone: '',
                },
                error_name: "",
                error_company: "",
                error_skype: "",
                error_mail: "",
                error_telegram: "",
                error_whatsapp: "",
                error_phone: "",
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

                    <h4>Add new client</h4>

                    <form onSubmit={this.handleFormSubmit}>

                        <label>
                            <p>Name</p>
                            <Input className={this.state.error_name && 'error-field'} value={this.state.newClient.name || ''} onChange={this.handleInput} type={'text'} name={"name"} />
                            <p className='new-order-error'>{this.state.error_name}</p>
                        </label>

                        <label>
                            <p>Company</p>
                            <Input className={this.state.error_company && 'error-field'} value={this.state.newClient.company || ''} onChange={this.handleInput} type={'text'} name={"company"} />
                            <p className='new-order-error'>{this.state.error_name}</p>
                        </label>

                        <label>
                            <p>Mail</p>
                            <Input className={this.state.error_mail && 'error-field'} value={this.state.newClient.mail || ''} onChange={this.handleInput} type={'email'} name={"mail"} />
                            <p className='new-order-error'>{this.state.error_mail}</p>
                        </label>

                        <label>
                            <p>Skype</p>
                            <Input className={this.state.error_skype && 'error-field'} value={this.state.newClient.skype || ''} onChange={this.handleInput} type={'text'} name={"skype"} />
                            <p className='new-order-error'>{this.state.error_name}</p>
                        </label>

                        <label>
                            <p>Telegram</p>
                            <Input className={this.state.error_telegram && 'error-field'} value={this.state.newClient.telegram || ''} onChange={this.handleInput} type={'text'} name={"telegram"} />
                            <p className='new-order-error'>{this.state.error_telegram}</p>
                        </label>

                        <label>
                            <p>WhatsApp</p>
                            <Input className={this.state.error_whatsapp && 'error-field'} value={this.state.newClient.whatsapp || ''} onChange={this.handleInput} type={'text'} name={"whatsapp"} />
                            <p className='new-order-error'>{this.state.error_whatsapp}</p>
                        </label>

                        <label>
                            <p>Phone</p>
                            <Input className={this.state.error_phone && 'error-field'} value={this.state.newClient.phone || ''} onChange={this.handleInput} type={'text'} name={"phone"} />
                            <p className='new-order-error'>{this.state.error_phone}</p>
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



export default FormNewClient;
