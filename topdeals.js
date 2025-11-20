const topdealslist = [
  {
    title: "Projector",
    price: "From ₹ 6990",
    image:
      "https://rukminim1.flixcart.com/image/240/240/xif0q/projector/h/e/n/atom-2x-10-5-ei9027-led-projector-egate-original-imahhsqm5ctgzae3.jpeg?q=60",
  },
  {
    title: "Best Selling mobile Speaker",
    price: "From ₹ 499",
    image:
      "https://rukminim1.flixcart.com/image/240/240/kcf4lu80/speaker/mobile-tablet-speaker/h/u/f/srs-xb23-sony-original-imaftk66vjxp86h5.jpeg?q=60",
  },
  {
    title: "Monitors",
    price: "From ₹ 6599",
    image:
      "https://rukminim1.flixcart.com/image/240/240/xif0q/monitor/i/q/k/-original-imahbzhcdvc6gkhu.jpeg?q=60",
  },
  {
    title: "Monitor",
    price: "From ₹ 8279",
    image:
      "https://rukminim1.flixcart.com/image/240/240/xif0q/monitor/w/i/f/-original-imahagy2cefszqgy.jpeg?q=60",
  },
  {
    title: "Top Mirroeless Camera",
    price: "Shop Now!",
    image:
      "https://rukminim1.flixcart.com/image/240/240/xif0q/camera/s/o/y/na-digital-kids-camera-20mp-1080p-32gb-card-supported-mini-original-imagy2znwq4uy4z8.jpeg?q=60",
  },
  {
    title: "Fastrack SmartWatch",
    price: "From ₹ 1,399",
    image:
      "https://rukminim1.flixcart.com/image/240/240/xif0q/smartwatch/5/v/s/-original-imagxrhetgfuebnn.jpeg?q=60",
  },
  {
    title: "Best true Wireless HeadPhone",
    price: "Grab Now",
    image:
      "https://rukminim1.flixcart.com/image/240/240/l58iaa80/headphone/k/z/m/nord-buds-ce-oneplus-original-imagfyk4hyvgg6ze.jpeg?q=60",
  },
  {
    title: "Printer",
    price: "From ₹ 2339",
    image:
      "https://rukminim1.flixcart.com/image/240/240/xif0q/printer/s/8/d/-original-imafkykednshkhx5.jpeg?q=60",
  },
];

const topdeals = document.getElementById("topdeals");

topdealslist.forEach((item) => {
  const card = document.createElement("div");
  card.classList.add("topdeals-card");
  card.innerHTML = `
    <img src="${item.image}" alt="${item.title}" />
    <h3>${item.title}</h3>
    <p>${item.price}</p>
  `;

  // Save product to sessionStorage & redirect
  card.addEventListener("click", () => {
    sessionStorage.setItem("topdealProduct", JSON.stringify(item));
    window.location.href = "productdetail.html";
  });

  topdeals.appendChild(card);
});
