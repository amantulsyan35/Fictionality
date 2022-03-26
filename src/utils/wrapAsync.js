export function wrapAsync(fn) {
  return function (product) {
    fn(product).catch((error) => console.log(error));
  };
}
