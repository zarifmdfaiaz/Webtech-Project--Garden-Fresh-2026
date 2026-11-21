
var deliveryCharge = 60;

function showCart() {
    var cartArea = document.getElementById("cartItems");
    var subtotalArea = document.getElementById("cartSubtotal");
    var deliveryArea = document.getElementById("deliveryFee");
    var totalArea = document.getElementById("cartTotal");
    var orderMessage = document.getElementById("orderMessage");

    if (!cartArea || !subtotalArea || !deliveryArea || !totalArea) {
        return;
    }

    var subtotal = 0;
    cartArea.innerHTML = "";

    if (!Array.isArray(cartItems)) {
        cartItems = [];
    }

    for (var i = 0; i < cartItems.length; i++) {
        var item = cartItems[i];

        item.price = Number(item.price) || 0;
        item.quantity = Math.max(1, Math.floor(Number(item.quantity) || 1));

        var itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        var row = document.createElement("div");
        row.className = "cart-item";

        var details = document.createElement("div");

        var name = document.createElement("h3");
        name.textContent = item.name || "Fruit";

        var seller = document.createElement("p");
        seller.textContent = "Seller: " + (item.seller || "Local Seller");

        var price = document.createElement("p");
        price.textContent = "Tk " + item.price.toFixed(2) + " per kg";

        var itemSubtotal = document.createElement("p");
        itemSubtotal.textContent = "Subtotal: Tk " + itemTotal.toFixed(2);

        details.appendChild(name);
        details.appendChild(seller);
        details.appendChild(price);
        details.appendChild(itemSubtotal);

        var quantity = document.createElement("input");
        quantity.type = "number";
        quantity.min = "1";
        quantity.step = "1";
        quantity.value = item.quantity;
        quantity.setAttribute("aria-label", "Quantity for " + item.name);

        quantity.onchange = function (selectedItem) {
            return function () {
                var newQuantity = Number(this.value);

                if (Number.isInteger(newQuantity) && newQuantity >= 1) {
                    selectedItem.quantity = newQuantity;
                    saveCart();
                    showCart();
                } else {
                    this.value = selectedItem.quantity;
                }
            };
        }(item);

        var removeButton = document.createElement("button");
        removeButton.type = "button";
        removeButton.className = "button button-orange";
        removeButton.textContent = "Remove";

        removeButton.onclick = function (selectedItem) {
            return function () {
                var itemIndex = cartItems.indexOf(selectedItem);

                if (itemIndex !== -1) {
                    cartItems.splice(itemIndex, 1);
                }

                saveCart();

                if (orderMessage) {
                    orderMessage.textContent = "";
                }

                showCart();
            };
        }(item);

        row.appendChild(details);
        row.appendChild(quantity);
        row.appendChild(removeButton);
        cartArea.appendChild(row);
    }

    var delivery = cartItems.length > 0 ? deliveryCharge : 0;
    var grandTotal = subtotal + delivery;

    subtotalArea.textContent = subtotal.toFixed(2);
    deliveryArea.textContent = delivery.toFixed(2);
    totalArea.textContent = grandTotal.toFixed(2);

    if (cartItems.length === 0) {
        cartArea.innerHTML =
            '<p class="empty-message">Your cart is empty. Open Buy Fruits to select fruits.</p>';
    }

    saveCart();
}

function placeOrder(event) {
    event.preventDefault();

    var form = document.getElementById("checkoutForm");
    var message = document.getElementById("orderMessage");

    if (!form || !message) {
        return;
    }

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    if (!Array.isArray(cartItems) || cartItems.length === 0) {
        message.textContent = "Your cart is empty. Please select some fruits.";
        return;
    }

    var selectedPayment = document.querySelector(
        'input[name="payment_method"]:checked'
    );

    var paymentMethod = selectedPayment ? selectedPayment.value : "COD";

    message.textContent =
        "Thank you for choosing Garden Fresh! Your order request has been prepared. Selected payment method: " +
        paymentMethod +
        ". your order has been confirmed.";
}

var checkoutForm = document.getElementById("checkoutForm");

if (checkoutForm) {
    checkoutForm.addEventListener("submit", placeOrder);
}

showCart();
