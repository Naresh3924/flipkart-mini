const productlabel = [
  {
    image:
      "https://rukminim1.flixcart.com/fk-p-flap/3240/540/image/1067cc89e93a3b46.jpg?q=60",
  },
  {
    image:
      "https://rukminim1.flixcart.com/fk-p-flap/3240/540/image/1f9c9ad24c2bc37b.jpg?q=60",
  },
  {
    image:
      "https://rukminim1.flixcart.com/fk-p-flap/3240/540/image/b1317a13ec02a499.jpg?q=60",
  },
  {
    image:
      "https://rukminim1.flixcart.com/fk-p-flap/3240/540/image/1338bd4fc60390d8.jpg?q=60",
  },
  {
    image:
      "https://rukminim1.flixcart.com/fk-p-flap/3240/540/image/74f0ad81e44e6e6f.jpg?q=60",
  },
  {
    image:
      "https://rukminim1.flixcart.com/fk-p-flap/3240/540/image/66faf3950cda0b7a.png?q=60",
  },
];

const track = document.getElementById("ProductCarousal");

track.innerHTML = productlabel
  .map((item) => `<img  src="${item.image}" />`)
  .join("");

let index = 0;

function showSlide() {
  track.style.transform = `translateX(${-index * 100}%)`;
}

// Next button
document.querySelector(".next").addEventListener("click", () => {
  index = (index + 1) % productlabel.length;
  showSlide();
});

// Previous button
document.querySelector(".prev").addEventListener("click", () => {
  index = (index - 1 + productlabel.length) % productlabel.length;
  showSlide();
});

// Auto slide (every 3 sec)
setInterval(() => {
  index = (index + 1) % productlabel.length;
  showSlide();
}, 3000);
