function calculateTotal({ items, tax = 0, discount = 0 }) {
  let totalValue = 0;
  items.forEach((item) => {
    totalValue += item;
  });
  totalValue += totalValue * tax;
  totalValue -= totalValue * discount;
  return totalValue.toFixed(2);
}

const items = [10, 20, 30];
const tax = 0.05;
const discount = 0.1;

const totalAmount = calculateTotal({ items, tax, discount });
console.log(`Total: ${totalAmount}`);
