import React, { useState, useEffect } from 'react'
import "../styles/ContactsList.css";
import ContactCard from "./ContactCard";
function ContactsList() {

    const [contacts, setContacts] = useState([]);
    useEffect(() => {
        getContacts();
    }, []);

    const getContacts = (async () => {
        let apiResponse = await fetch("https://jsonplaceholder.typicode.com/users");
        let contacts = await apiResponse.json();
        setContacts(contacts);
    });
    return (
        <div id='container'>
            <div id='contactContainer'>
                <h3> Add Contact</h3>
                <img id='addContactImg' src='https://img.icons8.com/?size=512&id=23344&format=png' />
            </div>
            <div id='headerContainer'>
                <label className='headerlabel'>Name</label>
                <label className='headerlabel'>Username</label>
                <label className='headerlabel'>Email</label>
                <label className='headerlabel'>Phone</label>
            </div>
            {
                <div>
                    {contacts.map((contact) => (
                        <ContactCard
                            id={contact.phone}
                            Name={contact.name}
                            Username={contact.username}
                            Email={contact.email}
                            Phone={contact.phone}
                        />
                    ))}
                </div>
            }
        </div>
    );
}
export default ContactsList;