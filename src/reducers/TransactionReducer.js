import {FETCH_TRANSACTIONS_PENDING, FETCH_TRANSACTIONS_SUCCESS, FETCH_TRANSACTIONS_ERROR, POST_TRANSACTIONS_SUCCESS} from '../actions/ActionsTypes';

export const initialState = {
    pending: false,
    transactions: [],
    error: null
}

export default function transactionReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_TRANSACTIONS_PENDING: 
            return {
                ...state,
                pending: true
            }
        case FETCH_TRANSACTIONS_SUCCESS:
            return {
                ...state,
                pending: false,
                transactions: action.transactions
            }
        case FETCH_TRANSACTIONS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        case POST_TRANSACTIONS_SUCCESS:
            return{
                ...state,
                pending:false,
            }
        default: 
            return state;
    }
}

export const getTransactions = state => state.transactions;
export const getTransactionsPending = state => state.pending;
export const getTransactionsError = state => state.error;