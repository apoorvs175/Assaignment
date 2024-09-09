
const products = [];

function addProduct() {
    const name = document.getElementById("productName").value;
    const price = parseInt(document.getElementById("price").value, 10);
    const rating = parseInt(document.getElementById("rating").value, 10);
    
    if (name && !isNaN(price) && !isNaN(rating)) {
        products.push({ name, price, rating });
        updateGraphs();
    }
}

function updateGraphs() {
    const priceGraph = document.getElementById("priceGraph");
    const ratingGraph = document.getElementById("ratingGraph");
    
    priceGraph.innerHTML = '';
    ratingGraph.innerHTML = '';

    products.forEach(product => {
        let priceBar = document.createElement("div");
        priceBar.className = "bar";
        priceBar.style.height = product.price + "px";
        priceGraph.appendChild(priceBar);

        let ratingBar = document.createElement("div");
        ratingBar.className = "bar";
        ratingBar.style.height = product.rating * 20 + "px";
        ratingGraph.appendChild(ratingBar);
    });
}

function sortByPrice() {
    products.sort((a, b) => a.price - b.price);
    updateGraphs();
}

function sortByRating() {
    products.sort((a, b) => a.rating - b.rating);
    updateGraphs();
}
