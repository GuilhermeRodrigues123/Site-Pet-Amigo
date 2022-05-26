export const TOKEN_KEY = "@petamigo-Token";
export const isAuthenticated = () => sessionStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => sessionStorage.getItem(TOKEN_KEY);
export const login = (token) => {
    sessionStorage.setItem(TOKEN_KEY, token.accessToken);
    localStorage.setItem("usuario", JSON.stringify(token.usuario));
};
export const logout = () => {
    sessionStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem("usuario");
};
export const cadastro = token => {
    sessionStorage.setItem(TOKEN_KEY, token);
};

