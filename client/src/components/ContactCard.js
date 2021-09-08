import React from 'react'
import { deleteContact } from '../JS/actions/actions';
import './ContactCard.css';
import { useDispatch } from 'react-redux';


const ContactCard = ({contact}) => {
    const dispatch = useDispatch()
    return (
        <div className="container">
            <div id="card">
                <img src="https://bo.market/wp-content/uploads/2021/05/oceanback4.jpg" alt=""/>
                <h2>{contact.name}</h2>
                <p>{contact.email}</p>
                <button className="button buttonView">View Profile</button>
                <button className="button buttonDelete" onClick={()=>dispatch(deleteContact(contact._id))}>Delete Profile</button>
            </div>
        </div>
    )
}

export default ContactCard

