const services = require("../services");

function getBooksAction(dispatch) {
    services
        .getPotierList
        .then(data => dispatch({ type: "GET_ITEM_LIST", payload: data }), error => dispatch({ type: "REQUEST_FAILED", error: error }))
}

function getCommercialOffers(dispatch, isbnList) {
    services
        .getCommercialOffers(isbnList.join(","))
        .then(data => dispatch({ type: "GET_COMMERCIAL_OFFERS", payload: data }), error => dispatch({ type: "REQUEST_FAILED", error: error }))
}

function filterBooksAction(dispatch, filter) {
    return dispatch({ type: "FILTER_ITEM_LIST", filter: filter });
}

function getBookDetailAction(dispatch, isbn) {
    services
        .getPotierList
        .then(data => dispatch({ type: "GET_ITEM_DETAIL", payload: data, isbn: isbn }), error => dispatch({ type: "REQUEST_FAILED", error: error }))
}

function addToBasketAction(dispatch, newBook) {
    return dispatch({ type: "ADD_TO_BASKET", newBook: newBook });
}

function removeFromBasketAction(dispatch, book) {
    return dispatch({ type: "REMOVE_FROM_BASKET", book: book });
}

module.exports = {
    getBooksAction: getBooksAction,
    getCommercialOffers: getCommercialOffers,
    filterBooksAction: filterBooksAction,
    getBookDetailAction: getBookDetailAction,
    addToBasketAction: addToBasketAction,
    removeFromBasketAction: removeFromBasketAction
};