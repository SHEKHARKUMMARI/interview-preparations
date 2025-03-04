function randomFunc() {
  for (var i = 0; i < 2; i++) {
    fun(i);
  }
}
function fun(i) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
randomFunc();
