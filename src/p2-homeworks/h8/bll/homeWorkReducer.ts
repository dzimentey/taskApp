import {UserType} from "../HW8";

type ActionType =   {type: 'check', payload: number} | {type: 'sort', payload: 'up'|'down'}

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any?
    switch (action.type) {
        case 'sort': {
            // need to fix
            return state
        }
        case 'check': {
            // need to fix?
            return state.filter(u => u.age >= action.payload)
        }
        default: return state
    }
}