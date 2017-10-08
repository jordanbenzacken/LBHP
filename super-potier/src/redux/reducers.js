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
        default:
            return state;
    }
    return newState;
}
module.exports = reducer;