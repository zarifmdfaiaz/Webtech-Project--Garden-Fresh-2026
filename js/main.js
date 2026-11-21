
function makeFruitCard(fruit, index, showButton) {
    var card = document.createElement("div");
    card.className = "fruit-card";

    var image = document.createElement("img");
    image.src = fruit.image || fallbackImage;
    image.alt = fruit.name + " fruit";
    image.loading = "lazy";

    image.onerror = function () {
        this.onerror = null;
        this.src = fallbackImage;
    };

    var name = document.createElement("h3");
    name.textContent = fruit.name;

    var price = document.createElement("p");
    price.className = "fruit-price";
    price.textContent = "Tk " + Number(fruit.price).toFixed(2) + " per kg";

    var seller = document.createElement("p");
    seller.textContent = "Seller: " + (fruit.seller || "Local Seller");

    var location = document.createElement("p");
    location.textContent = "Location: " + (fruit.location || "Bangladesh");

    var description = document.createElement("p");
    description.className = "fruit-description";
    description.textContent = fruit.description || "Fresh fruit available.";

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(price);
    card.appendChild(seller);
    card.appendChild(location);
    card.appendChild(description);

    if (showButton) {
        var button = document.createElement("a");
        button.className = "button";
        button.href = "buy.html";
        button.textContent = "View Fruits";
        card.appendChild(button);
    }

    return card;
}

function showFeaturedFruits() {
    var featured = document.getElementById("featuredFruits");

    if (!featured || !Array.isArray(fruitList)) {
        return;
    }

    featured.innerHTML = "";

    for (var i = 0; i < 3 && i < fruitList.length; i++) {
        featured.appendChild(makeFruitCard(fruitList[i], i, true));
    }
}

showFeaturedFruits();
