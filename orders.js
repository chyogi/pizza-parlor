// orders.js
const orders = [
  {
    id: 1,
    crust: "Hand",
    toppings: ["pepperoni", "green pepper"],
    instructions: "extra cheese"
  },
  {
    id: 2,
    crust: "Thin",
    toppings: ["Black Olives", "green pepper"],
    instructions: "half green peppers"
  }
]

export const getOrders = () => {
  // Add logic here to return a copy of your orders
}
document.addEventListener("click", (e) => {
  if (e.target.id === "submitOrder") {
    // Need logic to get all the values from the form, 
		// format them into an object and add that object to the `orders` array in `orders.js`
  }
});