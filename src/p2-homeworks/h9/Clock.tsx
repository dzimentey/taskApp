import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './WH9.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {

        clearInterval(timerId) // stop
    }

    const start = () => {
        stop()
        const id: number = window.setInterval(() => { // equal to +setInterval... (typescript bug)
            setDate(new Date())// setDate
        }, 1000)
        setTimerId(id)
    }


    const onMouseEnter = () => {
       setShow(true) // show
    }

    const onMouseLeave = () => {
        setShow(false) // close
    }

    const stringTime = date?.toLocaleTimeString() ?? <br/>  // fix with date?
    const stringDate = date?.toLocaleDateString() ?? <br/>  // fix with date?

    return (

            <div className={s.container}>
                <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
                className={s.dateTime}>
                    {stringTime}
                </div>

                {show ? <div className={s.dateTime}>{stringDate}</div> : <br/>}

                <div className={s.controls}>
                    <SuperButton onClick={start}>start</SuperButton>
                    <SuperButton onClick={stop}>stop</SuperButton>
                </div>

            </div>

    )
}

export default Clock
