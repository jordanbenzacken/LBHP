function getBooksActionCreator(dispatch) {
    window
        .fetch("http://henri-potier.xebia.fr/books")
        .then(response => response.json())
        .then(
        // Use the (resolve, reject) form of .then() instead of .catch(), so that we
        // don't accidentally dispatch REQUEST_FAILED on a reducer error
        data => dispatch({type: "GET_ITEM_LIST", payload: data}), error => dispatch({type: "REQUEST_FAILED", error: error}))
}

module.exports = {
    getBooksActionCreator: getBooksActionCreator
};