import React from 'react';
import '../../../../../App.css';


class SalesTableRow extends React.Component {

    // function SalesTableRow() {
    render() {

        return (

            <div className="row-table">
                <div className="col-value id">{this.props.id}</div>
                <div className="col-value">{this.props.number}</div>
                <div className="col-value">{this.props.project_name}</div>
                <div className="col-value">{this.props.type_work}</div>
                <div className="col-value">{this.props.date_start}</div>
                <div className="col-value">{this.props.date_finish}</div>
                <div className="col-value">{this.props.commentary}</div>
                <div className="col-value">{this.props.paid}</div>
                <div className="col-value">{this.props.cost}</div>
                <div className="col-value">{this.props.source}</div>
                <div className="col-value">{this.props.status}</div>
            </div>

        );
    }
}

export default SalesTableRow;
