import { useAppDispatch } from '../hooks'
import { fetchUsers } from '../services/usersSlice'

function ErrorMessage() {
    const dispatch = useAppDispatch()

    return (
        <div className="flex flex-col items-center gap-4 pb-8 pt-4 text-lg sm:py-12 lg:gap-8 lg:py-16 lg:text-xl">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="block size-12 text-red-600 lg:size-20"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                />
            </svg>

            <p className="font-semibold">Failed to fetch data</p>
            <button
                className="rounded-xl border border-lightborder px-5 py-2 text-stone-700 shadow-[0px_0px_26px_2px] shadow-violet-100 transition-colors duration-300 hover:bg-violet-50 hover:text-darkbg dark:border-darkborder dark:bg-darkbg dark:text-stone-300 dark:shadow-darkborder dark:hover:bg-darkTable dark:hover:text-darktext"
                onClick={() => dispatch(fetchUsers())}
            >
                Try Again
            </button>
        </div>
    )
}

export default ErrorMessage
