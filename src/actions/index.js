


export const uploadFile = file => {
    console.log('upload action,', file)
    return {
        type: "UPLOAD",
        payload: file
    }
}

export const update = (row, column) => {
    console.log("update action", row, column)
    return {
        type: "UPDATE",
        payload: [row, column]
    }
}