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
                newState.basket = [newBook]
            } else if (!newState.basket.includes(newBook.isbn)) {
                //copy array per value.
                newState.basket = newState
                    .basket
                    .slice()
                //push
                newState
                    .basket
                    .push(newBook)
                //to keep basket after refresh.
                window
                    .sessionStorage
                    .setItem('basket', JSON.stringify(newState.basket));
                // slice is to be sure we clone the array and don't modify array per ref.
                // otherwise redux behavior would be unexpected and components could not
                // re-render when redux state change
            }
            break;
        default:
            return state;
    }
    return newState;
}
module.exports = reducer;