//import const
import {GET_CONTACTS, GET_CONTACTS_SUCCESS, GET_CONTACTS_FAIL} from "../constants/contacts"


//init state

const initialState = {
    contacts :[],
    loadContacts: false,
    error: null
};

export const  contactReducer = (state= initialState, {type, payload})=>  {
    switch (type) {
        case GET_CONTACTS : return {...state, loadContacts:true}
        case GET_CONTACTS_SUCCESS : return {...state, loadContacts:false, contacts: payload}
        case GET_CONTACTS_FAIL : return {...state, loadContacts:false, error: payload}
        default: return state
    }
    
}
