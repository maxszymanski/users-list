import { useEffect } from 'react'
import { fetchUsers } from './services/usersSlice'
import { useAppDispatch, useAppSelector } from './hooks'

function App() {
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

    console.log(users)
    console.log(status)

    return <div className="text-6xl">App</div>
}

export default App
