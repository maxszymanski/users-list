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
    status: 'idle',
    error: '',
    isDarkMode: false,
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        filterUsers(state, action: PayloadAction<string>) {
            state.users = state.users.name
                ? state.users.filter((user) =>
                      user.name.includes(action.payload)
                  )
                : state.users
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
                // Dodajemy użytkowników do stanu po udanym pobraniu
                state.users = action.payload
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    },
})

export const { filterUsers, toggleDarkMode } = usersSlice.actions

export default usersSlice.reducer
