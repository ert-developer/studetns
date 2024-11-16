// const api = "https://fakestoreapi.com/products";
// const getProduct = document.querySelector("#getproducts");
// const container = document.querySelector("#container");
// let pricelist = [];
// getProduct.addEventListener("click", async () => {
//   const data = await fetch(api);
//   const result = await data.json();
//   for (let i = 0; i < result.length; i++) {
//     const { category, description, image, price, rating, title } = result[i];
//     // let r = Math.floor(Math.random() * 255);
//     // let g = Math.floor(Math.random() * 255);
//     // let b = Math.floor(Math.random() * 255);
//     const html = `
//         <div style="border: 1px solid black; text-align: center; padding: 10px; margin: 15px; border-radius: 10px;">
//             <h1>${title}</h1>
//             <img width:'75%' height='200px'  src=${image} alt='image..'/>
//             <h5>Price:$${price}</h5>
//             <h5>Rating:${rating.rate}</h5>
//             <h5>Category:${category}</h5>
//             <p><b>About:</b>${description}</p>
//             <button class="add" style="background-color:aqua; border: 1px solid black; text-align: center; padding: 8px;  border-radius: 3px;">Add to cart</button>
//         </div>`;

//     // pricelist.push(price);
//     const btns = document.querySelector(".add");
//     console.log(btns);
//     btns.forEach((element, index) => {
//       element.addEventListener("click", () => {
//         alert("good", index);
//       });
//     });

//     container.innerHTML += html;
//   }
// });

const api = "https://fakestoreapi.com/products";
const getProduct = document.querySelector("#getproducts");
const container = document.querySelector("#container");

getProduct.addEventListener("click", async () => {
  const data = await fetch(api);
  const result = await data.json();

  container.innerHTML = ""; // Clear previous content

  result.forEach((product, index) => {
    const { category, description, image, price, rating, title } = product;
    const html = `
      <div style="border: 1px solid black; text-align: center; padding: 10px; margin: 15px; border-radius: 10px;">
        <h1>${title}</h1>
        <img style="width: 75%; height: 200px;" src="${image}" alt="image"/>
        <h5>Price: $${price}</h5>
        <h5>Rating: ${rating.rate}</h5>
        <h5>Category: ${category}</h5>
        <p><b>About:</b> ${description}</p>
        <button class="add" data-price="${price}" style="background-color: aqua; border: 1px solid black; text-align: center; padding: 8px; border-radius: 3px;">Add to cart</button>
      </div>`;

    container.innerHTML += html;
  });

  const buttons = container.querySelectorAll(".add");
  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const productPrice = event.target.getAttribute("data-price");
      alert(`Product added to cart. Index: Price: $${productPrice}`);
    });
  });
});
