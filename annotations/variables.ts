let apples: number = 10;
let speed: string = 'fast';
let hasName: boolean = true
let nothingMuch: null = null
let nothing: undefined = undefined

// built in
let date: Date = new Date();

//Array
let colors: string[] = ['blue', 'red'];
let myNumbers: number[] = [1, 2, 3]
let truths: boolean[] = [true, true]

// classes
class Car {

}

let maruti: Car = new Car()

// object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
}

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
}

// When to use type annotations
// Funcion returns any
const json = '{"x":10,"y":20}'
const coordinates: { x: number; y: number } = JSON.parse(json)
console.log(coordinates)