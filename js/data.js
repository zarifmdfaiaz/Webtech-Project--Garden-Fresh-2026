
var fallbackImage = "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=800&q=80";

var fruitList = [
    {
        name: "Apple",
        price: 280,
        seller: "Rahim Uddin",
        location: "Dhaka",
        image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=800&q=80",
        description: "Fresh red apples for everyday use.",
        category: "Other"
    },
    {
        name: "Mango",
        price: 150,
        seller: "Nusrat Jahan",
        location: "Rajshahi",
        image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=800&q=80",
        description: "Sweet mangoes from a local fruit seller.",
        category: "Tropical"
    },
    {
        name: "Banana",
        price: 80,
        seller: "Tanvir Ahmed",
        location: "Dhaka",
        image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=800&q=80",
        description: "Ripe bananas for snacks and breakfast.",
        category: "Tropical"
    },
    {
        name: "Orange",
        price: 220,
        seller: "Sadia Akter",
        location: "Sylhet",
        image: "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=800&q=80",
        description: "Juicy oranges with a fresh citrus taste.",
        category: "Citrus"
    },
    {
        name: "Grapes",
        price: 350,
        seller: "Hasan Mahmud",
        location: "Dhaka",
        image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=800&q=80",
        description: "Sweet grapes for sharing with family.",
        category: "Other"
    },
    {
        name: "Strawberry",
        price: 450,
        seller: "Farzana Islam",
        location: "Gazipur",
        image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=800&q=80",
        description: "Bright red strawberries with a sweet taste.",
        category: "Berries"
    },
    {
        name: "Watermelon",
        price: 60,
        seller: "Mehedi Hasan",
        location: "Cumilla",
        image: "https://images.unsplash.com/photo-1630081015918-8a21078e5cee?auto=format&fit=crop&w=800&q=80",
        description: "A refreshing watermelon for warm days.",
        category: "Other"
    },
    {
        name: "Pineapple",
        price: 100,
        seller: "Ayesha Rahman",
        location: "Rangamati",
        image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=800&q=80",
        description: "Sweet pineapple with a tropical flavour.",
        category: "Tropical"
    },
    {
        name: "Guava",
        price: 90,
        seller: "Imran Hossain",
        location: "Barishal",
        image: "https://images.unsplash.com/photo-1536511132770-e5058c7e8c46?auto=format&fit=crop&w=800&q=80",
        description: "Fresh guavas from a local orchard.",
        category: "Other"
    },
    {
        name: "Lychee",
        price: 200,
        seller: "Sumaiya Akter",
        location: "Dinajpur",
        image: "https://images.unsplash.com/photo-1594151820883-f09a7a4246fe?auto=format&fit=crop&w=800&q=80",
        description: "A seasonal fruit with a sweet, juicy centre.",
        category: "Tropical"
    },
    {
        name: "Papaya",
        price: 100,
        seller: "Arif Hossain",
        location: "Khulna",
        image: "https://images.unsplash.com/photo-1517282009859-f000ec3b26fe?auto=format&fit=crop&w=800&q=80",
        description: "Ripe papaya with a sweet, soft centre.",
        category: "Tropical"
    },
    {
        name: "Dragon Fruit",
        price: 380,
        seller: "Mim Akter",
        location: "Dhaka",
        image: "https://images.unsplash.com/photo-1527325678964-54921661f888?auto=format&fit=crop&w=800&q=80",
        description: "A colourful tropical fruit with mild sweetness.",
        category: "Tropical"
    },
    {
        name: "Pomegranate",
        price: 320,
        seller: "Rakib Hasan",
        location: "Dhaka",
        image: "https://images.unsplash.com/photo-1541344999736-83eca272f6fc?auto=format&fit=crop&w=800&q=80",
        description: "Pomegranate with juicy red seeds.",
        category: "Other"
    },
    {
        name: "Jackfruit",
        price: 75,
        seller: "Jannatul Ferdous",
        location: "Mymensingh",
        image: "https://sumateraekspres.bacakoran.co/upload/ca893886291e9dad3cec24b4a8cddcd3.jpg",
        description: "Seasonal jackfruit with a sweet flavour.",
        category: "Seasonal"
    },
    {
        name: "Coconut",
        price: 120,
        seller: "Sabbir Ahmed",
        location: "Cox's Bazar",
       image: "https://images.unsplash.com/photo-1566109964132-ec243417ca2d?auto=format&fit=crop&w=800&q=80",
        description: "Fresh coconut with refreshing coconut water.",
        category: "Tropical"
    },
    {
        name: "Pear",
        price: 300,
        seller: "Sharmin Sultana",
        location: "Dhaka",
        image: "https://images.unsplash.com/photo-1514756331096-242fdeb70d4a?auto=format&fit=crop&w=800&q=80",
        description: "Fresh pears with a mild sweetness.",
        category: "Other"
    },
    {
        name: "Kiwi",
        price: 500,
        seller: "Mahfuz Rahman",
        location: "Dhaka",
        image: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?auto=format&fit=crop&w=800&q=80",
        description: "Kiwi fruit with a refreshing, tangy taste.",
        category: "Other"
    },
    {
        name: "Dates",
        price: 360,
        seller: "Tanjila Begum",
        location: "Dhaka",
        image: "https://images.unsplash.com/photo-1710177213778-930725fda054?auto=format&fit=crop&w=800&q=80",
        description: "Naturally sweet dates.",
        category: "Other"
    },
    {
        name: "Green Apple",
        price: 300,
        seller: "Kamrul Hasan",
        location: "Dhaka",
        image: "https://images.unsplash.com/photo-1653715782431-0eec1ffdefe2?auto=format&fit=crop&w=800&q=80",
        description: "Crisp green apples with a refreshing taste.",
        category: "Other"
    },
    {
        name: "Lemon",
        price: 160,
        seller: "Tasnim Jahan",
        location: "Sylhet",
       image: "https://images.unsplash.com/photo-1582287104445-6754664dbdb2?auto=format&fit=crop&w=800&q=80",
        description: "Fresh lemons for drinks and cooking.",
        category: "Citrus"
    },
    {
        name: "Blueberry",
        price: 550,
        seller: "Shakib Ahmed",
        location: "Dhaka",
        image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&w=800&q=80",
        description: "Small, juicy blueberries with a sweet taste.",
        category: "Berries"
    },
    {
        name: "Avocado",
        price: 400,
        seller: "Mariya Islam",
        location: "Dhaka",
        image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=800&q=80",
        description: "Creamy avocados for salads and snacks.",
        category: "Other"
    },
    {
        name: "Plum",
        price: 340,
        seller: "Rafiq Ahmed",
        location: "Dhaka",
        image: "https://images.unsplash.com/photo-1758917641104-6fd6c3e2be16?auto=format&fit=crop&w=800&q=80",
        description: "Juicy plums with a sweet and tangy flavour.",
        category: "Other"
    },
    {
        name: "Peach",
        price: 420,
        seller: "Priya Das",
        location: "Dhaka",
        image: "https://images.unsplash.com/photo-1642372849486-f88b963cb734?auto=format&fit=crop&w=800&q=80",
        description: "Soft, juicy peaches with a sweet aroma.",
        category: "Other"
    }
];

var cartItems = [];

try {
    var savedCart = localStorage.getItem("gardenFreshCart");

    if (savedCart) {
        var parsedCart = JSON.parse(savedCart);

        if (Array.isArray(parsedCart)) {
            cartItems = parsedCart;
        }
    }
} catch (error) {
    console.error("Could not load cart items:", error);
    cartItems = [];
}

function saveCart() {
    try {
        localStorage.setItem(
            "gardenFreshCart",
            JSON.stringify(cartItems)
        );
    } catch (error) {
        console.error("Could not save cart items:", error);
    }
}
