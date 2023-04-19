const itemsPrice = [10, 20, 30];
const tax = 0.05;
const discount = 0.1;

function calculateTotal(items, tax, discount) {
  let valorTotal = 0;
  for (let i = 0; i < itemsPrice.length; i++) {
    valorTotal += itemsPrice[i];
  }
  valorTotal += valorTotal * tax;
  if (discount) {
    valorTotal -= valorTotal * discount;
  }
  return `Total: ${valorTotal.toFixed(2)}`;
}

const totalPrice = calculateTotal(itemsPrice, tax, discount);
totalPrice;
