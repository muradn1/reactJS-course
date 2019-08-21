const initstate = {
    counter:777
}

export function reducer(state = initstate, action){
    if(action.type == "add"){
        return { ...state,counter:state.counter+1}
    }
    else{
        return state;
    }
}