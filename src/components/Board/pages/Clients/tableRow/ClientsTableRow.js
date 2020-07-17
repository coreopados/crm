import React from 'react';
import '../../../../../App.css';


class ClientsTableRow extends React.Component {

    // function SalesTableRow() {
    render() {

        return (

            <div className="row-table" onDoubleClick={e => { console.log(this.props.id) }}>
                <div className="col-value id">{this.props.id}</div>
                <div className="col-value">{this.props.number}</div>
                <div className="col-value">{this.props.name}</div>
                <div className="col-value">{this.props.company}</div>
                <div className="col-value">{this.props.mail}</div>
                <div className="col-value">{this.props.skype}</div>
                <div className="col-value">{this.props.telegram}</div>
                <div className="col-value">{this.props.whatsapp}</div>
                <div className="col-value">{this.props.phone}</div>

            </div>

        );
    }
}

export default ClientsTableRow;
