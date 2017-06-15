let mainReducers = (state, action) => {
    if (action.type === "loadData") {
        return {
            cv: action.data[0]
        }
    } else {
        return {
            cv: {
                name: "",
                job: "",
                bio: "",
                databases: [],
                frameworks: [],
                languages: [],
                _id: "",
                image: ""
            }
        }
    }
}

export default mainReducers;
