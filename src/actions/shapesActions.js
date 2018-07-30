import * as types from './all-types'

export function addShape(shape) {
    return {
        type:types.ADD_SHAPE,
        payload:shape
    }
}

export function removeShape(i) {
    return{
        type: types.REMOVE_SHAPE,
        payload:i
    }
}

// export function calculateArea(area){
//     console.log(area);
//     return{
//         type:types.CALCULATE_SHAPE_AREA,
//         payload:area
//     }
// }