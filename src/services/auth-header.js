export const authHeader = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user && user.accessToken) {
        return {
            'Content-Type': 'application/json',
            'RefreshToken': user.refreshToken,
            'AccessToken': user.accessToken,
            'Authorization': `Bearer ${user.idToken}`
        }
    }
    else {
        return {}
    }
}
