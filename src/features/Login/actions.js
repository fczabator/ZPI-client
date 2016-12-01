export const LOG_IN = 'LOG_IN';
export const LOGGED_IN = 'LOGGED_IN';
export const LOG_OUT = 'LOG_OUT';
export const LOGGED_OUT = 'LOGGED_OUT';

export const logIn = (username, password) => ({type: LOG_IN, username, password});

export const loggedIn = (user) => ({type: LOGGED_IN, user});

export const logOut = () => ({type: LOG_OUT});

export const loggedOut = () => ({type: LOGGED_OUT});