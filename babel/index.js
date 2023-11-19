// spread
const obj1 = {
    hello: "hello"
}

const obj2 = {
    bye: "bye"
}

const objSpread = {...obj1, ...obj2}
/**
 * После транспиляции Babel преобразует этот код в более старый синтаксис, который поддерживается в более старых версиях JavaScript.
 * Транспилированный код включает в себя функцию _objectSpread, которая служит для объединения свойств объектов.
 * _objectSpread - это функция, которая принимает объект e (начальный объект) и произвольное количество дополнительных объектов, которые будут объединены с начальным объектом.
 */

// arrow function expression
const start = () => {
    console.log('start')
}

start()
// babel при транспиляции оставил код неизменным

const array = [1, 2, 3, 4, 5];

// Метод map
const mappedArray = array.map((num) => num * 2);

// Метод filter
const filteredArray = array.filter((num) => num % 2 === 0);

// Метод reduce
const sum = array.reduce((acc, num) => acc + num, 0);

// Метод forEach
array.forEach((num) => {
    console.log(num);
})
// babel при транспиляции оставил код неизменным


// нулевой оператор объединения (??)
let text = null;
let text1 = "missing";
let result = text ?? text1;

// babel транспилирует этот код в -> let result = text !== null && text !== void 0 ? text : text1;
// babel транспилирует нулевой оператор объединения ?? в условный оператор (? :), проверяя, не является ли левый операнд (text) равным null или undefined


// опциональный оператор (.?)
const car = {type:"Fiat", model:"500", color:"white"};
let name = car?.name;

// babel транспилирует этот код в -> let name = car === null || car === void 0 ? void 0 : car.name;
// Транспилированный код использует условную проверку на null или undefined


// default parameter values
const myFunction = (x, y = 10) => {
    return x + y;
}

myFunction(5);
// babel транспилирует этот код в -> let y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
// Транспилированный код использует arguments для проверки наличия второго аргумента, иначе использует значение по умолчанию (10)

console.log(objSpread, result, name, mappedArray, filteredArray, sum)
