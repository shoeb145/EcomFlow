export const calcSubtotal = (data) => {
  let subTotal = 0;

  for (let i = 0; i <= data.length - 1; i++) {
    let qt = data[i].quantity;
    let p = data[i].price;
    let news = qt * p;

    subTotal += news;
  }
  return subTotal;
};

export const taxAmount = (data) => {
  let taxAmount = data * (10 / 100);
  return taxAmount;
};
export function format2Decimals(str) {
  return parseFloat(str).toFixed(2);
}
export function shippingPrice(value) {
  return value > 0 ? 20 : 0;
}

export const total = (data) => {
  let subTotal = calcSubtotal(data);

  let taxAmounts = taxAmount(calcSubtotal(data));

  let shipping = shippingPrice(data);
  let total = subTotal + taxAmounts + shipping;

  return total;
};
