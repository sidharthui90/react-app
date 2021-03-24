
import { fetchProductsError, fetchProductsPending, fetchProductsSuccess, fetchTransactionsError, fetchTransactionsPending, fetchTransactionsSuccess } from '../actions/ActionsTypes';

function fetchProducts() {
    return async dispatch => {
        let products = [];
        dispatch(fetchProductsPending());
        await fetch("https://rewards-app-5d770-default-rtdb.firebaseio.com/products.json")
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                Object.keys(res).map(id => {
                    products.push(res[id]);
                    return Object.keys(res);
                })
                console.log(products)
                dispatch(fetchProductsSuccess(products));
                return products;
            })
            .catch(error => {
                dispatch(fetchProductsError(error));
            })
    }
}

export default fetchProducts;

export function fetchTransactions() {
    console.log("Ok");
    return async dispatch => {
        let transactions = [];
        dispatch(fetchTransactionsPending());
        await fetch("https://rewards-app-5d770-default-rtdb.firebaseio.com/transactions.json")
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                Object.keys(res).map(id => {
                    transactions.push(res[id]);
                    return Object.keys(res);
                })
                console.log(transactions)
                dispatch(fetchTransactionsSuccess(transactions));
                return transactions;
            })
            .catch(error => {
                dispatch(fetchTransactionsError(error));
            })
    }
}
export function postTransaction(transaction) {
    console.log("Here");
    console.log(transaction)
    const data = JSON.stringify(transaction);
    fetch("https://rewards-app-5d770-default-rtdb.firebaseio.com/transactions.json", {
        method: 'POST',
        body: data
    }).then(res => res.json())
        .then(res => {
            console.log(res);
            if (res.error) {
                throw (res.error);
            }
            fetchTransactions();
        })
        .catch(error => {
            console.log(error)
        })
}
