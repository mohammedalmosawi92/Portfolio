let mainReducers = (state, action) => {
    if(action.type === "loadData") {
        return {
            cv: action.data[0]
        }
    }else {
        return {
            cv: {}
        }
    }
}

export default mainReducers;