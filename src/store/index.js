import { createStore } from "redux";


function reducers() {
    return {
        username: ''
    };
}

export default () => {
    return {
        ...createStore(reducers)
    };
};