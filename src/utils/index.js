export function checkCart(data) {
  if (data.length == 0) {
    return;
  }
  let modifi;
  for (let i = 0; i <= data.length; i++) {
    for (let z = i + 1; z <= data.length - 1; z++) {
      if (data[i].data.id == data[z].data.id) {
        modifi = data.slice(0, z).concat(data.slice(z + 1));
      }
    }
    return modifi;
  }
}
