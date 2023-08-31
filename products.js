var productsArray = [];
function getProductsFromUser() {
    var counter = +prompt("how many products u want?")
    for (let i = 0; i < counter; i++) {
        productsArray.push(
            {
                title: prompt("enter title"),
                price: +prompt("enter price"),
                url: prompt("enter image url")
            }
        )
    } console.log(productsArray);
}
function printProducts() {
    for (let i = 0; i < productsArray.length; i++) {
        document.getElementById("divContanier").innerHTML +=
            `<h1>${productsArray[i].title}</h1>
    <h2>${productsArray[i].price}</h2>
    <img src="${productsArray[i].url}"/>
`
    }
}

