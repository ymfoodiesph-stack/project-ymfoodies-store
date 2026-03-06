const apiURL = "https://script.google.com/macros/s/AKfycbwj-C1zEkRmH-j5LduewJJnV9MHfvhfUEuDQSvrZenAbOoqaW9rDvtbjoOMoT3KkFxv/exec";

fetch(apiURL)
.then(res => res.json())
.then(products => {

const container = document.getElementById("product-list");

products.forEach(product => {

container.innerHTML += `
<div class="product">

<h3>${product.name}</h3>

<p>Price: ₱${product.price}</p>

<p>Status: ${product.status}</p>

<button>Order</button>

</div>
`;

});

});
