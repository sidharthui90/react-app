import getMonthlyFilteredTransactionsMap from "./FilterUtility";
import getRewardsByTransaction from "./RewardByTransactionCalculator";

export default function getMonthlyRewardPoints(transactions) {
    var monthlyRewards  = [];
    var monthWiseTransactionMap = getMonthlyFilteredTransactionsMap(transactions);
    console.log(monthWiseTransactionMap);
    monthWiseTransactionMap.forEach((values, key) => {

        var rewardPoints = 0;
        values.map((transaction) => {
            rewardPoints += getRewardsByTransaction(transaction);
            return values;
        })

        console.log(rewardPoints);
        monthlyRewards.push({ "month": key, "rewardPoints": rewardPoints });
        return monthWiseTransactionMap;
    })
    console.log(monthWiseTransactionMap, monthlyRewards);
    return monthlyRewards;
}