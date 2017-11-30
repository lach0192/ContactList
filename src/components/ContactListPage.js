/*
    FILE:           ContactListPage.js
    PROJECT:        ContactList (MAD9135 Midterm)
    PROGRAMMER:     Eric Lachapelle (lach0192)
*/

import React, {Component} from "react";   // eslint-disable-line no-unused-vars
import ListItem from "./ListItem";        // eslint-disable-line no-unused-vars
import Details from "./Details";          // eslint-disable-line no-unused-vars
import PropTypes from "prop-types";

export default class ContactListPage extends Component {

    render(){

        return (
            <div>
                <h1>Contact List</h1><hr/>
                <ListItem contactList={this.props.contactList} handleContactClick={this.props.handleContactClick}/>
                <Details contactList={this.props.contactList} selectedContact={this.props.selectedContact}/>
            </div>
        );
    }
}

ContactListPage.propTypes = {
    contactList: PropTypes.array.isRequired
};