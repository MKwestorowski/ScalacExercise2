export default add_item => {
    const initialState = {
        data: [],
    }

    return (state = initialState, action) => {
        switch (action.type) {
            case 'ADD__ITEM':
                return {
                    ...state,
                    data: [...state.data, action.addItem]
                }
            default:
                return state
        }
    }
}