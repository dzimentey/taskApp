import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'
type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (id:number) => void// need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}//  fixed

    const priorityClass = s.priority +' '+ s[props.affair.priority]

    return (
        <div>
            {/*// show some text*/}
            <div className={s.aim}>{props.affair.name}</div>
            <div className={priorityClass}>{props.affair.priority}</div>

            <button className={s.deleteButton} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
