
export default function getMonthlyFilteredTransactionsMap(transactions) {
    let monthWiseTransactionMap = new Map();
    console.log(transactions)
    transactions?.map((transaction) => {
        let monthYear = transaction.date.substring(3);
        if (monthWiseTransactionMap.has(monthYear)) {
            var curTrans = monthWiseTransactionMap.get(monthYear);
            curTrans.push(transaction);
            monthWiseTransactionMap.set(monthYear, curTrans);
        }
        else {
            monthWiseTransactionMap.set(monthYear, new Array(transaction));
        }
        return transactions;
    });
    return monthWiseTransactionMap;
}