import React from 'react';
import '../../../../../App.css';


class UsersTableRow extends React.Component {

    // function SalesTableRow() {
    render() {

        return (

            <div className="row-table" onDoubleClick={e => { console.log(this.props.id) }}>
                <div className="col-value id">{this.props.id}</div>
                <div className="col-value">{this.props.login}</div>
                <div className="col-value">{this.props.name}</div>
                <div className="col-value">{this.props.role}</div>
                <div className="col-value">{this.props.team}</div>

            </div>

        );
    }
}

export default UsersTableRow;
