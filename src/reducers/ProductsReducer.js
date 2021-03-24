import {FETCH_PRODUCTS_PENDING, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR} from '../actions/ActionsTypes';

export const initialState = {
    pending: false,
    products: [],
    error: null
}

export default function productsReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_PRODUCTS_PENDING: 
            return {
                ...state,
                pending: true
            }
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                pending: false,
                products: action.products
            }
        case FETCH_PRODUCTS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}

export const getProducts = state => state.products;
export const getProductsPending = state => state.pending;
export const getProductsError = state => state.error;



// import { FETCH_PRODUCTS_LOADING, FETCH_PRODUCTS_SUCCESS, FETCH_TRANSACTIONS_FAIL, FETCH_TRANSACTIONS_LOADING, FETCH_TRANSACTIONS_SUCCESS, FETCH_USER_SUCCESS, ProductDetails, TransactionDetails, TransactionDispatchTypes, UserDetails } from "../actions/ActionsTypes";
// import { MonthlyRewards } from "../actions/MonthlyRewards";


// interface DefaultStateI {
//   loading: boolean,
//   transaction?: TransactionDetails,
//   user?: UserDetails,
//   monthlyRewards?: MonthlyRewards,
//   product?: ProductDetails
// }

// const defaultState: DefaultStateI = {
//   loading: false,
// };
// const TransactionReducer = (state: DefaultStateI = defaultState, action: TransactionDispatchTypes): DefaultStateI => {
//   switch (action.type) {
//     case FETCH_TRANSACTIONS_FAIL:
//       return {
//         ...state,
//         loading: false
//       }
//     case FETCH_TRANSACTIONS_LOADING:
//       return {
//         ...state,
//         loading: true
//       }
//     case FETCH_TRANSACTIONS_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         transaction: action.payload
//       }
//     case FETCH_USER_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         user: action.payload
//       }
//     case FETCH_PRODUCTS_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         product: action.payload
//       }
//       case FETCH_PRODUCTS_LOADING:
//       return {
//         ...state,
//         loading: true
//       }
//     default:
//       return state
//   }
// };

// export { TransactionReducer };
