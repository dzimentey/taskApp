import {UserType} from "../HW8";

type ActionType =   {type: 'check', payload: number} | {type: 'sort', payload: 'up'|'down'}

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any?
    switch (action.type) {
        case 'sort': {
            // need to fix?
            const newState = [...state].sort((a, b) => {
              if (a.name > b.name) return 1
                else if (a.name < b.name) return -1
                return 0 // if names are equal

            })
            return action.payload === 'up' ? newState : newState.reverse()
        }
        case 'check': {
            // need to fix?
            return state.filter(u => u.age >= action.payload)
        }
        default: return state
    }
}