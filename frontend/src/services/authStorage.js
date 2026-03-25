const TOKEN_STORAGE_KEY = 'authToken';

export const saveAuthToken = (token) => {
    localStorage.setItem(TOKEN_STORAGE_KEY, token);
};

export const getAuthToken = () => {
    return localStorage.getItem(TOKEN_STORAGE_KEY);
};

export const clearAuthToken = () => {
    localStorage.removeItem(TOKEN_STORAGE_KEY);
};
