/*
    FILE:           index.js
    PROJECT:        ContactList (MAD9135 Midterm)
    PROGRAMMER:     Eric Lachapelle (lach0192)
*/

require("./main.scss");

import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/Main";
import {contacts} from "./data/contacts";

let state = {};

state = {
    handleClick: function(e){

        // changes "contact47" to "47"
        let id = e.currentTarget.id;
        let idFormatted = id.substring(7);
        let locationFormatted = "#/contact/" + idFormatted;

        // set state with new changes
        setState({
            selectedContact: idFormatted,
            location: locationFormatted
        });
    },
    contactList: contacts,
    selectedContact: -1,
    location: "#"
};

// make changes when user manually enters url
window.onhashchange = function() {

    let url = window.location.hash.substr(1);

    if (url.substring(8) === ""){

        setState({
            selectedContact: -1,
            location: "#"
        });
    }
    else{

        let contactId = url.substring(8);
        let locationFormatted = "#/contact/" + contactId;

        setState({
            selectedContact: contactId,
            location: locationFormatted
        });
    }
};

function setState(changes) {
    state = Object.assign({}, state, changes);

    ReactDOM.render(React.createElement(Main, state), document.getElementById("react-app"));
}

setState(state);