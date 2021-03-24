import getMonthlyFilteredTransactionsMap from "./FilterUtility";

test('empty transactions as input', () => {
    const transaction = [];
    const map = new Map();
    expect(getMonthlyFilteredTransactionsMap(transaction)).toBeCalled; // SUCCESS
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


    const map = new Map();
    map.set("11-2020", [{
        id: "TR1",
        amount: 120.00,
        currency: "USD",
        date: "12-11-2020"
    }])
    map.set("12-2020", [{
        id: "TR2",
        amount: 135,
        currency: "USD",
        date: "26-12-2020"
    }])
    expect(getMonthlyFilteredTransactionsMap(transaction)).toMatchObject(map); // SUCCESS
});