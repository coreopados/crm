import React from 'react';
import '../../../../../App.css';


class DashBoardBlock extends React.Component {

    // function SalesTableRow() {
    render() {
        return (
            <div className="row-grid-4__block">
                <div className="icon-wrap">

                </div>
                <div className="stat-wrap">
                    <p className="label-number">{this.props.number}</p>
                    <p className="label-stat-name">{this.props.title}</p>
                </div>
            </div>
        );
    }
}

export default DashBoardBlock;
