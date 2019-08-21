const initState = {
    quotes: {
        USDUSD: 1,
        USDILS: 3.52765,
        USDEUR: 0.90161,
        USDBTC: 0.000094190908
    },
    convertKinds: {source:"USD", target:"ILS"},
    input:5
    
}

export function coinsReducer(state = initState, action) {
    switch (action.type) {
        case "update_quotes": {
            return { ...state, quotes: action.val }
        }

        case "update_input": {
            return { ...state, input: action.val }
        }

        case "update_source": {
            return { ...state, convertKinds: {...state.convertKinds, source: action.val} }
        }

        case "update_target": {
            return { ...state, convertKinds: {...state.convertKinds, target: action.val} }
        }

        case "switch": {
            return { ...state, convertKinds: {source: state.convertKinds.target, target: state.convertKinds.source} }
        }

        default: {
            return state;
        }
    }
}