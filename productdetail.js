let allProducts = []; // Global variable for search functionality

async function getdata() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    allProducts = data; // store globally for search
    displayProducts(data); // render products initially
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Function to render products
function displayProducts(products) {
  const fetchdata = document.getElementById("productdata");

  if (products.length === 0) {
    fetchdata.innerHTML = "<p>No products found.</p>";
    return;
  }

  const html = products
    .map(
      (item) => `
        <div class="product-card">
          <img class="product-img" src="${item.image}" alt="${item.title}" />
          <h4>${item.title}</h4>
          <p style="color: green; font-size: large;">${item?.rating?.rate}⭐️</p>
          <p>₹${item.price}</p>
        </div>
      `
    )
    .join("");

  fetchdata.innerHTML = html;
}

// Search functionality
const searchBox = document.querySelector(".search-box");
searchBox.addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase();

  const filteredProducts = allProducts.filter((item) =>
    item.title.toLowerCase().includes(searchTerm)
  );

  displayProducts(filteredProducts);
});

// Call the function to fetch data initially
getdata();
