import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/auth';
import { EMAIL, PASSWORD } from '../configs/api';
import { isTokenExpired } from '../utils/token';

const useLogin = () => {
    const user = JSON.parse(localStorage.getItem('user')) || {}
    const dispatch = useDispatch();
    useEffect(() => {
        if (!user.accessToken || isTokenExpired(user.accessToken))
            dispatch(login(EMAIL, PASSWORD))
    })
}
export default useLogin