export default add_item => {
    const initialState = {
        data: [],
    }

    return (state = initialState, action) => {
        switch (action.type) {
            case `ADD_ITEM`:
                return {
                    ...state,
                    data: null
                }
            default:
                return state
        }
    }
}