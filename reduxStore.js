
function moodeReducer(state={}, action){
    switch(action.type){
        case "CUTE":
            return {...state, mood: action.payload}
        case "GROSS":
            return {...state, mood: action.payload}
        case "HAPPY":
            return {...state, mood: action.payload}
        case "CONFUSED":
            return {...state, mood: action.payload}
        default:
            return {...state, mood: "ಠ▃ಠ"}
    }
}

const store = Redux.createStore(moodeReducer);

