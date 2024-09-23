import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User, UsersState } from '../types/types'

const initialState: UsersState = {
    users: [],
    filteredUsers: [],
    searchTerm: '',
    mode: '',
    isDarkMode: false,
    sort: 'ascending',
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers(state, action: PayloadAction<User[]>) {
            state.users = action.payload
            state.filteredUsers = action.payload
        },
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
})

export const {
    setDarkMode,
    filterUsers,
    setSearchTerm,
    initializeDarkMode,
    setSortType,
    sortUsers,
    setUsers,
} = usersSlice.actions

export default usersSlice.reducer
