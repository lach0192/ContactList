/*
    FILE:           ListItem.js
    PROJECT:        ContactList (MAD9135 Midterm)
    PROGRAMMER:     Eric Lachapelle (lach0192)
*/

import React, {Component} from "react"; // eslint-disable-line no-unused-vars
import List from "./List";              // eslint-disable-line no-unused-vars
import PropTypes from "prop-types";

export default class ListItem extends Component {

    render(){

        return (
            <List contactList={this.props.contactList} handleContactClick={this.props.handleContactClick}/>
        );
    }
}

ListItem.propTypes = {
    contactList: PropTypes.array.isRequired,
    handleContactClick: PropTypes.func.isRequired
};