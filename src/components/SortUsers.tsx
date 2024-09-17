import { useAppDispatch, useAppSelector } from '../hooks'
import { setSortType, sortUsers } from '../services/usersSlice'

function SortUsers() {
    const dispatch = useAppDispatch()
    const sort = useAppSelector((state) => state.users.sort)
    const isAscending = sort === 'ascending'

    const toggleSort = () => {
        dispatch(setSortType(sort === 'ascending' ? 'descending' : 'ascending'))
        dispatch(sortUsers())
    }

    return (
        <button
            className="flex items-center gap-4 text-nowrap rounded-xl border border-lightborder bg-secondBg from-violet-100 to-bg px-5 py-2 text-base shadow-[0px_0px_26px_2px] shadow-violet-100 outline-none transition-colors duration-300 hover:border-primary focus:shadow-violet-300 dark:border-darkborder dark:bg-darkTable dark:bg-none dark:shadow-darkborder dark:hover:border-primary dark:focus:border-primary xl:bg-gradient-to-b"
            onClick={toggleSort}
        >
            Sort
            <span className="flex flex-col items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`size-3.5 ${isAscending ? 'text-darkbg dark:text-darktext' : 'text-stone-400 dark:text-stone-500'}`}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 15.75 7.5-7.5 7.5 7.5"
                    />
                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`size-3.5 font-bold ${isAscending ? 'text-stone-400 dark:text-stone-500' : 'text-darkbg dark:text-darktext'}`}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                </svg>
            </span>
        </button>
    )
}

export default SortUsers
