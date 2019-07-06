
export default function upload(state = [], action) {
    console.log("upload reducer", action)
    switch (action.type) {
        
      case 'UPLOAD':
        return state.concat([action.payload])
      default:
        return state
    }
  }