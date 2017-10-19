const getPotierList = new Promise(function (resolve, reject) {
    window
        .fetch("http://henri-potier.xebia.fr/books")
        .then(response => resolve(response.json()))
        .catch(error => reject(error))
});

const getCommercialOffers = (isbnString) => new Promise(function (resolve, reject) {
    window
        .fetch(`http://henri-potier.xebia.fr/books/${isbnString}/commercialOffers`)
        .then(response => resolve(response.json()))
        .catch(error => reject(error))
});
export { getPotierList, getCommercialOffers };