
function getWishlist() {
    try {
        var savedWishlist = JSON.parse(
            localStorage.getItem("gardenFreshWishlist")
        );

        if (Array.isArray(savedWishlist)) {
            return savedWishlist;
        }
    } catch (error) {
        console.error("Could not load wishlist:", error);
    }

    return [];
}

function saveWishlist(wishlist) {
    try {
        localStorage.setItem(
            "gardenFreshWishlist",
            JSON.stringify(wishlist)
        );
    } catch (error) {
        console.error("Could not save wishlist:", error);
    }
}

function showFruits() {
    var listings = document.getElementById("fruitListings");
    var searchInput = document.getElementById("searchFruit");
    var maxPriceInput = document.getElementById("maxPrice");
    var sortInput = document.getElementById("sortPrice");

    if (!listings || !searchInput || !maxPriceInput || !sortInput) {
        return;
    }

    var search = searchInput.value.toLowerCase().trim();
    var maxPriceText = maxPriceInput.value;
    var sortOption = sortInput.value;

    var results = fruitList.filter(function (fruit) {
        var nameMatch = fruit.name.toLowerCase().includes(search);
        var priceMatch = true;

        if (maxPriceText !== "" && Number(maxPriceText) >= 0) {
            priceMatch = Number(fruit.price) <= Number(maxPriceText);
        }

        return nameMatch && priceMatch;
    });

    if (sortOption === "low") {
        results.sort(function (a, b) {
            return Number(a.price) - Number(b.price);
        });
    } else if (sortOption === "high") {
        results.sort(function (a, b) {
            return Number(b.price) - Number(a.price);
        });
    }

    listings.innerHTML = "";

    if (results.length === 0) {
        listings.innerHTML =
            '<p class="empty-message">No fruits found.</p>';
        return;
    }

    var wishlist = getWishlist();

    for (var i = 0; i < results.length; i++) {
        var fruit = results[i];
        var originalIndex = fruitList.indexOf(fruit);
        var card = makeFruitCard(fruit, originalIndex, false);

        var quantityArea = document.createElement("div");
        quantityArea.className = "quantity-control";

        var quantityLabel = document.createElement("label");
        quantityLabel.textContent = "Quantity (kg):";
        quantityLabel.htmlFor = "quantity" + originalIndex;

        var quantityInput = document.createElement("input");
        quantityInput.type = "number";
        quantityInput.id = "quantity" + originalIndex;
        quantityInput.min = "1";
        quantityInput.step = "1";
        quantityInput.value = "1";
        quantityInput.required = true;

        quantityArea.appendChild(quantityLabel);
        quantityArea.appendChild(quantityInput);
        card.appendChild(quantityArea);

        var buttonArea = document.createElement("div");
        buttonArea.className = "fruit-actions";

        var addButton = document.createElement("button");
        addButton.type = "button";
        addButton.className = "button";
        addButton.textContent = "Add to Cart";

        addButton.onclick = function (selectedFruit, input) {
            return function () {
                addToCart(selectedFruit, input.value);
            };
        }(fruit, quantityInput);

        var buyButton = document.createElement("button");
        buyButton.type = "button";
        buyButton.className = "button button-orange";
        buyButton.textContent = "Buy Now";

        buyButton.onclick = function (selectedFruit, input) {
            return function () {
                var added = addToCart(selectedFruit, input.value);

                if (added) {
                    window.location.href = "cart.html";
                }
            };
        }(fruit, quantityInput);

        var wishlistButton = document.createElement("button");
        wishlistButton.type = "button";
        wishlistButton.className = "button button-light";

        if (wishlist.includes(fruit.name)) {
            wishlistButton.textContent = "♥ Wishlisted";
        } else {
            wishlistButton.textContent = "♡ Wishlist";
        }

        wishlistButton.setAttribute(
            "aria-label",
            "Toggle wishlist for " + fruit.name
        );

        wishlistButton.onclick = function (selectedFruit) {
            return function () {
                toggleWishlist(selectedFruit.name);
            };
        }(fruit);

        buttonArea.appendChild(addButton);
        buttonArea.appendChild(buyButton);
        buttonArea.appendChild(wishlistButton);

        card.appendChild(buttonArea);
        listings.appendChild(card);
    }
}

function addToCart(fruit, quantityText) {
    var quantity = Number(quantityText);
    var message = document.getElementById("buyMessage");

    if (
        quantityText === "" ||
        !Number.isInteger(quantity) ||
        quantity < 1
    ) {
        if (message) {
            message.textContent =
                "Enter a whole number of kilograms greater than 0.";
        }

        return false;
    }

    try {
        var savedCart = JSON.parse(
            localStorage.getItem("gardenFreshCart")
        );

        if (Array.isArray(savedCart)) {
            cartItems = savedCart;
        } else {
            cartItems = [];
        }
    } catch (error) {
        cartItems = [];
    }

    var found = false;

    for (var i = 0; i < cartItems.length; i++) {
        if (cartItems[i].name === fruit.name) {
            cartItems[i].quantity =
                (Number(cartItems[i].quantity) || 0) + quantity;

            found = true;
            break;
        }
    }

    if (!found) {
        cartItems.push({
            name: fruit.name,
            price: Number(fruit.price),
            quantity: quantity,
            seller: fruit.seller,
            image: fruit.image
        });
    }

    saveCart();

    if (message) {
        message.textContent =
            fruit.name + " added to your cart successfully.";
    }

    return true;
}

function toggleWishlist(fruitName) {
    var wishlist = getWishlist();
    var index = wishlist.indexOf(fruitName);
    var message = document.getElementById("buyMessage");

    if (index === -1) {
        wishlist.push(fruitName);

        if (message) {
            message.textContent = fruitName + " added to your wishlist.";
        }
    } else {
        wishlist.splice(index, 1);

        if (message) {
            message.textContent = fruitName + " removed from your wishlist.";
        }
    }

    saveWishlist(wishlist);
    showFruits();
}

var searchFruitInput = document.getElementById("searchFruit");
var maxPriceInput = document.getElementById("maxPrice");
var sortPriceInput = document.getElementById("sortPrice");

if (searchFruitInput) {
    searchFruitInput.addEventListener("input", showFruits);
}

if (maxPriceInput) {
    maxPriceInput.addEventListener("input", showFruits);
}

if (sortPriceInput) {
    sortPriceInput.addEventListener("change", showFruits);
}

showFruits();
