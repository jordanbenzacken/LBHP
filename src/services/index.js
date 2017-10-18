const getPotierList = new Promise(function (resolve, reject) {
    window
        .fetch("http://henri-potier.xebia.fr/books")
        .then(response => resolve(response.json()))
});

const getCommercialOffers = (isbnString) => new Promise(function (resolve, reject) {
    window
        .fetch(`http://henri-potier.xebia.fr/books/${isbnString}/commercialOffers`)
        .then(response => resolve(response.json()))
});
export { getPotierList, getCommercialOffers };