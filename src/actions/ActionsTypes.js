export const FETCH_PRODUCTS_PENDING = 'FETCH_PRODUCTS_PENDING';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';
export const FETCH_TRANSACTIONS_PENDING = 'FETCH_TRANSACTIONS_PENDING';
export const FETCH_TRANSACTIONS_SUCCESS = 'FETCH_TRANSACTIONS_SUCCESS';
export const FETCH_TRANSACTIONS_ERROR = 'FETCH_TRANSACTIONS_ERROR';
export const POST_TRANSACTIONS_PENDING = 'POST_TRANSACTIONS_PENDING';
export const POST_TRANSACTIONS_SUCCESS = 'POST_TRANSACTIONS_SUCCESS';
export const POST_TRANSACTIONS_ERROR = 'POST_TRANSACTIONS_ERROR';

export function fetchProductsPending() {
    return {
        type: FETCH_PRODUCTS_PENDING
    }
}

export function fetchProductsSuccess(products) {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        products: products
    }
}

export function fetchProductsError(error) {
    return {
        type: FETCH_PRODUCTS_ERROR,
        error: error
    }
}
export function fetchTransactionsPending() {
    return {
        type: FETCH_TRANSACTIONS_PENDING
    }
}

export function fetchTransactionsSuccess(transactions) {
    return {
        type: FETCH_TRANSACTIONS_SUCCESS,
        transactions: transactions
    }
}

export function fetchTransactionsError(error) {
    return {
        type: FETCH_TRANSACTIONS_ERROR,
        error: error
    }
}
export function postTransactionsPending() {
    return {
        type: POST_TRANSACTIONS_PENDING
    }
}

export function postTransactionsSuccess(transactions) {
    return {
        type: POST_TRANSACTIONS_SUCCESS,
        transactions: transactions
    }
}

export function postTransactionsError(error) {
    return {
        type: POST_TRANSACTIONS_ERROR,
        error: error
    }
}
