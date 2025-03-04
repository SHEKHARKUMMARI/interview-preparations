const multiply = (a, b, c) => a * b * c;
const closuresMethod = (a) => (b) => (c) => a * b * c;

const myMultiply = multiply.bind(undefined, 3, 1, 4);

Function.prototype.myBind = function (...args) {
  let obj = this;
  args1 = args.slice(1);
  return function (...args2) {
    return obj.apply(args[0], [...args1, ...args2]);
  };
};
const mybindFun = multiply.myBind(undefined, 3, 1, 4);
console.log("testing mtybind", mybindFun());
console.log(myMultiply());
