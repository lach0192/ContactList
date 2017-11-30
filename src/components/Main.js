/*
    FILE:           Main.js
    PROJECT:        ContactList (MAD9135 Midterm)
    PROGRAMMER:     Eric Lachapelle (lach0192)
*/

import React, {Component} from "react";           // eslint-disable-line no-unused-vars
import ContactListPage from "./ContactListPage";  // eslint-disable-line no-unused-vars

export default class Main extends Component {

    render() {

        return (
            <ContactListPage contactList={this.props.contactList}
                handleContactClick={this.props.handleClick}
                selectedContact={this.props.selectedContact}/>
        );
    }
}