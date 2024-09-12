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
    isDarkMode: true,
    selectedSearchOption: 'name',
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
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
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    },
})

export const { toggleDarkMode, selectSearchOption } = usersSlice.actions

export default usersSlice.reducer
