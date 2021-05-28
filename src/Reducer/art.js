import {RESP_STATUS} from './../utils/constance';
import {ART_LOAD, ART_SUCS, ART_FAIL} from './../actions/actionTypes';

const initialState = {
    articlList: [],
    request: {
        status: RESP_STATUS.IDLE,
        error: '',
    }
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ART_LOAD: {
            return {
                ... state,
                request: {
                    status: RESP_STATUS.PENDING,
                    error: '',
                }
            }
        }
        case ART_FAIL: {
            return {
                ...state,
                request: {
                    status: RESP_STATUS.FAIL,
                    error: action.error,
                }
            }
        }
        case ART_SUCS: {
            return {
                ...state,
                articlList: action.article,
                request: {
                    status: RESP_STATUS.SUCS,
                    error: '',
                }
            }
        }
        default:
            return state
    }
}