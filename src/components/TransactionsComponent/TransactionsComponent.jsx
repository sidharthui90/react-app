import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTransactions, postTransaction } from '../../actions/ActionsCreators';
import { getTransactions, getTransactionsError, getTransactionsPending } from '../../reducers/TransactionReducer';
import "./index.css";



class TransactionView extends Component {
    constructor(props) {
        super(props);
        this.state = { amount: "", date: "", btnActive: false };
        this.shouldComponentRender = this.shouldComponentRender.bind(this);
    }

    componentWillMount() {
        const { fetchTransaction } = this.props;
        fetchTransaction();
    }

    shouldComponentRender() {
        if (this.pending === false) return false;
        return true;
    }
    handleSubmit = (() => {
        if (this.state.amount !== "" && this.state.date !== "" && this.state.date.indexOf("-") !== -1) {
            postTransaction({ id: "TR" + Math.floor(Math.random() * 1000), date: this.state.date, amount: parseFloat(this.state.amount), currency: "USD" });
            this.setState({btnActive:false});
        }
        this.props.fetchTransaction();
        this.setState({ date: "", amount: "" });
    })
    handleDateChange = (event => {
        this.setState({ date: event.target.value });
    });
    handleAmountChange = ((event) => {
        this.setState({ amount: event.target.value });
    })

    render() {
        const { transactions } = this.props;

        if (!this.shouldComponentRender()) return <div>Page is Loading</div>
        console.log(transactions);
        return (
            <div>
                <div style={{ textAlign: "left", margin: "4%" }} >
                    <table>
                        <tbody>
                            <tr>
                                <th>Transaction ID</th>
                                <th>Transaction Date</th>
                                <th>Currency</th>
                                <th>Amount</th>
                            </tr>
                            {transactions?.transactions.map((transaction) => (
                                <tr key={transaction.id}>
                                    <td>{transaction.id}</td>
                                    <td>{transaction.date}</td>
                                    <td>{transaction.currency}</td>
                                    <td>{transaction.amount}</td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {this.state.btnActive ?
                        <>
                            <button id="myBtn"
                                onClick={() => { this.handleSubmit() }}>Submit New Transaction</button>
                            <div className="form-group">
                                <label >Transaction Date</label>
                                <input type="text" className="form-control" value={this.state.date} onChange={this.handleDateChange} placeholder="Enter The Transaction" />
                                <small id="emailHelp" className="form-text text-muted">In dd-mm-yyyy format</small>
                            </div>
                            <div className="form-group">
                                <label >Amount in USD</label>
                                <input type="text" value={this.state.amount} onChange={this.handleAmountChange} className="form-control" placeholder="Amount" />
                            </div>
                        </>
                        : <>
                            <button id="myBtn"
                                onClick={() => this.setState({ btnActive: true })}>Add New Transaction</button>
                        </>}

                </div></div>)
    }
}


const mapStateToProps = state => ({
    error: getTransactionsError(state),
    transactions: getTransactions(state),
    pending: getTransactionsPending(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchTransaction: fetchTransactions
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TransactionView);