/*
    FILE:           Helpers.js
    PROJECT:        ContactList (MAD9135 Midterm)
    PROGRAMMER:     Eric Lachapelle (lach0192)
*/

export function capitalizeFirst(word) {
    return word.substr(0,1).toUpperCase() + word.substr(1).toLowerCase();
}

export function capitalizeAllFirst(word) {
    return word.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

export function ageFromDOB(dob){
    let differenceInMilliseconds = new Date - new Date(dob);
    let differenceInDays = differenceInMilliseconds / 1000 / (60 * 60 * 24);
    let age = Math.floor(differenceInDays / 365.25);

    return age;
}

export function formatDate(dob){
    return dob.substr(0,10);
}