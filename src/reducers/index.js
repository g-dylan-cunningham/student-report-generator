import { combineReducers } from 'redux';

// import todos from './todos'
// import counter from './counter'
// import { store } from '../index';



const initialState = {
    fileUploaded: [],
    verbiage: []
}

const data = (state = initialState.fileUploaded, action) => {
    let newState = {
        ...state
    }
    switch(action.type) {
        case "UPLOAD":
        console.log("uploaded data reducter", action.payload);
        
        newState.fileUploaded = [...action.payload]
            return {
                ...newState
            }
        case "UPDATE":
        // state[action.payload[0]][action.payload[1]]
            console.log("payload", action.payload );
            let value = action.payload[2];
            let row = action.payload[1];
            let field = action.payload[0]
            let arr = [...state.fileUploaded];
            console.log("arr", arr, arr[row][field] );
            arr[row][field] = value;
            
            newState.fileUploaded = arr;

            return {
                ...newState
            }
        case "GENERATE_DEFAULT_VERBIAGE":
            console.log("GENERATE_DEFAULT_VERBIAGE reducter", action.payload)
            return {
                ...state
            }
        default: 
            return {
                ...state
            }
    }
}

export default combineReducers({
    data
//   counter
})