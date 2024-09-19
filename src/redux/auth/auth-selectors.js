const getIsLoggedIn = state => state.auth.isLoggedIn
const getUserName = state => state.auth.user.name
const isRefreshihng = state => state.auth.isRefreshihng

const authSelectors = {
    getIsLoggedIn, 
    getUserName,
    isRefreshihng,
}

export default authSelectors