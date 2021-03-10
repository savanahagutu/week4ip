var pizzaForm = document.getElementById("pizza")
const orderContent = document.getElementById("order-content");
function Pizza(type, size, crust, toppings, number) {
    this.type = type;
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.number = number; 
}

pizzaForm.addEventListener("submit", function (e) {
    e.preventDefault(); 
    let size = document.getElementById("size").value;
    let crust = document.getElementById("crust").value;
    let toppings = document.getElementById("toppings").value;
    let number= document.getElementById("number").value;
    let type = document.getElementById("type").value;
    let pizza = new Pizza(type, size, crust, toppings, number)
        console.log(pizza)
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <th scope="row">${pizza.type}</th>
      <td>${pizza.size}</td>
      <td>${pizza.crust}</td>
      <td>${pizza.number}</td>
    `;
    orderContent.appendChild(tr);
    })

    this.total = function () {
        let pizzaPrice = [];
        pizzaPrice.push(this.price);
        pizzaPrice.reduce((a, b) => a + b, 0);
      };
      this.price = function () {
        let smallPizza = 1000;
        let mediumPizza = 1200;
        let largePizza = 1400;
        if (this.size == "Small" && this.topping != 0) {
          return smallPizza + 150;
        }
        if (this.size == "Medium" && this.topping != 0) {
          return mediumPizza + 150;
        }
        if (this.size == "Large" && this.topping != 0) {
          return largePizza + 150;
        }
        if (this.size == "Small") {
          return smallPizza;
        }
        if (this.size == "Medium") {
          return mediumPizza;
        }
        if (this.size == "Large") {
          return largePizza;
        }
      };