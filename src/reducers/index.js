//import { combineReducers } from 'redux';
import {CHANGE_TEXT, BUTTON_CLICK} from '../actions/index';

const initState = {
	text: 'Hello'  
}
export default function reducers(state = initState.text, action) {
	switch(action.type){
	   case CHANGE_TEXT:  
		return {  
		    text: state==='舞力' ? '觉醒':'Hello'  
		}  
	    case BUTTON_CLICK:  
		return {  
		    text: '大神的世界'  
		}  
	}
	return state;
}
