console.log("connected");

const loadAllProducts = async () => {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const data = await res.json();
  // console.log(data);

  const productsContainer = document.querySelector("#products-container");
  // console.log(productsContainer);
  data.forEach((product) => {
    console.log(product);
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
    <img
      class="product-img"
      src="${product.image}"
      alt=""
    />
    <h3>${product.title.slice(0,15)}</h3>
    <div class="price-category">
      <h4>price: ${product.price}</h4>
      <button class="category-btn" disabled>${product.category}</button>
    </div>
    <hr />
    <div class="price-container">
      <div class="icon-container">
        <img class="icon" src="./image/view.png" alt="" />
        <h4>${product.rating.count}</h4>
      </div>
      <div class="icon-container">
        <img class="icon" src="./image/star.png" alt="" />
        <h4>${product.rating.rate}</h4>
      </div>
      <button class="add-btn">Add To Cart</button>
    </div>

    `;
    productsContainer.appendChild(div);
  });
};

// function invocation
loadAllProducts();
