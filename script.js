const products = [
  {
    name: "Minutes",
    img: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/e00302d428f5c7be.png?q=100",
  },
  {
    name: "Mobiles & Tablets",
    img: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/5f2ee7f883cdb774.png?q=100",
  },
  {
    name: "TV & Appliances",
    img: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/e90944802d996756.jpg?q=100",
  },
  {
    name: "Flight Bookings",
    img: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/3c647c2e0d937dc5.png?q=100",
  },
  {
    name: "Grocery",
    img: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/e730a834ad950bae.png?q=100",
  },
];

const wrapper = document.getElementById("productwrapper");

products.forEach((items) => {
  wrapper.innerHTML += `
    <div class="productContainer">
      <img
        src="${items.img}"
        alt="Product"
      />
      <p>${items.name}</p>
    </div>
    `;
});
