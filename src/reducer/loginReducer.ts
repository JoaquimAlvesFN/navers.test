const initialState = {
    email: '',
    password: '',
};

const loginReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'EMAIL':
            return {
                ...state,
                email: action.email
            }

        case 'PASSWORD':
            return {
                ...state,
                password: action.password
            }
        default:
            return state;
    }
}

export default loginReducer;