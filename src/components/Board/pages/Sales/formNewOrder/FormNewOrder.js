import React from 'react';

import '../../../../../App.css';
import '../../../../Login/login.css';
import Input from "./Input";
import Select from "./Select";

class FormNewOrder extends React.Component {

    constructor(props) {
        super(props);



        this.state = {

            newOrder: {

            },
            type: ['Front-end', 'Back-end', 'Design'],
            sources: ['Site', 'Friend', 'Client'],
            status: ['Complete', 'In progress'],


        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.addRowData = this.addRowData.bind(this);



    }


    handleInput(e) {
        let value = e.target.value;
        let name = e.target.name;
        this.setState(
            prevState => ({
                newOrder: {
                    ...prevState.newOrder,
                    [name]: value
                }
            }),
            // () => console.log(this.state.newOrder),

            // () => localStorage.setItem('rows', JSON.stringify(this.state.newOrder))
        );


    }



    handleFormSubmit(e) {
        e.preventDefault();

        let userData = this.state.newOrder;

        // console.log(userData)

        fetch('example.com', {
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(response => {
            response.json().then(data => {
                console.log("Successful" + data);
            })
        })
    }

    handleClearForm(e) {
        e.preventDefault();
        this.setState({
            newOrder: {

            },
        })
    }


    addRowData(e) {
        let userData2 = this.state.newOrder;
        let idRow = (this.props.appState.dataTest.length + 1).toString();
        let numberRow = (this.props.appState.dataTest.length + 1).toString();
        userData2.number = numberRow;
        userData2.id = idRow;

        this.props.addRow(userData2);
        this.props.onClose(false);

        this.state.newOrder = {}
    }


    render() {

        let Modal = (
            <div className="modalOverlay">
                <div className="login-form new-order-form" >
                    <button className="close-modal" onClick={(this.props.onClose)}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 329.26933 329" width="20px"><path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0" /></svg>
                    </button>

                    <h4>Add new order</h4>

                    <form onSubmit={this.handleFormSubmit}>

                        <label>
                            <p>Project Name</p>
                            <Input value={this.state.newOrder.project_name || ''} handleChange={this.handleInput} type={'text'} name={"project_name"} />
                        </label>

                        <label>
                            <p>Type of work</p>
                            <Select type={'text'} name={'type_work'} options={this.state.type} handleChange={this.handleInput} />
                        </label>

                        <label>
                            <p>Date start</p>
                            <Input handleChange={this.handleInput} type={'date'} name={"date_start"} />
                        </label>

                        <label>
                            <p>Date finish</p>
                            <Input handleChange={this.handleInput} type={'date'} name={"date_finish"} />
                        </label>

                        <label className="commentLabel">
                            <p>Commentary</p>
                            <Input value={this.state.newOrder.commentary || ''} handleChange={this.handleInput} name={"commentary"} />
                        </label>

                        <label>
                            <p>Paid</p>
                            <Input value={this.state.newOrder.paid || ''} handleChange={this.handleInput} type={'number'} name={"paid"} />
                        </label>

                        <label>
                            <p>Cost</p>
                            <Input value={this.state.newOrder.cost || ''} handleChange={this.handleInput} type={'number'} name={"cost"} />
                        </label>

                        <label>
                            <p>Source</p>
                            <Select type={'text'} name={'source'} options={this.state.sources} value={this.state.newOrder.source || ''} handleChange={this.handleInput} />
                        </label>

                        <label>
                            <p>Status</p>
                            <Select type={'text'} name={'status'} options={this.state.status} value={this.state.newOrder.status || ''} handleChange={this.handleInput} />
                        </label>

                        <label >
                            <p></p>
                            <input className="login-button" type="submit" value='Add order' onClick={this.addRowData} />
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



export default FormNewOrder;
