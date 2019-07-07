import { combineReducers } from 'redux'
// import todos from './todos'
// import counter from './counter'
// import { store } from '../index';



const initialState = {
    fileUploaded: []
}

const data = (state = initialState.fileUploaded, action) => {
    switch(action.type) {
        case "UPLOAD":
        console.log("uploaded data reducter", action)
            return [
                ...state,
                ...action.payload
            ]
        case "UPDATE":
        // state[action.payload[0]][action.payload[1]]
            console.log("payload", action.payload );
            let value = action.payload[2];
            let row = action.payload[1];
            let field = action.payload[0]
            let arr = [...state];
            console.log("arr", arr, arr[row][field] );
            arr[row][field] = value;
            return [
                ...arr
            ]
        default:
        return [
            ...state
        ]
    }
}

export default combineReducers({
    data
//   counter
})