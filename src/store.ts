import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './services/usersSlice'
import { usersApi } from './services/users'

const store = configureStore({
    reducer: {
        users: usersReducer,
        [usersApi.reducerPath]: usersApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(usersApi.middleware),
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
