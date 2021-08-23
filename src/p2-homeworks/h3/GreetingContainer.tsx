import React, {FormEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";


type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string)=>void// need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any?
    const [error, setError] = useState<string | boolean>('') // need to fix any?

    const setNameCallback = (e: FormEvent<HTMLInputElement>) => { // need to fix any?
        setName(e.currentTarget.value);// need to fix?
        setError('')
    }
    const addUser = () => { // need to fix?
        if (name !== '') {
            addUserCallback(name.trim());
            alert(`Hello ${name} !`);
            setTotalUsers(totalUsers +1)
            console.log(users)
        } else {
            setError('Name is required')
        }

        setName('')
    }


    const [totalUsers, setTotalUsers] = useState(0)  // need to fix?

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
