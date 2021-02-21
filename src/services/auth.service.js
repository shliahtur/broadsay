import  apiClient  from '../utils/apiClient';
import { API_URL } from '../configs/api';

const strategy = "cognito"

class AuthService {
    login(email, password) {
        return apiClient
            .post(`${API_URL}/authentication`, { strategy, email, password })
            .then((res) => {
                if (res.data.accessToken) {
                    localStorage.setItem('user', JSON.stringify(res.data))
                }
                return res.data
            })
    }
    logout() {
        localStorage.removeItem('user');
    }
}
export default new AuthService();