import getMonthlyRewardPoints from "./RewardCalculator";

test('empty transactions as input', () => {
    const transaction= [];
    expect(getMonthlyRewardPoints(transaction)).toBeCalled; // SUCCESS
});

test('non empty transactions as input', () => {
    const transaction = [{
        id: "TR1",
        amount: 120.00,
        currency: "USD",
        date: "12-11-2020"
    }, {
        id: "TR2",
        amount: 135,
        currency: "USD",
        date: "26-12-2020"
    }];
    var monthlyRewards= [];
    monthlyRewards.push({ "month": "11-2020", "rewardPoints": 90 });
    monthlyRewards.push({ "month": "12-2020", "rewardPoints": 120 });
    expect(getMonthlyRewardPoints(transaction)).toMatchObject(monthlyRewards); // SUCCESS
});