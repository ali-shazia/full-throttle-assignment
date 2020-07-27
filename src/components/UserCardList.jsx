import React, { Component, useState } from 'react'
import {getUsers} from '../utils/MockApi'
import UserCard from './UserCard'
export default function UserCardList () {
    const [users, setUsers] = useState(getUsers())
        return (
            <div>
                {users && users.map(user => <UserCard key = {user.id} user = {user}/>)}
            </div>
        )
}
