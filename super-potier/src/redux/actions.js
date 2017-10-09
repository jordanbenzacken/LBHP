const services = require("../services");

function getBooksActionCreator(dispatch) {
    services
        .getPotierList
        .then(data => dispatch({type: "GET_ITEM_LIST", payload: data}), error => dispatch({type: "REQUEST_FAILED", error: error}))
}

function filterBooksActionCreator(dispatch, filter) {
    return dispatch({type: "FILTER_ITEM_LIST", filter: filter});
}

function getBookDetailActionCreator(dispatch, isbn) {
    services
        .getPotierList
        .then(data => dispatch({type: "GET_ITEM_DETAIL", payload: data, isbn: isbn}), error => dispatch({type: "REQUEST_FAILED", error: error}))
}

function addToBasketActionCreator(dispatch, newBook) {
    return dispatch({type: "ADD_TO_BASKET", newBook: newBook});
}

module.exports = {
    getBooksActionCreator: getBooksActionCreator,
    filterBooksActionCreator: filterBooksActionCreator,
    getBookDetailActionCreator: getBookDetailActionCreator,
    addToBasketActionCreator: addToBasketActionCreator
};