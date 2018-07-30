import * as types from '../actions/all-types'

export default (state = [], action) => {
    switch (action.type) {
        case types.ADD_SHAPE :
            return [...state, action.payload];
        case types.REMOVE_SHAPE :
            return [...state.filter((shape, i) => action.payload !== i)];
        // case types.CALCULATE_SHAPE_AREA :
        //     console.log(action.payload);
        //     return action.payload;

        default:
            return state
    }

}
