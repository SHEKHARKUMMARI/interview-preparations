const debounce = (func, d) => {
  let timeId;
  return () => {
    clearTimeout(timeId);
    timeId = setTimeout(() => {
      func();
    }, d);
  };
};

const throttle = (func, d) => {
  let isTimeEllapsed = true;

  return () => {
    if (isTimeEllapsed) {
      func();
      isTimeEllapsed = false;

      setTimeout(() => {
        isTimeEllapsed = true;
      }, d);
    }
  };
};
let count = 0;

document.addEventListener("DOMContentLoaded", function () {
  const searchEle = document?.getElementById("search");
  searchEle.addEventListener("keyup", () => debounceFun());
});

const debounceFun = debounce(() => {
  const searchEle = document?.getElementById("search");
  count++;
  console.log(count, searchEle.value);
}, 200);

const throttleFun = throttle(() => {
  count++;
  console.log(count);
}, 1000);
window.addEventListener("resize", () => throttleFun());
