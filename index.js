let a = 1;
const onChange = () => {
  console.log("test", a);
  a++;
};

const debounce = (fn, d) => {
  let timeId;

  return () => {
    clearTimeout(timeId);
    timeId = setTimeout(() => {
      fn();
    }, d);
  };
};

const debounceFn = debounce(onChange, 300);

Function.prototype.myBind = function (...args) {
  const obj = this;
  const thisObj = args[0];
  const args1 = args.slice(1);
  return function (...args2) {
    obj.apply(thisObj, [...args1, ...args2]);
  };
};

function testFunction(a, b) {
  console.log(this.fName, " ", this.sName, a, b);
}
