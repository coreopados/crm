import React from 'react';
import '../../../../App.css';
import SalesTableRow from './tableRow/SalesTableRow';
import FormNewOrder from './formNewOrder/FormNewOrder';
import state from '../../../../state/dataTest';
import { remove } from '../../../../state/dataTest';


class Sales extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            updateOrder: false,
            remove: remove,
            appState: state.dataTest,
            currentId: '',
            editRow: {}
        }
    }



    handeleEdit = (id) => {
        const remainder = this.state.appState.filter((todo) => {
            if (todo.id == (id + 1)) return todo;
        })
        this.setState({ editRow: remainder[0], isOpen: true, updateOrder: true, currentId: (id + 1) });
    }



    render() {

        return (
            <div className="wrap-board" >

                {/* edit block */}
                <FormNewOrder appState={this.state.appState} currentId={this.state.currentId} edit={this.state.editRow} update={this.state.updateOrder} infoToPopup={this.props.tableInfo} isOpen={this.state.isOpen} onClose={() => this.setState({ isOpen: false, updateOrder: false })} />


                <div className="row" >
                    <div className="title-wrap">
                        <h3 className="title">Sales</h3>

                    </div>

                    <div className="edit-block">
                        <button className="button violet add-order" onClick={(e) => this.setState({ isOpen: true })}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 9.14286H9.14286V16H6.85714V9.14286H0V6.85714H6.85714V0H9.14286V6.85714H16V9.14286Z" fill="white" />
                            </svg>
                        New order
                    </button>
                    </div>
                </div >

                {/* table */}
                <div className="sales-table" >
                    <div className="row-head">
                        <div className="row-table">
                            <div className="col-name">ID</div>
                            <div className="col-name">№</div>
                            <div className="col-name">Project name</div>
                            <div className="col-name">Type of work</div>
                            <div className="col-name">Commentary</div>
                            <div className="col-name">Client</div>
                            <div className="col-name">Source</div>
                            <div className="col-name">Date start</div>
                            <div className="col-name">Date finish</div>
                            <div className="col-name">Payment</div>
                            <div className="col-name">Paid</div>
                            <div className="col-name">Cost</div>
                            <div className="col-name">Status</div>
                        </div>
                    </div>

                    <div className="row-body">
                        {
                            this.state.appState.map((item, index) => {
                                return <SalesTableRow
                                    key={index}
                                    id={item.id}
                                    number={index + 1}
                                    project_name={item.project_name}
                                    type_work={item.type_work}
                                    date_start={item.date_start}
                                    date_finish={item.date_finish}
                                    commentary={item.commentary}
                                    paid={item.paid}
                                    cost={item.cost}
                                    source={item.source}
                                    status={item.status}
                                    client={item.client}
                                    payment={item.payment}
                                    updateOrder={this.state.updateOrder}
                                    openModal={(e) => this.setState({ isOpen: true, updateOrder: true })}

                                    remove={this.state.remove}
                                    edit={this.handeleEdit.bind(this, index)}
                                />

                            })
                        }

                    </div>
                </div>

            </div>

        );
    }
}

export default Sales;
