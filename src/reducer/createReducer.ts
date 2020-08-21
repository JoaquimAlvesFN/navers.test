const initialState = {
    name: '',
    birthdate: '',
    project: '',
    job_role: '',
    admission_date: '',
    url: ''
};

const createReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'NAME':
            return {...state, name: action.name}

        case 'BIRTHDATE':
            return {...state, birthdate: action.birthdate}
        
        case 'PROJECT':
            return {...state, project: action.project}

        case 'JOB_ROLE':
            return {...state, job_role: action.job_role}

        case 'ADMISSION_DATE':
            return {...state, admission_date: action.admission_date}
        
        case 'URL':
            return {...state, url: action.url}

        default:
            return state;
    }
}

export default createReducer;