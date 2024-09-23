import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { setUsers, sortUsers } from '../services/usersSlice'
import TableCategory from './TableCategory'
import UserRow from './UserRow'
import Spinner from './Spinner'
import ErrorMessage from './ErrorMessage'
import NoUsersFound from './NoUsersFound'
import UsersCount from './UsersCount'
import { User } from '../types/types'
import { useGetUsersQuery } from '../services/users'

function UsersList() {
    const dispatch = useAppDispatch()
    const { data: users = [], error, isLoading } = useGetUsersQuery()

    useEffect(() => {
        if (users.length > 0) {
            dispatch(setUsers(users))
            dispatch(sortUsers())
        }
    }, [users, dispatch])
    const filteredUsers: User[] = useAppSelector(
        (state) => state.users.filteredUsers
    )

    const noUsersFound = filteredUsers.length === 0

    return (
        <div className="flex h-full w-full px-2 py-6 text-6xl">
            <div
                className={`mx-auto w-full max-w-[375px] sm:max-w-[768px] xl:mr-0 xl:max-w-[800px]`}
            >
                <ul
                    className={`relative h-full w-full overflow-hidden rounded-xl border border-t-0 border-lightborder bg-slate-50 text-center shadow-[0px_0px_26px_2px] shadow-violet-100 dark:border-darkborder dark:bg-darkSecondBg dark:shadow-darkborder sm:border-t md:w-full`}
                >
                    <TableCategory />

                    {isLoading && <Spinner />}
                    {error && !isLoading && <ErrorMessage />}
                    {noUsersFound && !error && !isLoading && <NoUsersFound />}
                    {filteredUsers.map((user: User) => (
                        <UserRow user={user} key={user.id} />
                    ))}
                    <UsersCount
                        filteredCount={filteredUsers.length}
                        totalCount={users.length}
                    />
                </ul>
            </div>
        </div>
    )
}

export default UsersList
