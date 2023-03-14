import { createContext, useReducer } from "react";

// Khai bao createContext
export const ReminderContext = createContext();


export const remindersReducer = (state, action) => { //*** state: initial value (state)
                                                    //**** action: {
                                                       // type: ____;
                                                        // payload: ____;
                                                    //*****}

    switch(action.type){
        case 'SET_REMINDERS':
            return {
                reminders: action.payload
            }
        case "CREATE_REMINDERS":
            return {
                reminders: [action.payload, ...state.reminders]
            }
        case 'DELETE_REMINDERS':{
            return{
                reminders: state.reminders.filter((subReminder) => subReminder._id !== action.payload._id )
            }
        }
        default:
            return state
    }
}

export const ReminderContextProvider = ({ children }) => { //* children đại diện cho App
                                                         //** Destructure Js App
    const [state, dispatch] = useReducer(remindersReducer, {
        remiders: null //Initial Value for the "state"
    })


    return(
        <ReminderContext.Provider value={{...state, dispatch}}>
            {children} 
        </ReminderContext.Provider>
    );
}
