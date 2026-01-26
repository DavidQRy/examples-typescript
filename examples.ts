// inference
// How a and b infer that they are numbers without being told anything

const a = 1 
const b = 2
const c = a + b
//c will also be a number

let textString = 'Hello'

textString.toLocaleLowerCase()

// ❌ textString = 2
// ❌ textString.toLocaleLowerCase()
// ❌ textString.nonExistentProperty

// any
let obj: any = {
    x: 0
}

//❌ obj.foo()

//❌ obj()

obj.bar = 100
obj= "Hello"

const n : number = obj;


// functions
/* function greet(name: string){
    console.log(`Hola ${name}`)
}

greet('Pepe')
greet(2) // ❌ */

/* function greet({name, age}: {name: string, age: number}) {
    console.log(`Hello ${name}, you has ${age} age old`)
}

greet({name: "David", age: 2}) */

function greet(persona: {name: string, age: number}){
    const { name, age } = persona
    console.log(`Hello ${name}, you has ${age} age old`)
    return age
}


// ❌  let username: string
// ❌ username = greet({name: "David", age: 18})


let age: number
age = greet({name: "David", age: 18})

const sayHiFromFunction = (fn: (name: string) => void) => {
    return fn('David')
}

const sayHi = (name: string) => {
    console.log(`Hello ${name}`)
    return name
}
sayHiFromFunction(sayHi)

// Tipes the arrow functions
const sum = (a: number, b: number): number =>{
    return a + b
}

const subtract: (a: number, b: number) => number = (a, b) =>{
    return a - b
}

//never 
function throwError(message: string): never{
    if (message) throw new Error(message);
    throw new Error(message);
    // process.exit(1)

}


function logMessage(message: string): void{
    console.log(message)
}

// inference anonymous functions based on context

const avangers = ['Spiderman', 'Hulk', 'Avengers']

avangers.forEach((avanger) =>{
    console.log(avanger.toUpperCase())
})

//objetos

/* let hero = {
    name: 'thor',
    age: 1500
}

function createHero(hero: Hero): Hero{
    const { name, age } = hero
    return {
        id: crypto.randomUUID(),
        name,
        age,
        isActive: true
    }
}

const thor = createHero({ name: 'Thor',age: 1500})
thor.powerScale = "galactic"
console.log(thor.isActive)

// thor.id?.toString()
// thor.id = 43546503563416

// Types Alias

type Hero = {
    readonly id?: heroId
    name: string
    age: number
    isActive?: boolean
    powerScale?: HeroPowerScale
}

type heroId = `${string}-${string}-${string}-${string}-${string}`

type HexaDecimalColor = `#${string}`

type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal' | 'omnipresent'

// ❌ const color: HexaDecimalColor = '0033ff'
const colorTwo: HexaDecimalColor = '#0033ff' */
 
// Intersection Types

/* type heroId = `${string}-${string}-${string}-${string}-${string}`
type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal' | 'omnipresent'

type HeroBasicInfo = {
    name: string
    age: number
}

type HeroProperties = {
    readonly id?: heroId
    isActive?: boolean
    powerScale?: HeroPowerScale
}

type Hero = HeroBasicInfo & HeroProperties

let hero: Hero = {
    name: 'Thor',
    age: 1500
}
function createHero(input: HeroBasicInfo): Hero{
    const { name, age } = hero
    return {
        id: crypto.randomUUID(),
        name,
        age,
        isActive: true
    }
}

const thor = createHero({ name: 'Thor',age: 1500})
thor.powerScale = "galactic"

console.log(thor) */

// Types Index

/* type HeroProperties = {
    isActive: boolean
    address: {
        planet: string,
        city: string
    }
}

const addressHero : HeroProperties['address'] = {
    planet: 'Earth',
    city: 'Madrid'
} */

// type from value

const address = {
    planet: 'Earth',
    city: 'Madrid'
}

type Addres = typeof address

const addressHero: Addres = {
    planet: 'Earth',
    city: 'Medellin'
}

// type from function return

function createAddress() {
    return {
        planet: 'Earth',
        city: 'Bogota'
    }
}

type AddressTwo =  ReturnType<typeof createAddress>


// Arrays
// const languajes: Array<string> = []

// const languajes: string[] = []

/* const languajes: (string | number)[] = []
languajes.push('JavaScript')
languajes.push('Golang')
languajes.push(2)

type heroId = `${string}-${string}-${string}-${string}-${string}`
type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal' | 'omnipresent'

type HeroBasicInfo = {
    name: string
    age: number
}

const herosWithBasicInfo: HeroBasicInfo[] = []  */

/*
[
    ['X', 'O', 'X'],
    ['O', 'X', 'O'],
    ['X', '', 'O']
] 
*/

type CellValue = 'X' | 'O' | ''

type GameBoard = [
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue]
] // <-- Tuples

const gameBoard: GameBoard = [
    ['X', 'O', 'X'],
    ['O', 'X', 'O'],
    ['X', '', 'O']
]

gameBoard[0][1] = 'O'