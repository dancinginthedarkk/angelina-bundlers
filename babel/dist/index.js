"use strict";

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// spread
const obj1 = {
  hello: "hello"
};
const obj2 = {
  bye: "bye"
};
const objSpread = _objectSpread(_objectSpread({}, obj1), obj2);
/**
 * После транспиляции Babel преобразует этот код в более старый синтаксис, который поддерживается в более старых версиях JavaScript.
 * Транспилированный код включает в себя функцию _objectSpread, которая служит для объединения свойств объектов.
 * _objectSpread - это функция, которая принимает объект e (начальный объект) и произвольное количество дополнительных объектов, которые будут объединены с начальным объектом.
 */

// arrow function expression
const start = () => {
  console.log('start');
};
start();
// babel при транспиляции оставил код неизменным

const array = [1, 2, 3, 4, 5];

// Метод map
const mappedArray = array.map(num => num * 2);

// Метод filter
const filteredArray = array.filter(num => num % 2 === 0);

// Метод reduce
const sum = array.reduce((acc, num) => acc + num, 0);

// Метод forEach
array.forEach(num => {
  console.log(num);
});
// babel при транспиляции оставил код неизменным

// нулевой оператор объединения (??)
let text = null;
let text1 = "missing";
let result = text !== null && text !== void 0 ? text : text1;

// babel транспилирует этот код в -> let result = text !== null && text !== void 0 ? text : text1;
// babel транспилирует нулевой оператор объединения ?? в условный оператор (? :), проверяя, не является ли левый операнд (text) равным null или undefined

// опциональный оператор (.?)
const car = {
  type: "Fiat",
  model: "500",
  color: "white"
};
let name = car === null || car === void 0 ? void 0 : car.name;

// babel транспилирует этот код в -> let name = car === null || car === void 0 ? void 0 : car.name;
// Транспилированный код использует условную проверку на null или undefined

// default parameter values
const myFunction = function myFunction(x) {
  let y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  return x + y;
};
myFunction(5);
// babel транспилирует этот код в -> let y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
// Транспилированный код использует arguments для проверки наличия второго аргумента, иначе использует значение по умолчанию (10)

console.log(objSpread, result, name, mappedArray, filteredArray, sum);
