import React from 'react'
import m from './Message.module.css'

type messageDataType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: messageDataType) {
    return (
        <div className={m.container}>
            <img className={m.avatar} alt='avatar' src={props.avatar}/>

            <div className={m.triangle}></div>

            <div className={m.message}>
                <span>{props.name}</span>

                <div className={m.message_text}>
                    {props.message}
                </div>

                <div className={m.time}>
                    {props.time}
                </div>
            </div>
        </div>
    )
}

export default Message;

