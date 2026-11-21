
var pictureURL = "";

function setError(id, message) {
    document.getElementById(id).textContent = message;
}

// preview the selected picture
document.getElementById("fruitPicture").addEventListener("change", function () {
    var file = this.files[0];
    var preview = document.getElementById("picturePreview");

    if (pictureURL !== "") {
        URL.revokeObjectURL(pictureURL);
        pictureURL = "";
    }

    if (file && file.type.indexOf("image/") === 0) {
        // allowed preview feature: create a temporary picture URL
        pictureURL = URL.createObjectURL(file);
        preview.src = pictureURL;
        preview.style.display = "block";
    } else {
        preview.removeAttribute("src");
        preview.style.display = "none";
    }
});

function checkSellForm() {
    var name = document.getElementById("fruitName").value.trim();
    var category = document.getElementById("category").value;
    var quantityText = document.getElementById("quantity").value;
    var priceText = document.getElementById("price").value;
    var description = document.getElementById("description").value.trim();
    var seller = document.getElementById("sellerName").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var email = document.getElementById("sellerEmail").value.trim();
    var location = document.getElementById("location").value.trim();
    var picture = document.getElementById("fruitPicture").files[0];
    var terms = document.getElementById("terms").checked;

    var quantity = Number(quantityText);
    var price = Number(priceText);
    var valid = true;

    setError("fruitNameError", "");
    setError("categoryError", "");
    setError("quantityError", "");
    setError("priceError", "");
    setError("descriptionError", "");
    setError("sellerNameError", "");
    setError("phoneError", "");
    setError("sellerEmailError", "");
    setError("locationError", "");
    setError("pictureError", "");
    setError("termsError", "");
    document.getElementById("sellMessage").textContent = "";

    if (name === "") {
        setError("fruitNameError", "Enter the fruit name.");
        valid = false;
    }

    if (category === "") {
        setError("categoryError", "Choose a category.");
        valid = false;
    }

    if (quantityText === "" || quantity <= 0 ||
        quantity !== Math.floor(quantity)) {
        setError("quantityError", "Enter a whole quantity greater than 0.");
        valid = false;
    }

    if (priceText === "" || isNaN(price) || price <= 0) {
        setError("priceError", "Enter a price greater than 0.");
        valid = false;
    }

    if (description === "") {
        setError("descriptionError", "Enter a description.");
        valid = false;
    }

    if (seller === "") {
        setError("sellerNameError", "Enter the seller name.");
        valid = false;
    }

    if (phone === "") {
        setError("phoneError", "Enter a phone number.");
        valid = false;
    }

    if (email === "" || email.indexOf("@") === -1) {
        setError("sellerEmailError", "Enter an email containing @.");
        valid = false;
    }

    if (location === "") {
        setError("locationError", "Enter the location.");
        valid = false;
    }

    if (!picture || picture.type.indexOf("image/") !== 0) {
        setError("pictureError", "Choose a valid image file.");
        valid = false;
    }

    if (!terms) {
        setError("termsError", "Please tick the confirmation box.");
        valid = false;
    }

    if (valid === false) {
        return false;
    }

    var newFruit = {
        name: name,
        price: price,
        seller: seller,
        location: location,
        image: pictureURL,
        description: description,
        category: category
    };

    // add the new fruit to the current page's fruit array
    fruitList.push(newFruit);

    var listings = document.getElementById("sellListings");

    if (listings) {
        listings.appendChild(makeFruitCard(newFruit, fruitList.length - 1, false));
    }

    document.getElementById("sellMessage").textContent =
        "Your fruit has been listed on this page.";

    // Keep the preview visible until the form is reset.
    // The new image URL and fruit object exist only in this page session.
    return false;
}

document.getElementById("sellForm").addEventListener("reset", function () {
    document.getElementById("sellMessage").textContent = "";

    var errors = document.getElementsByClassName("error");

    for (var i = 0; i < errors.length; i++) {
        errors[i].textContent = "";
    }

    var preview = document.getElementById("picturePreview");
    preview.removeAttribute("src");
    preview.style.display = "none";

    if (pictureURL !== "") {
        URL.revokeObjectURL(pictureURL);
        pictureURL = "";
    }
});
