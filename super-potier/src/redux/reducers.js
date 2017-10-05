function reducer(state, action) {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case "GET_ITEM_LIST":
            newState.books = action.payload;
            break;
        default:
            return state;
    }
    return newState;
}
module.exports = reducer;