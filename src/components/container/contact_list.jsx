import React from 'react';
import ContactComponent from '../pure/contact';
import { Contact } from '../../models/contact.class';
const ContactListComponent = () => {

    const defaultContact = new Contact('Christian','Casafranca','christian_r4141@outlook.es',true)
    return (
        <div>
            <div>
                Tu contacto:
            </div>
            <ContactComponent contact={ defaultContact }></ContactComponent>
        </div>
    );
};




export default ContactListComponent;
