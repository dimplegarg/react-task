export const defaultLogin = () => {
    return dispatch => {
        dispatch({ type:"LOGIN" })
    }
}

export const handleApiLogin = (data) => {
    return (dispatch, getState) => {
        console.log(data, getState().LoginReducer);

        if(getState().LoginReducer.email === data.email && getState().LoginReducer.pwd === data.pwd) {
            dispatch({ type:"LOGIN_SUCCESS" })
        } else {
            dispatch({ type:"LOGIN_ERROR" })
        }
    }
}