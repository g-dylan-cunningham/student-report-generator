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
            console.log("update reducer",  state[action.payload[0]][action.payload[1]]);
            let arr = [...state];

            return [
                ...state
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