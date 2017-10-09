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
        case "ADD_TO_BASKET":
            const newBook = action.newBook;
            if (!newState.basket) {
                newState.basket = [newBook.isbn]
            } else if (!newState.basket.includes(newBook.isbn)) {
                newState
                    .basket
                    .push(newBook.isbn)
            }
            break;
        default:
            return state;
    }
    return newState;
}
module.exports = reducer;