import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchUsers } from '../services/usersSlice'
import TableCategory from './TableCategory'
import UserRow from './UserRow'
import Spinner from './Spinner'

function UsersList() {
    const dispatch = useAppDispatch()

    const users = useAppSelector((state) => state.users.users)
    const status = useAppSelector((state) => state.users.status)

    const error = useAppSelector((state) => state.users.error)
    const [searchTerm, setSearchTerm] = useState('')
    const isLoading = status === 'loading'

    console.log(users[0])

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchUsers())
        }
    }, [status, dispatch])

    const filteredUsers = users.filter((user) => {
        const fullName = `${user.firstname} ${user.lastname}`.toLowerCase()
        const username = user.login.username.toLowerCase()
        const email = user.email.toLowerCase()
        const phone = user.phone.toLowerCase()

        return (
            fullName.includes(searchTerm.toLowerCase()) ||
            username.includes(searchTerm.toLowerCase()) ||
            email.includes(searchTerm.toLowerCase()) ||
            phone.includes(searchTerm.toLowerCase())
        )
    })

    if (status === 'failed') {
        return <div>Error: {error}</div>
    }

    return (
        <div className="flex w-full py-6 text-6xl">
            <div
                className={`mx-auto ${isLoading ? 'w-full md:w-[768px]' : 'w-[768px]'} lg:mr-0 xl:w-[800px]`}
            >
                <div
                    className={`h-full overflow-hidden border border-l-0 border-r-0 border-lightborder bg-slate-50 text-center dark:border-darkborder dark:bg-darkbg md:w-full md:rounded-xl md:border-l md:border-r xl:w-[800px] ${isLoading ? 'w-full md:w-[768px]' : 'w-[768px]'} `}
                >
                    <input
                        type="text"
                        placeholder="Szukaj użytkowników..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <TableCategory />
                    {isLoading && <Spinner />}
                    {filteredUsers.map((user) => (
                        <UserRow user={user} key={user.id} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default UsersList
