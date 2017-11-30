/*
    FILE:           List.js
    PROJECT:        ContactList (MAD9135 Midterm)
    PROGRAMMER:     Eric Lachapelle (lach0192)
*/

import React, {Component} from "react"; // eslint-disable-line no-unused-vars
import PropTypes from "prop-types";
import {contacts} from "../data/contacts";
import {capitalizeFirst} from "../helpers/Helpers";
import {formatDate} from "../helpers/Helpers";

export default class List extends Component {

    render(){

        let contactsFormatted = [];

        for(let i = 0; i < contacts.length; i++){

            contactsFormatted.push(
                <a href={"#contact/" + i}>
                    <div id={"contact" + i} onClick={this.props.handleContactClick}>
                        <img id="contact-image" src={contacts[i].picture.thumbnail}/>
                        <p id="firstName">{capitalizeFirst(contacts[i].name.first)}</p>
                        <p id="lastName">{capitalizeFirst(contacts[i].name.last)}</p>
                        <p id="phoneNumber">{formatDate(contacts[i].dob)}</p>
                    </div>
                </a>
            );
        }

        return (
            <div id={"contact-list"}>{contactsFormatted}</div>
        );
    }
}

List.propTypes = {
    contactList: PropTypes.array.isRequired
};