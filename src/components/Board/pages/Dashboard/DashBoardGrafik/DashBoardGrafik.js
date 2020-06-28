import React from 'react';
import '../../../../../App.css';


class DashBoardGrafik extends React.Component {

    // function SalesTableRow() {
    render() {

       
        return (

            <div className='chart-col'>
                <span style={{ height: this.props.applied + "px" }} className='violet chart-line chart-applied'></span>
                <span style={{ height: this.props.left + "px" }} className='orange chart-line chart-left' ></span>
                <span>{this.props.mounth}</span>
            </div >
        );
    }
}

export default DashBoardGrafik;
