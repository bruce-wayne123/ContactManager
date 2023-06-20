import React from 'react';
import "../styles/ContactCard.css";
function ContactCard(props) {
    const { Name, Username, Email, Phone } = props;
    return (
        <div id='cardContainer'>

            <div id='cardHeaderContainer'>
                <label className='infoCardLabel'>{Name}</label>
                <label className='infoCardLabel'> {Username}</label>
                <label className='infoCardLabel'>{Email}</label>
                <label className='infoCardLabel'>{Phone}</label>
            </div>
            <img className='contactOptions' src='https://img.icons8.com/?size=512&id=12082&format=png' />
            <img className='contactOptions' src='https://img.icons8.com/?size=512&id=102350&format=png' />
        </div>
    );
};

export default ContactCard;