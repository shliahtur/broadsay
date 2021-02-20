import axios from "axios";
import {
    FETCH_ASSETS_STARTED,
    FETCH_ASSETS_SUCCESS,
    FETCH_ASSETS_FAILURE
} from "../constants/assets";
import { API_URL } from '../../configs/api';
import { authHeader } from '../../services/auth-header';
export const getAssets = (limit, skip) => (dispatch) => {
    dispatch(fetchAssetsStarted());
    return axios
        .get(`${API_URL}/media?$limit=${limit}&$skip=${skip}&$sort[createdAt]=-1`, { headers: authHeader() })
        .then(res => {
            dispatch(fetchAssetsSuccess(res.data));
        })
        .catch(err => {
            dispatch(fetchAssetsFailure(err.response));
        });
}
const fetchAssetsStarted = () => ({
    type: FETCH_ASSETS_STARTED
});

const fetchAssetsSuccess = assets => ({
    type: FETCH_ASSETS_SUCCESS,
    payload: assets
});

const fetchAssetsFailure = error => ({
    type: FETCH_ASSETS_FAILURE,
    payload: error
});
