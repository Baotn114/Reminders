import { ReminderContext } from "../context/ReminderContext";
import { useContext } from "react";

export const useRemindersContext = () =>{
    const context = useContext(ReminderContext);
    return context;
}


