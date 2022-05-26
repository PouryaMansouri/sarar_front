export const setToken = ({
    access,
    refresh
}) => {
    localStorage.setItem("SararAccessToken", access);
    localStorage.setItem("SararRefreshToken", refresh);
};