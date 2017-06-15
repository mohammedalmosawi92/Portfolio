import axios from "axios";

export function getCV() {
    return (dispatch) => {
        return axios.get(`http://localhost:8080/cv/`).then((response) => {
            dispatch(loadData(response.data.data));
        })
    }
}

export function putCV(data, id) {
    return (dispatch) => {
        return axios.put(`http://localhost:8080/cv/${id}`, data).then((response) => {
            dispatch(getCV());
        })
    }
}

export function deleteProp(id, prop) {
    return (disptach) => {
        return axios.put(`http://localhost:8080/cv/${id}/${prop}`).then((response) => {
            disptach(getCV());
        })
    }
}

export function loadData(data) {
    return {
        type: "loadData",
        data
    }
}
