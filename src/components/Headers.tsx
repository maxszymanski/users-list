import { useCallback, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { setDarkMode, initializeDarkMode } from '../services/usersSlice'

function Headers() {
    const dispatch = useAppDispatch()
    const isDarkMode = useAppSelector((state) => state.users.isDarkMode)
    const mode = useAppSelector((state) => state.users.mode)

    useEffect(() => {
        dispatch(initializeDarkMode())
    }, [dispatch])

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark')
        } else {
            document.body.classList.remove('dark')
        }
    }, [isDarkMode])

    const darkModeHandler = () => {
        dispatch(setDarkMode(!isDarkMode))
    }

    return (
        <header className="border-b border-lightborder bg-secondBg px-8 py-4 text-darkbg shadow-2xl shadow-violet-100 dark:border-darkborder dark:bg-darkbg dark:text-darktext dark:shadow-darkborder lg:py-5">
            <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between lg:px-8">
                <h1 className="font-kalam text-2xl font-bold text-primary lg:text-3xl">
                    Users List
                </h1>
                <button
                    className="mb-1 rounded-md border-2 border-transparent p-2 transition-colors duration-300 lg:hover:border-primary"
                    onClick={darkModeHandler}
                >
                    {isDarkMode ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6 xl:size-7"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6 xl:size-7"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                            />
                        </svg>
                    )}
                </button>
            </div>
        </header>
    )
}

export default Headers
