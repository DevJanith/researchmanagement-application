//save login response > (user's name and token) to session storage
export const authenticate = (response) => {
    if (window !== 'undefined') {
        // console.log('authenticate', response) 
        // console.log(response.result)
        // console.log(response.token)

        sessionStorage.setItem('token', JSON.stringify(response.token));
        sessionStorage.setItem('userData', JSON.stringify(response.result));
    }
};

//access access name from session storage
export const getToken = () => {
    if (window !== 'undefined') {
        if (sessionStorage.getItem('token')) {
            return JSON.parse(sessionStorage.getItem('token'));
        }
        else {
            return false;
        }
    }
};

//access user's name from session storage
export const getUser = () => {
    // console.log("first")
    if (window !== 'undefined') {
        if (sessionStorage.getItem('userData')) {
            return JSON.parse(sessionStorage.getItem('userData'));
        }
        else {
            return false;
        }
    }
};


//remove token from session storage
export const logout = next => {
    if (window !== 'undefined') {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('userData');  
    }
    // next();
};