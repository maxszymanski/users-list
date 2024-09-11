import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchUsers } from '../services/usersSlice'
import TableCategory from './TableCategory'
import UserRow from './UserRow'

function UsersList() {
    const dispatch = useAppDispatch()

    const users = useAppSelector((state) => state.users.users)
    const status = useAppSelector((state) => state.users.status)

    const error = useAppSelector((state) => state.users.error)

    console.log(users[0])

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchUsers())
        }
    }, [status, dispatch])

    if (status === 'loading') {
        return <div>Loading...</div>
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>
    }

    return (
        <div className="w-full p-12 text-6xl">
            <div className="mx-auto w-full max-w-[1400px]">
                <div className="h-full w-full overflow-auto rounded-xl border border-lightborder bg-secondBg dark:border-darkborder dark:bg-darkbg">
                    <TableCategory />

                    {users.map((user) => (
                        <UserRow user={user} key={user.id} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default UsersList
