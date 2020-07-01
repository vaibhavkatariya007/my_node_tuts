let name = {
  fName: 'Vaibhav',
  lName: 'Katariya',
};

let printName = function () {
  console.log(this.fName + ' ' + this.lName);
};

Function.prototype.myBind = function (...args) {
  let func = this;
  let params = args.slice(1);
  return function (...args2) {
    func.apply(args[0], [...params, ...args2]);
  };
};
