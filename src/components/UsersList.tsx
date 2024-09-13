import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchUsers } from '../services/usersSlice'
import TableCategory from './TableCategory'
import UserRow from './UserRow'
import Spinner from './Spinner'

function UsersList() {
    const dispatch = useAppDispatch()
    const filteredUsers = useAppSelector((state) => state.users.filteredUsers)
    const status = useAppSelector((state) => state.users.status)
    const error = useAppSelector((state) => state.users.error)

    const isLoading = status === 'loading'

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchUsers())
        }
    }, [status, dispatch])

    if (status === 'failed') {
        return <div>Error: {error}</div>
    }

    return (
        <div className="flex w-full px-2 py-6 text-6xl">
            <div
                className={`mx-auto w-full max-w-[375px] sm:max-w-[768px] xl:mr-0 xl:max-w-[800px]`}
            >
                <ul
                    className={`h-full w-full overflow-hidden rounded-xl border border-t-0 border-lightborder bg-slate-50 text-center shadow-[0px_0px_26px_2px] shadow-violet-100 dark:border-darkborder dark:bg-darkSecondBg dark:shadow-darkborder sm:border-t md:w-full`}
                >
                    <TableCategory />
                    {isLoading && <Spinner />}
                    {filteredUsers.map((user) => (
                        <UserRow user={user} key={user.id} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default UsersList
