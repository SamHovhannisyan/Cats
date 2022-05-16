import { CAT_GET, CAT_GET_IMAGES } from "../tpes";


const initialState = {
    data: [],
    dataImages: []
}

export const catReducer = (state = initialState, action) => {
    switch (action.type) {

        case CAT_GET:

            return { ...state, data: action.payload }

        case CAT_GET_IMAGES:


            return { ...state, dataImages: action.payload }

        default:
            return state;
    }
}