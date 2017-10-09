function reducer(state, action) {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case "GET_ITEM_LIST":
            newState.books = action.payload;
            newState.filteredBooks = newState.books;
            break;
        case "FILTER_ITEM_LIST":
            newState.filter = action.filter;
            newState.filteredBooks = newState
                .books
                .filter((book) => book.title.toLowerCase().includes(newState.filter.toLowerCase()));
            break;
        case "GET_ITEM_DETAIL":
            newState.detail = action
                .payload
                .find((book) => book.isbn === action.isbn);
            break;
        default:
            return state;
    }
    return newState;
}
module.exports = reducer;