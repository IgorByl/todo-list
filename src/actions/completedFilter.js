import * as constants from '../constants';
// import { bindActionCreators } from 'redux';

export const showAll = () => ({type: constants.SHOW_ALL})

export const showCompleted = ()=> ({type:constants.SHOW_COMPLETED})

export const showIncompleted = () => ({type: constants.SHOW_INCOMPLETED})