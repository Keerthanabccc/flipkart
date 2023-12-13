const products = [
    { id: 1, name: "Product 1", price: 19.99, image: "product1.jpg" },
    { id: 2, name: "Product 2", price: 29.99, image: "product2.jpg" },
    // Add more product data as needed
];

const productList = document.getElementById("product-list");

function renderProducts() {
    productList.innerHTML = "";
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        const productImage = document.createElement("img");
        productImage.classList.add("product-image");
        productImage.src = `images/${product.image}`;
        productImage.alt = product.name;

        const productName = document.createElement("div");
        productName.classList.add("product-name");
        productName.textContent = product.name;

        const productPrice = document.createElement("div");
        productPrice.classList.add("product-price");
        productPrice.textContent = `$${product.price.toFixed(2)}`;

        productCard.appendChild(productImage);
        productCard.appendChild(productName);
        productCard.appendChild(productPrice);

        productList.appendChild(productCard);
    });
}

// Initial render
renderProducts();
