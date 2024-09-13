import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

export const fetchUsers = createAsyncThunk('users/fechUsers', async () => {
    const res = await fetch('https://jsonplaceholder.org/users')
    if (!res.ok) {
        throw new Error('Error fetching users')
    }
    const users = await res.json()

    return users
})

const initialState = {
    users: [],
    filteredUsers: [],
    status: 'idle',
    searchTerm: '',
    selectedSearchOption: 'name',
    isDarkMode: true,
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        filterUsers(state) {
            state.filteredUsers = state.users.filter((user) => {
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

        selectSearchOption(state, action: PayloadAction<string>) {
            state.selectedSearchOption = action.payload
        },

        toggleDarkMode(state) {
            state.isDarkMode = !state.isDarkMode
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
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = 'failed'
            })
    },
})

export const {
    toggleDarkMode,
    selectSearchOption,
    filterUsers,
    setSearchTerm,
} = usersSlice.actions

export default usersSlice.reducer
