export function priceFormat(price = 0, currency = 'Rp') {
  let newPrice = price;
  if (newPrice !== null) {
    newPrice = newPrice.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.');
    return `${currency} ${newPrice}`;
  }
  return '';
}