import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchUsers } from '../services/usersSlice'

function UsersList() {
    const dispatch = useAppDispatch()

    const users = useAppSelector((state) => state.users.users)
    const status = useAppSelector((state) => state.users.status)

    const error = useAppSelector((state) => state.users.error)

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
        <div className="text-lighttext dark:text-darktext w-full text-center text-6xl">
            App
        </div>
    )
}

export default UsersList
