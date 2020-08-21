const initialState = {
    data: []
};

const homeReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'LOADING':
            return {
                ...state,
                data: action.data
            }

        default:
            return state;
    }
}

export default homeReducer;