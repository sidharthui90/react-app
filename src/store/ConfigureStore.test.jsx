import thunk from "redux-thunk";

const create = () => {
    const store = {
        getState: jest.fn(() => ({})),
        dispatch: jest.fn()
    }
    const next = jest.fn()

    const invoke = (action) => thunk(store)(next)(action)

    return { store, next, invoke }
}
it('passes through non-function action', () => {
    const { next, invoke } = create()
    const action = { type: 'FETCH_TRANSACTIONS_SUCCESS' }
    invoke(action)
    expect(next).toHaveBeenCalledWith(action)
})

it('calls the function', () => {
    const { invoke } = create()
    const fn = jest.fn()
    invoke(fn)
    expect(fn).toHaveBeenCalled()
})
