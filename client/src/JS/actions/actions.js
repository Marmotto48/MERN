import {GET_CONTACTS, GET_CONTACTS_SUCCESS, GET_CONTACTS_FAIL, DELETE_CONTACT} from "../constants/contacts";
import axios from "axios";


export const getContacts = () => async dispatch => {
    dispatch ({type: GET_CONTACTS});
    try {
        let result= await axios.get("contact/get")
        dispatch({type: GET_CONTACTS_SUCCESS, payload: result.data.response })
    } catch (error) {
        dispatch({type: GET_CONTACTS_FAIL, payload: error})
    }
}

export const deleteContact = (id) =>  dispatch => {
    dispatch({type: DELETE_CONTACT})
    axios
        .delete(`/contact/delete/${id}`)
        .then((res)=> dispatch(getContacts()))
        .catch((error)=>
        console.log(error))
}