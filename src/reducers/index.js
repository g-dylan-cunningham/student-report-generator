import { combineReducers } from 'redux';

// import todos from './todos'
// import counter from './counter'
// import { store } from '../index';



const initialState = {
    fileUploaded: [],
    verbiage: {}
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
            let keys = Object.keys(action.payload[0])
            let verbiageArr = keys.filter(key => {
                if(key !== "id" && key !== "name" && key !== "pronoun") {
                    return key;
                }
                })
                
            let verbiageObj = {}
                for(let i = 0; i < verbiageArr.length; i++ ) {
                    let keyName = verbiageArr[i] 
                    verbiageObj[verbiageArr[i]] = {
                        1: "is poor",
                        2: "is Okay",
                        3: "is good"
                    }
                }
            newState.verbiage = verbiageObj;
            return {
                ...newState
            }
        case "CONFIGURE_SCORING_VERBIAGE":
            console.log("CONFIGURE_SCORING_VERBIAGE", action.payload)
            let newVerbiage = {...action.payload};
            newState.verbiage = newVerbiage;
            return {
                ...newState
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