import axios from "axios";

export function getCV() {
    return (dispatch) => {
        return axios.get("http://localhost:8080/cv/").then((response) => {
            dispatch(loadData(response.data.data));
        })
    }
}

export function loadData(data) {
    return {
        type: "loadData",
        data
    }
}