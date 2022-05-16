import axios from "axios";
import { CAT_GET, CAT_GET_IMAGES } from "../tpes";

export const cat_actions_get = () => {
    return dispatch => {
        axios.get('https://api.thecatapi.com/v1/categories')
            .then(function (response) {
                // handle success
                dispatch({ type: CAT_GET, payload: response.data })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }
}

export const cat_actions_post = (limit, categor_ids) => {
    return dispatch => {
        axios.get('https://api.thecatapi.com/v1/images/search?', {
            params: {
                limit: limit,
                page: 1,
                categor_ids: categor_ids
            }
        })
            .then(function (response) {
                console.log(response.data, '++++++++++++')
                dispatch({ type: CAT_GET_IMAGES, payload: response.data })
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}


export const cat_more_actions_post = (limit, categor_ids) => {
    return dispatch => {
        axios.get('https://api.thecatapi.com/v1/images/search?', {
            params: {
                limit: limit,
                page: 1,
                categor_ids: categor_ids
            }
        })
            .then(function (response) {
                dispatch({ type: CAT_GET_IMAGES, payload: response.data })
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}