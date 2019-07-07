


export const uploadFile = file => {
    console.log('upload action,', file)
    return {
        type: "UPLOAD",
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