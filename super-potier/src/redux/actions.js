function getBooksActionCreator(dispatch) {
    window
        .fetch("http://henri-potier.xebia.fr/books")
        .then(response => response.json())
        .then(data => dispatch({type: "GET_ITEM_LIST", payload: data}), error => dispatch({type: "REQUEST_FAILED", error: error}))
}

function filterBooksActionCreator(dispatch, filter) {
    return dispatch({type: "FILTER_ITEM_LIST", filter: filter});
}

module.exports = {
    getBooksActionCreator: getBooksActionCreator,
    filterBooksActionCreator: filterBooksActionCreator
};