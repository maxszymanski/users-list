import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User, UsersState } from '../types/types'

export const fetchUsers = createAsyncThunk('users/fechUsers', async () => {
    const res = await fetch('https://jsonplaceholder.org/users')
    if (!res.ok) {
        throw new Error('Error fetching users')
    }
    const users = await res.json()

    return users
})

const initialState: UsersState = {
    users: [],
    filteredUsers: [],
    status: 'idle',
    searchTerm: '',
    mode: '',
    isDarkMode: false,
    sort: 'ascending',
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        filterUsers(state) {
            state.filteredUsers = state.users.filter((user: User) => {
                const fullName =
                    `${user.firstname} ${user.lastname}`.toLowerCase()
                const username = user.login.username.toLowerCase()
                const email = user.email.toLowerCase()
                const phone = user.phone.replace(/[()\-\s]/g, '')

                return (
                    fullName.includes(state.searchTerm.toLowerCase()) ||
                    username.includes(state.searchTerm.toLowerCase()) ||
                    email.includes(state.searchTerm.toLowerCase()) ||
                    phone.includes(state.searchTerm)
                )
            })
        },
        setSearchTerm(state, action: PayloadAction<string>) {
            state.searchTerm = action.payload
        },
        setSortType(state, action: PayloadAction<string>) {
            state.sort = action.payload
        },

        sortUsers(state) {
            state.filteredUsers = state.filteredUsers.sort(
                (a: User, b: User) => {
                    return a.login.username.localeCompare(b.login.username)
                }
            )
            if (state.sort === 'descending') {
                state.filteredUsers.reverse()
            }
        },

        setDarkMode(state, action: PayloadAction<boolean>) {
            state.isDarkMode = action.payload
            state.mode = action.payload ? 'dark' : 'light'
            localStorage.setItem('mode', state.mode)
        },
        initializeDarkMode(state) {
            const storedMode = localStorage.getItem('mode')
            if (storedMode) {
                state.mode = storedMode
                state.isDarkMode = storedMode === 'dark'
            } else {
                const prefersDark = window.matchMedia(
                    '(prefers-color-scheme: dark)'
                ).matches
                state.isDarkMode = prefersDark
                state.mode = prefersDark ? 'dark' : 'light'
                localStorage.setItem('mode', state.mode)
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.users = action.payload
                state.filteredUsers = action.payload

                usersSlice.caseReducers.sortUsers(state)
            })
            .addCase(fetchUsers.rejected, (state) => {
                state.status = 'failed'
            })
    },
})

export const {
    setDarkMode,
    filterUsers,
    setSearchTerm,
    initializeDarkMode,
    setSortType,
    sortUsers,
} = usersSlice.actions

export default usersSlice.reducer
