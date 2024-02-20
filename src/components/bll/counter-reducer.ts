const initialState = {
    valueStart: 0,
    valueMax: 5,
    counter: 0
}
type InitialStateType = typeof initialState
type ActionType =
    | ReturnType<typeof valueStartAC>
    | ReturnType<typeof valueMaxAC>
    | ReturnType<typeof valueCounterAC>
    | ReturnType<typeof valueResetCounterAC>
export  const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "VALUE-START":
            return {...state, valueStart: action.newValue}
        case "VALUE-MAX":
            return {...state, valueMax: action.newValue}
        case "VALUE-COUNTER":
            return {...state, counter: action.counter + 1}
        case "VALUE-RESET-COUNTER":
            return {...state, counter: state.valueStart}
        default:
            return state;
    }
}
export const valueStartAC = (newValue: number) => ({type: 'VALUE-START', newValue} as const)
export const valueMaxAC = (newValue: number) => ({type: 'VALUE-MAX', newValue} as const)
export const valueCounterAC = (counter: number) => ({type: 'VALUE-COUNTER', counter} as const)
export const valueResetCounterAC = () => ({type: 'VALUE-RESET-COUNTER'} as const)