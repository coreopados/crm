import React from 'react';
import '../../../../../App';


class SalesTableRow extends React.Component {

    render() {

        return (

            <div className="row-table" onDoubleClick={this.props.openModal} >
                <div className="col-value id">{this.props.id}</div>
                <div className="col-value">{this.props.number}</div>
                <div className="col-value">{this.props.project_name}</div>
                <div className="col-value">{this.props.type_work}</div>
                <div className="col-value">{this.props.commentary}</div>
                <div className="col-value">{this.props.client}</div>
                <div className="col-value">{this.props.source}</div>
                <div className="col-value">{this.props.date_start}</div>
                <div className="col-value">{this.props.date_finish}</div>
                <div className="col-value">{this.props.payment}</div>
                <div className="col-value">{this.props.paid}</div>
                <div className="col-value">{this.props.cost}</div>
                <div className="col-value">{this.props.status}</div>
                <button onClick={() => this.props.edit(this.props.id)} className="updateButton"><i className="fas fa-sync-alt"></i></button>
                <button onClick={() => this.props.remove(this.props.id)} className="removeButton"><i className="fa fa-trash" aria-hidden="true"></i></button>
            </div >

        );
    }
}

export default SalesTableRow;
