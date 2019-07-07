import { connect } from 'react-redux'


export const uploadFile = (file, dispatch) => {
    console.log('upload action,', file)
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

export const update = (row, column, value) => {
    console.log("update action", row, column, value)
    return {
        type: "UPDATE",
        payload: [row, column, value]
    }
}

export const replaceScoringVerbiage = (verbiage) => {
    console.log("configure Field action", verbiage)
    return {
        type: "CONFIGURE_SCORING_VERBIAGE",
        payload: verbiage
    }
}