import * as constants from '../constants'

export const setTextFilter = text => ({
    type: constants.SET_TEXT_FILTER,
    payload: text,
})