import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTransactions } from '../../actions/ActionsCreators';
import { getTransactions, getTransactionsError, getTransactionsPending } from '../../reducers/TransactionReducer';
import getMonthlyRewardPoints from '../../Utility/RewardCalculator';
import "./index.css";



class RewardsView extends Component {
    constructor(props) {
        super(props);
        this.state = { monthlyReward: [], totalRewardPoints: 0 };
        this.shouldComponentRender = this.shouldComponentRender.bind(this);
    }

    componentWillMount() {
        const { fetchTransaction } = this.props;
        fetchTransaction();


    }
    componentDidMount() {
        let monthlyRewards = getMonthlyRewardPoints(this.props.transactions.transactions);
        this.setState({ monthlyRewards: monthlyRewards });
        let totalRewardPoints = 0;
        monthlyRewards.map((monthlyreward) => {
            totalRewardPoints += monthlyreward.rewardPoints;
            return monthlyRewards;
        })
        this.setState({ monthlyRewards: monthlyRewards, totalRewardPoints: totalRewardPoints });
    }

    shouldComponentRender() {
        if (this.pending === false) return false;
        return true;
    }

    render() {
        let monthlyRewards = getMonthlyRewardPoints(this.props.transactions.transactions);
        let totalRewardPoints = 0;
        monthlyRewards.map((monthlyreward) => {
            totalRewardPoints += monthlyreward.rewardPoints;
            return monthlyRewards;
        })
        if (!this.shouldComponentRender()) return <div>Page is Loading</div>
        return (
            <div>
                <div style={{ textAlign: "left", margin: "4%" }} >
                    <table >
                        <tbody>
                            <tr>
                                <th>Month-Year</th>
                                <th>Reward Points</th>
                            </tr>
                            {monthlyRewards?.map((monthlyreward) => (
                                <tr key={monthlyreward.month}>
                                    <td>{monthlyreward.month}</td>
                                    <td>{monthlyreward.rewardPoints}</td>
                                </tr>
                            ))}
                            <tr>
                                <th>Total Reward Points Earned</th>
                                <th>{totalRewardPoints}</th>
                            </tr>
                        </tbody>
                    </table>

                </div></div>)
    }
}


const mapStateToProps = state => ({
    error: getTransactionsError(state),
    transactions: getTransactions(state),
    pending: getTransactionsPending(state),
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchTransaction: fetchTransactions,
    getMonthlyRewardPoints: getMonthlyRewardPoints
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RewardsView);
