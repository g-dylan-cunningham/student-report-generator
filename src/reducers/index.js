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