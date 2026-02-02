// File '.mts' so that it supports module syntax
// Fetching of dates in typescript

import { GitHubAPIResponse } from "./types/GitHubAPIResponse"

const API_URL = 'https://api.github.com/search/repositories?q=javascript'

const response = await fetch(API_URL)

if (!response.ok) {
    throw new Error('Request failed')
}

/* type APIResponse = {
    items: object[]
}
 */
const data: GitHubAPIResponse = await response.json() as GitHubAPIResponse


const repos = data.items.map((repo) => {
    console.log(repo)
    repo.archived
    return {
        name: repo.name,
        id: repo.id,
        url: repo.html_url
    }
})
//interface

// interface Hero

interface Hero {
 id: string
 name: string
 age: number
 greet: () => void
}

const hero: Hero = {
    id: 'uuid',
    name: 'Spiderman',
    age: 330,
    greet: () => {
        console.log('Hello, I am Spiderman')
    }
}

// nested interfaces 

interface Product {
    id: number
    name: string
    price: number
    quantity: number
}


interface ShoppingCart {
    totalPrice: number
    products: Product[]
}

const cart: ShoppingCart = {
    totalPrice: 100,
    products: [
        {
            id: 1,
            name: 'phone',
            price: 50,
            quantity: 1
        },
        {
            id: 2,
            name: 'headphones',
            price: 25,
            quantity: 2
        }
    ]
}
// interface extens
interface Sneaker extends Product {
    size : number
}
interface ShoppingCartTwo {
    totalPrice: number
    products: (Product| Sneaker)[]
}
const cartTwo: ShoppingCartTwo = {
    totalPrice: 100,
    products: [
        {
            id: 1,
            name: 'sneakers',
            price: 50,
            quantity: 1,
            size: 38
        },
        {
            id: 2,
            name: 'headphones',
            price: 25,
            quantity: 2
        }
    ]
}

// interface functions
/* 
interface CartOps {
    add: (product: Product) => void
    remove: (id: number) => void
    clear: () => void
} */

interface CartOps {
    add(product: Product): void
    remove(id: number): void
    clear(): void
}

// Narrowing

function getLength(object:number | string) {
    if (typeof object === 'string') {
        return object.length
    }
    return object.toString().length
}

getLength(1)

/* interface Mario {
    company: 'nintendo',
    name: string,
    jump: () => void
}

interface Sonic {
    company: 'sega',
    name: string,
    run: () => void
}

type Character = Mario | Sonic

function play(character: Character) {
    if (character.company === 'nintendo') {
        character.jump()
        return
    }
    // I'll probably get here when it's Sony
    character.run()
} */
interface Mario {
    name: string,
    jump: () => void
}

interface Sonic {
    name: string,
    run: () => void
}

type Character = Mario | Sonic

// Type guard
/*
let me check if character is sonic
and this function determines whether it is sonic or not 
*/

function checkIsSonic(character: Character): character is Sonic {
    return (character as Sonic).run !== undefined
}

function play(character: Character){
    if(checkIsSonic(character)){
        character.run()
    }
}
// never
function fn (x:string | number){
    if (typeof x === 'string') {
        // do something
        // x is string
        x.toUpperCase()
    }else if (typeof x === 'number') {
        // do something
        // x is number
        x.toFixed(2)
    } else {
        x // never
    }
}



class Avenger implements IAvenger{
    // readonly name: string
    // private powerScore: number
    // private readonly wonBattles: number = 0
    // protected age: number = 0
    name: string
    powerScore: number
    wonBattles: number = 0
    age: number = 0

    constructor(name: string, powerScore: number){
        this.name = name
        this.powerScore = powerScore
    }

    battle(enemy: IAvenger, win: boolean){
        if (win) {
            this.wonBattles++,
            this.powerScore += 5
        } else {
            this.powerScore -= 5
        }
    }

    
    public get fullName() : string {
        return `${this.name}, of power ${this.powerScore}`
    }

    set power (newPower: number){
        if (newPower <= 100) {
            this.powerScore = newPower
        } else {
            throw new Error('Power score cannot be more than 100')
        }
    }
    
}

const avenger = new Avenger('Spidey', 80)
// avenger.name = 'Hulk' // <-- this does not make sense