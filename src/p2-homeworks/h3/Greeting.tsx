import React, {FormEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any?
    setNameCallback: (e: FormEvent<HTMLInputElement>) => void // need to fix any?
    addUser: () => void // need to fix any?
    error: string | boolean // need to fix any?
    totalUsers: number | string // need to fix any?
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error !== '' ? s.error : s.someClass // need to fix with (?:) ?

    return (
        <div className={s.mainContainer}>
            <div className={s.inputBlock}>
                <input value={name} onChange={setNameCallback} className={inputClass}
                       placeholder={error ? 'Enter your name' : ''}
                />
                <button disabled={error !== ''} onClick={addUser}>add</button>
            </div>
            <div className={s.errorMessage}>
                {error}
            </div>

            <div className={s.totalUsers}>
                total users: {totalUsers}
            </div>

        </div>
    )
}

export default Greeting
