import { NON_REWARDABLE_TILL } from "../Constants";

export default function getRewardsByTransaction(transaction) {
    var rewardPoints = 0;
    var rewardableAmount = transaction.amount - NON_REWARDABLE_TILL;
    if (rewardableAmount >= NON_REWARDABLE_TILL) {
        rewardPoints += NON_REWARDABLE_TILL;
        rewardPoints = rewardPoints + (2 * (rewardableAmount - NON_REWARDABLE_TILL));
    }
    else if (rewardableAmount > 0) {
        rewardPoints += rewardableAmount;
    }
    console.log(rewardPoints);
    return rewardPoints;
}