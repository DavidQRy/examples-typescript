// enums in js
/* const ERROR_TYPES = {
    NOT_FOUND: 'notFound',
    UNAUTHORIZED: 'unauthorized',
    FORBIDDEN: 'forbidden'
}


function getMessage (typeError){
    if (typeError === ERROR_TYPES.NOT_FOUND) {
        console.log('the resource cannot be found')
    }else if (typeError === ERROR_TYPES.UNAUTHORIZED){
        console.log('you do not have permission to access this resource')
    }else if (typeError === ERROR_TYPES.FORBIDDEN) {
        console.log('you do not have permission to access this resource')
    }
} */

// Enums en typescript
enum ERROR_TYPES {
    NOT_FOUND,
    UNAUTHORIZED,
    FORBIDDEN
}


function getMessage (typeError : ERROR_TYPES){
    if (typeError === ERROR_TYPES.NOT_FOUND) {
        console.log('the resource cannot be found')
    }else if (typeError === ERROR_TYPES.UNAUTHORIZED){
        console.log('you do not have permission to access this resource')
    }else if (typeError === ERROR_TYPES.FORBIDDEN) {
        console.log('you do not have permission to access this resource')
    }
}

// Type Assertions

const canvas = document.getElementById('canvas') // as HTMLCanvasElement 

// null if you can't find it
//HTMLElement if you find it
//We need HTMLCanvasElement

// ??? how does TypeScript know that you are actually retrieving a <canvas/> element?

//It is inference --> typecript realizes that inside the if
//Only the canvas will be HTMLCanvasElement
if (canvas !== null && canvas instanceof HTMLCanvasElement) {
    const ctx = (canvas /* as HTMLCanvasElement */).getContext('2d')
}

// typeof --> by types
// strings, boleands, numbers, null, undifined, symbol

// instanceof --> by instances
// new 'Class'

