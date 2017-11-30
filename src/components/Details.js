/*
    FILE:           Details.js
    PROJECT:        ContactList (MAD9135 Midterm)
    PROGRAMMER:     Eric Lachapelle (lach0192)
*/

import React, {Component} from "react"; // eslint-disable-line no-unused-vars
import PropTypes from "prop-types";
import {contacts} from "../data/contacts";
import {capitalizeFirst, formatDate} from "../helpers/Helpers";
import {capitalizeAllFirst} from "../helpers/Helpers";
import {ageFromDOB} from "../helpers/Helpers";

export default class Details extends Component {

    render(){

        let contactsFormatted = [];
        let i = this.props.selectedContact;

        if (i === -1){

            return (
                <div id={"contact-details"}><p>Select a contact to see details.</p></div>
            );
        }
        else {
            // set id of element to contact0, contact1..
            contactsFormatted.push(
                <div id={"contact" + i}>
                    <p id="firstName-large">{capitalizeFirst(contacts[i].name.first)}</p>
                    <p id="lastName-large">{capitalizeFirst(contacts[i].name.last)}</p>
                    <p>Gender: {contacts[i].gender}</p>
                    <p id="dob">DOB: {contacts[i].dob} ({ageFromDOB(formatDate(contacts[i].dob))} years old)</p>
                    <hr/>
                    <p>{capitalizeAllFirst(contacts[i].location.street)}</p>
                    <p>{capitalizeAllFirst(contacts[i].location.city)}, {capitalizeAllFirst(contacts[i].location.state)}</p>
                    <p>{contacts[i].location.postcode}</p>
                    <hr/>
                    <p>Email: <a href={"mailto:" + contacts[i].email}>{contacts[i].email}</a></p>
                    <p>Phone: {contacts[i].phone}</p>
                    <img src={contacts[i].picture.large}/>
                </div>
            );

            return (
                <div id={"contact-details"}>{contactsFormatted}</div>
            );
        }
    }
}

Details.propTypes = {
    contactList: PropTypes.array.isRequired
};