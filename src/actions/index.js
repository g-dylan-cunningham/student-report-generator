
// uploads the json converted from user's original csv
export const uploadFile = (file) => {
    // console.log('upload action,', file)
    return {
        type: "UPLOAD",
        payload: file
    }
}

// creates the default verbiage upon uploading file
export const generateVerbiageFromDefault = file => {
    console.log("generate default verbiage action")
    return {
        type: "GENERATE_DEFAULT_VERBIAGE",
        payload: file
    }
}

// updates the scores and imported data csv
export const update = (row, column, value) => {
    // console.log("update action", row, column, value)
    return {
        type: "UPDATE",
        payload: [row, column, value]
    }
}

// updates the verbiage that maps to scoring
export const replaceScoringVerbiage = (verbiage) => {
    // console.log("configure Field action", verbiage)
    return {
        type: "CONFIGURE_SCORING_VERBIAGE",
        payload: verbiage
    }
}

export const generateReport = report => {
    console.log("generate report action", report);
    return {
        type: "GENERATE_REPORT",
        payload: report
    }
}