const buttonEle = document?.getElementById("click");

function debounce(func, time) {
  let tiemId;
  return (...args) => {
    if (tiemId) {
      clearTimeout(tiemId);
    }
    tiemId = setTimeout(() => {
      func.apply(this, args);
    }, time);
  };
}

function handleSearch(e) {
  console.log("test", e?.value);
}
const dFun = debounce(handleSearch, 1000);
