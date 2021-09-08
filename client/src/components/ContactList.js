import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../JS/actions/actions';
import ContactCard from "./ContactCard"
const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector((state) => state.contactReducer.contacts);
    const loadContacts = useSelector((state) => state.contactReducer.loadContacts);

    useEffect (() =>{
        dispatch (getContacts())
    },[dispatch]);
    return (
        <div>
            <h3>Contact List</h3>
            {loadContacts?<h4>Loading</h4>:contacts.map(el=> <ContactCard key={el._id} contact ={el} />)}
        
        </div>
    )
}

export default ContactList
