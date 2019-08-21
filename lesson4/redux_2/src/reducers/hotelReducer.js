const initState = { rooms: 2, people: 4 }

export function hotelReducer(state = initState, action) {
    switch (action.type) {
        case "update_rooms": {
            return { ...state, rooms: action.val }
        }
        case "update_people": {
            return {...state, people: action.val}
        }
        default: {
            return state;
        }
    }
}