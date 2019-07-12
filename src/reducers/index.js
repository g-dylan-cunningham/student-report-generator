import { combineReducers } from 'redux';


const initReportState = {
    report: []
}
const report = (state = initReportState, action ) => {
    let newStateGenerateReport = {
        ...state
    }

    switch(action.type) {
        case "GENERATE_REPORT":

            newStateGenerateReport.report = action.payload;
            return {
                ...newStateGenerateReport
            }


    default: 
        return {
            ...state
        }
    }
}

const initialVerbiageState = {
    verbiage: {}
}

const verbiage = (state = initialVerbiageState, action) => {
    switch(action.type) {
        case "GENERATE_DEFAULT_VERBIAGE":
        console.log("GENERATE_DEFAULT_VERBIAGE1", state)
            let newStateGenerateDefaultVerbiage = {
                ...state
            }
            let keys = Object.keys(action.payload[0])
            let verbiageArr = keys.filter(key => {
                if(key !== "id" && key !== "name" && key !== "pronoun") {
                    return key;
                }
            })
                
            let verbiageObj = {}
                for(let i = 0; i < verbiageArr.length; i++ ) {
                    verbiageObj[verbiageArr[i]] = {
                        1: "is poor",
                        2: "is okay",
                        3: "is good"
                    }
                }
                newStateGenerateDefaultVerbiage.verbiage = verbiageObj;
            console.log("GENERATE_DEFAULT_VERBIAGE2", newStateGenerateDefaultVerbiage, state)
            return {
                ...newStateGenerateDefaultVerbiage
            }
        case "CONFIGURE_SCORING_VERBIAGE":
            let newStateConfigureScoringVerbiage = {
                ...state
            }
            console.log("CONFIGURE_SCORING_VERBIAGE", action.payload)
            let newVerbiage = {...action.payload};
            newStateConfigureScoringVerbiage.verbiage = newVerbiage;
            return {
                ...newStateConfigureScoringVerbiage
            }
        default: 
            return {
                ...state
            }
    }
}








const initialDataState = {
    fileUploaded: []
}

const data = (state = initialDataState, action) => {

    switch(action.type) {
        case "UPLOAD":
        // debuggerlet 
        let newStateUpload = {
            ...state
        }
        newStateUpload.fileUploaded = [...action.payload]
            return {
                ...newStateUpload
            }
        case "UPDATE":
        // state[action.payload[0]][action.payload[1]]
            // console.log("payload", action.payload );

            let newStateUpdate = {
                ...state
            }
            let value = action.payload[2];
            let row = action.payload[1];
            let field = action.payload[0]
            let arr = newStateUpdate.fileUploaded;
            arr[row][field] = value;
            
            newStateUpdate.fileUploaded = arr;

            return {
                ...newStateUpdate
            }



        default: 
            return {
                ...state
            }
    }
}

export default combineReducers({
    data,
    verbiage,
    report
})