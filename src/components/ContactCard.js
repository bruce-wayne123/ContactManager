import React from 'react';
import "../styles/ContactCard.css";
function ContactCard(props) {
    console.log("Props - ", props);
    const { Name, Username, Email, Phone } = props;
    return (
        <div>
            <div id='cardContainer'>
                <div id='cardHeaderContainer'>
                    <label className='headerlabel'>{Name}</label>
                    <label className='headerlabel'> {Username}</label>
                    <label className='headerlabel'>{Email}</label>
                    <label className='headerlabel'>{Phone}</label>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;