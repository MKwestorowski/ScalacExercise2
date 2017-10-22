export default add_item => {
    const initialState = {
        data: [],
    }

    return (state = initialState, action) => {
        console.log(action)
        switch (action.type) {
            case 'CLEAR__STORE':
                return {
                    ...state,
                    data: undefined
                }
            case 'ADD__ITEM':
                return {
                    ...state,
                    data: [...state.data, action.data]
                }
            default:
                return state
        }
    }
}