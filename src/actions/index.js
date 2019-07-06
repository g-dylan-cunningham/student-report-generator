


export const uploadFile = file => {
    console.log('upload action,', file)
    return {
        type: "UPLOAD",
        payload: file
    }
    
}